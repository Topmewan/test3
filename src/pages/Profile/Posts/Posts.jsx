import { useState } from 'react';
import { Typography, IButton } from '../../../ui-kit';
import { PostCard } from '../PostCard/PostCard';
import styles from './Posts.module.scss';

export const Posts = ({ posts }) => {
	const [isOpen, setisOpen] = useState(false);

	const handleClick = () => {
		setisOpen((prevOpen) => !prevOpen);
	};

	const previewPosts = !isOpen ? posts.slice(0, 2) : posts;

	return (
		<section className={styles.posts}>
			<div className={styles.container}>
				<div className={styles.top}>
					<Typography text='Посты' variant='title' />
					<IButton variant='dark' onClick={handleClick}>
						{isOpen ? 'Скрыть' : 'Показать все'}
					</IButton>
				</div>
				<div className={styles.list}>
					{previewPosts?.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</div>
			</div>
		</section>
	);
};
