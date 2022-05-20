import styles from './Typography.module.scss';

export const Typography = ({ text, variant, className, color }) => {
	return (
		<h1
			className={`${styles.typography} ${variant === 'title' && styles.title} ${
				variant === 'subtitle' && styles.subtitle
			} ${className}`}
			style={{ color: `${color}` }}
		>
			{text}
		</h1>
	);
};
