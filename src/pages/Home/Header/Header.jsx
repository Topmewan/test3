import React from 'react';
import bg from './../../../assets/images/bg.png';
import { IButton } from './../../../ui-kit';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<section
			className={styles.header}
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className={styles.title}>
				<h1>Twenty One Pilots</h1>
				<h2>22.02.23 в 21:00</h2>
			</div>

			<div className={styles.action}>
				<IButton variant={'light'}>L</IButton>
				<IButton variant={'light'}>Купить билет</IButton>
				<IButton variant={'light'}>L</IButton>
			</div>
		</section>
	);
};
