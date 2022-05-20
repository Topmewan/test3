import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Profile, PostPage } from './../../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/profile'>
				<Route index element={<Profile />} />
				<Route path=':id' element={<Profile />} />
			</Route>
			<Route path='/posts'>
				<Route index element={<PostPage />} />
				<Route path=':id' element={<PostPage />} />
			</Route>
		</Routes>
	);
};
