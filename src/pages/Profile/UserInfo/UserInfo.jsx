import styles from './UserInfo.module.scss';
import { Typography, IButton } from './../../../ui-kit';

export const UserInfo = () => {
	return (
		<section className={styles.info}>
			<div className={styles.first}>
				<div className={styles.container}>
					<div className={styles.top}>
						<Typography text='Иван Хуй' variant='title' />
					</div>
				</div>
			</div>
			<div className={styles.first}>
				<div className={styles.container}>
					<div className={styles.bottom}>
						<ul>
							<li>Санкт-Петербург</li>
							<li>ivanov@mail.com</li>
							<li>+7 (821) 311-21-32</li>
						</ul>
						<IButton variant='dark'>Написать сообщение</IButton>
						<IButton variant='dark'>Предложить сходить на концерт</IButton>
					</div>
				</div>
			</div>
		</section>
	);
};
