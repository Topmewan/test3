import styles from './Profile.module.scss';
import { UserInfo } from './UserInfo/UserInfo';
import { Posts } from './Posts/Posts';

export const Profile = () => {
	return (
		<div className={styles.profile}>
			<UserInfo />
			<Posts />
		</div>
	);
};
