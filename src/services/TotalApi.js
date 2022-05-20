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

const TotalService = {
	getUsers,
	getUser,
	getUserPosts,
	getPostComments,
	getPost,
};

export default TotalService;
