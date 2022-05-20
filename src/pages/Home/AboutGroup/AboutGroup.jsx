import { Typography } from './../../../ui-kit';
import styles from './AboutGroup.module.scss';

export const AboutGroup = () => {
	return (
		<section className={styles.about}>
			<div className={styles.container}>
				<Typography text='О группе' variant='title' />
				<p>
					Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа
					образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа
					и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty
					One Pilots в 2009 и Regional at Best в 2011.
				</p>
			</div>
		</section>
	);
};
