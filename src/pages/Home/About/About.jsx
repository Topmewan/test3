import { Typography } from './../../../ui-kit';
import { FeedBack } from './FeedBack/FeedBack';
import styles from './About.module.scss';

export const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.container}>
				<div className={styles.left}>
					<Typography text='О площадке' variant='title' />
					<div className={styles.info}>
						<div className={styles.line}>
							<div className={styles.subline}></div>
						</div>

						<div className={styles.text}>
							<p>
								Современная площадка для проведения концертов и других
								мероприятий любой сложности.
							</p>
							<p>
								Мы предоставляем всю необходимую для организаторов
								инфраструктуру и готовые решения под все основные задачи любого
								события, а также современное оборудование, соответствующее самым
								высоким мировым стандартам.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.right}>
					<FeedBack />
				</div>
			</div>
		</section>
	);
};
