import styles from './FeedBack.module.scss';
import { IButton } from './../../../../ui-kit';

export const FeedBack = () => {
	return (
		<form className={styles.feedback}>
			<p className={styles.title}>Оставить заявку на проведение концерта</p>
			<textarea name='' id='' cols='30' rows='10'></textarea>
			<IButton className={styles.button} variant='dark'>
				Отправить
			</IButton>
		</form>
	);
};
