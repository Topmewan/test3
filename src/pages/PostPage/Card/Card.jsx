import styles from './Card.module.scss';

export const Card = ({ cardTitle, cardSubtitle, cartBody }) => {
	return (
		<div className={styles.card}>
			<p>{cardTitle}</p>
			<p>{cardSubtitle}</p>
			<p className={styles.body}>{cartBody}</p>
		</div>
	);
};
