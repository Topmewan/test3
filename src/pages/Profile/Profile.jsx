import styles from './Profile.module.scss';
import { UserInfo } from './UserInfo/UserInfo';
import TotalService from './../../services/TotalApi';
import { Posts } from './Posts/Posts';
import { useFetch } from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';

export const Profile = () => {
	const { id } = useParams();
	const { data: user } = useFetch(TotalService.getUser, id);
	const { data: userPosts } = useFetch(TotalService.getUserPosts, id);

	return (
		<div className={styles.profile}>
			<UserInfo user={user} />
			<Posts posts={userPosts} />
		</div>
	);
};
