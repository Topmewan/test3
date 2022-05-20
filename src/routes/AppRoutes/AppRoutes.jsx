import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Profile } from './../../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/profile/:id' element={<Profile />} />
		</Routes>
	);
};
