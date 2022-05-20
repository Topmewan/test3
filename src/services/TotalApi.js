import { api } from './api';
const getUsers = () => {
	return api.get('/users');
};

const getUser = (id) => {
	return api.get(`/users/${id}`);
};

const getUserPosts = (id) => {
	return api.get(`/posts?userId=${id}`);
};

const getPost = (id) => {
	return api.get(`/posts/${id}`);
};

const getPostComments = (id) => {
	return api.get(`/posts/${id}/comments`);
};

const addPostComment = (id, data) => {
	return api.post(`/comments?postId=${id}`, data);
};

const TotalService = {
	getUsers,
	getUser,
	getUserPosts,
	getPostComments,
	getPost,
	addPostComment,
};

export default TotalService;
