import styles from './PostCard.module.scss';
import { Typography } from '../../../ui-kit';
import { postContentPreview } from '../../../utils/helpers/string.helpers';

export const PostCard = ({ desc }) => {
	return (
		<div className={styles.card}>
			<div className={styles.top}>
				<Typography text='Название' variant='subtitle' />
				<span>12.01.22</span>
			</div>
			<p className={styles.body}>{postContentPreview(desc)}</p>
		</div>
	);
};
