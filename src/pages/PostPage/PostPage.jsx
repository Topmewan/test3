import { Typography, IButton, FormField } from './../../ui-kit';
import { useParams } from 'react-router-dom';
import { Card } from './Card/Card';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useModal } from './../../hooks/useModal';

import { schema } from './validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useComments } from '../../hooks/useComments';
import { uploadComment } from '../../feature/reducers/comments/comments.actions';
import { addComment } from '../../feature/reducers/comments/comments.slice';

import styles from './PostPage.module.scss';

export const PostPage = () => {
	const { id } = useParams();
	const { post, comments, dispatch, isLoading } = useComments(id);
	const { isOpen, openModal, closeModal } = useModal();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = async (data) => {
		const info = {
			postid: id,
			...data,
		};

		dispatch(uploadComment({ id: id, data: info })).then(() => {
			reset();
			dispatch(addComment(info));
			closeModal();
		});
	};

	return (
		<section className={styles.post}>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<div className={styles.container}>
					<section className={styles.main}>
						<Typography text={`Пост ${post?.id}`} variant='title' />
						<Card cardTitle={post?.title} cartBody={post?.body} />
					</section>

					<section className={styles.comments}>
						<Typography text={`Комментарии`} variant='title' />
						<div className={styles.list}>
							{comments.map((comment) => (
								<Card
									key={comment?.id}
									cardTitle={comment?.name}
									cardSubtitle={comment?.email}
									cartBody={comment?.body}
								/>
							))}
						</div>
					</section>
					<IButton variant='dark' onClick={openModal}>
						Оставить комментарий
					</IButton>
					{isOpen && (
						<Modal
							classNames={{ modal: 'modal', closeButton: 'close' }}
							open={isOpen}
							onClose={closeModal}
							center
						>
							<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
								<FormField
									name='name'
									register={register}
									type='text'
									error={errors?.name?.message}
									placeholder='Имя'
								/>
								<FormField
									name='email'
									register={register}
									type='text'
									error={errors?.email?.message}
									placeholder='E-mail'
								/>
								<FormField
									name='body'
									register={register}
									type='text'
									error={errors?.body?.message}
									placeholder='Комментарий'
								/>

								<IButton variant='dark'>Отправить</IButton>
							</form>
						</Modal>
					)}
				</div>
			)}
		</section>
	);
};
