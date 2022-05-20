import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUser } from './users.actions';

const initialState = {
	users: [],
	user: {},
	isLoading: false,
	isError: null,
};

const usersSlice = createSlice({
	name: '@@users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = action.payload;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state, action) => {
					state.isLoading = true;
					state.isError = false;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/fulfilled'),
				(state, action) => {
					state.isLoading = false;
					state.isError = null;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.isLoading = false;
					state.isError = action.payload;
				}
			);
	},
});

export default usersSlice.reducer;
