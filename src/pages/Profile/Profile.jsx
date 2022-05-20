import { UserInfo } from './UserInfo/UserInfo';
import { Posts } from './Posts/Posts';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../../feature/reducers/users/users.actions';
import { fetchUserPosts } from '../../feature/reducers/posts/posts.actions';

import styles from './Profile.module.scss';

export const Profile = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { user, isLoading } = useSelector((state) => state.users);
	const { posts } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchUser(id));
		dispatch(fetchUserPosts(id));
	}, [dispatch, id]);

	return (
		<div className={styles.profile}>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<UserInfo user={user} />
					<Posts posts={posts} />
				</>
			)}
		</div>
	);
};
