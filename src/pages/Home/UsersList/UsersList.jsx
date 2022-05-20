import { UserCard } from '../UserCard/UserCard';
import { Typography } from './../../../ui-kit';

import styles from './UsersList.module.scss';

export const UsersList = () => {
	return (
		<section className={styles.userlist}>
			<div className={styles.container}>
				<div className={styles.top}>
					<Typography text='Купили билеты' variant='title' />
					<Typography text='932/1000' variant='title' />
				</div>
				<div className={styles.list}>
					<UserCard />
					<UserCard />
					<UserCard />
					<UserCard />
				</div>
			</div>
		</section>
	);
};
