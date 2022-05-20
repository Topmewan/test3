import React from 'react';
import styles from './IButton.module.scss';

export const IButton = ({ variant, children, onClick, className }) => {
	return (
		<button
			className={`${styles.button} ${variant === 'light' && styles.light} ${
				variant === 'dark' && styles.dark
			} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
