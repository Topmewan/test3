import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../feature/reducers/posts/posts.actions';
import { fetchPostComments } from '../feature/reducers/comments/comments.actions';

export const useComments = (id) => {
	const dispatch = useDispatch();
	const { post } = useSelector((state) => state.posts);
	const { comments } = useSelector((state) => state.comments);

	useEffect(() => {
		dispatch(fetchPost(id));
		dispatch(fetchPostComments(id));
	}, [dispatch, id]);

	return {
		post,
		comments,
		dispatch,
	};
};
