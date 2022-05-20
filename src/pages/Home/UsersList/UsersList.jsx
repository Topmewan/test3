import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserCard } from '../UserCard/UserCard';
import { Typography } from './../../../ui-kit';
import { fetchUsers } from '../../../feature/reducers/users/users.actions';
import styles from './UsersList.module.scss';

export const UsersList = () => {
	const dispatch = useDispatch();
	const { users } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const previewUsers = users?.slice(0, 4);

	return (
		<section className={styles.userlist}>
			<div className={styles.container}>
				<div className={styles.top}>
					<Typography text='Купили билеты' variant='title' />
					<div className={styles.count}>
						<Typography text='932/' variant='title' />
						<Typography color='lightgray' text='1000' variant='title' />
					</div>
				</div>
				<div className={styles.list}>
					{previewUsers?.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			</div>
		</section>
	);
};
