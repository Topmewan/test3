import styles from './Profile.module.scss';
import { UserInfo } from './UserInfo/UserInfo';

export const Profile = () => {
	return (
		<div className={styles.profile}>
			<UserInfo />
		</div>
	);
};
