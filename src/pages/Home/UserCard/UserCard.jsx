import { Typography, IButton } from './../../../ui-kit';
import styles from './UserCard.module.scss';

export const UserCard = () => {
	return (
		<div className={styles.card}>
			<Typography text='Ivan Hui ' variant='subtitle' />
			<span>Москва</span>
			<IButton className={styles.button} variant='dark'>
				Смотреть профиль
			</IButton>
		</div>
	);
};
