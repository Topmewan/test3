import styles from './Profile.module.scss';
import { UserInfo } from './UserInfo/UserInfo';
import { Posts } from './Posts/Posts';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../../feature/reducers/users/users.actions';
import { fetchUserPosts } from '../../feature/reducers/posts/posts.actions';

export const Profile = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.users);
	const { posts } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchUser(id));
		dispatch(fetchUserPosts(id));
	}, [dispatch, id]);

	return (
		<div className={styles.profile}>
			<UserInfo user={user} />
			<Posts posts={posts} />
		</div>
	);
};
