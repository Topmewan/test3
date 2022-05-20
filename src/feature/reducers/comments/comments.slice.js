import { createSlice } from '@reduxjs/toolkit';
import { fetchPostComments, uploadComment } from './comments.actions';

const initialState = {
	comments: [],
	isLoading: false,
	isError: null,
};

const commentsSlice = createSlice({
	name: '@@comments',
	initialState,
	reducers: {
		addComment: (state, action) => {
			state.comments = [...state.comments, action.payload];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPostComments.fulfilled, (state, action) => {
				state.comments = action.payload;
			})
			.addCase(uploadComment.fulfilled, (state, action) => {
				console.log(action.payload);
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

export default commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
