import React from 'react';
import { About } from './About/About';
import { AboutGroup } from './AboutGroup/AboutGroup';
import { Header } from './Header/Header';
import { UsersList } from './UsersList/UsersList';
import styles from './Home.module.scss';

export const Home = () => {
	return (
		<div className={styles.home}>
			<Header />
			<UsersList />
			<About />
			<AboutGroup />
		</div>
	);
};
