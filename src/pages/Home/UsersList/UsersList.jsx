import { useFetch } from '../../../hooks/useFetch';
import TotalService from '../../../services/TotalApi';
import { UserCard } from '../UserCard/UserCard';
import { Typography } from './../../../ui-kit';
import styles from './UsersList.module.scss';

export const UsersList = () => {
	const { data: users, isLoading } = useFetch(TotalService.getUsers);
	const previewUsers = users?.slice(0, 4);

	return (
		<section className={styles.userlist}>
			<div className={styles.container}>
				<div className={styles.top}>
					<Typography text='Купили билеты' variant='title' />
					<Typography text='932/1000' variant='title' />
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
