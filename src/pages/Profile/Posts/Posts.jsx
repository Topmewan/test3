import styles from './Posts.module.scss';
import { Typography } from '../../../ui-kit';
import { PostCard } from '../PostCard/PostCard';

export const Posts = () => {
	return (
		<section className={styles.posts}>
			<div className={styles.container}>
				<Typography text='Посты' variant='title' />
				<div className={styles.list}>
					<PostCard desc='Просто шикарный альбом, Пилоты после Blurryface решили не идти проторенной дорожкой, и сделали что то новое. На мой взгляд у них на 100% получилось, альбом слушается на одном дыхании, каждая песня чем то запоминается, естественно нужно понимать тексты, чтобы вникнуть до конца во весь сюжет' />
					<PostCard desc='Просто шикарный альбом, Пилоты после Blurryface решили не идти проторенной дорожкой, и сделали что то новое. На мой взгляд у них на 100% получилось, альбом слушается на одном дыхании, каждая песня чем то запоминается, естественно нужно понимать тексты, чтобы вникнуть до конца во весь сюжет' />
				</div>
			</div>
		</section>
	);
};
