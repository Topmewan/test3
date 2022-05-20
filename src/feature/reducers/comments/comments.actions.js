import { createAsyncThunk } from '@reduxjs/toolkit';
import TotalService from './../../../services/TotalApi';

export const fetchPostComments = createAsyncThunk(
	'@@comments/fetchPostComments',
	async (id, { rejectWithValue }) => {
		try {
			const res = await TotalService.getPostComments(id);
			return res.data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const uploadComment = createAsyncThunk(
	'@@comments/uploadComment',
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const res = await TotalService.addPostComment(id, data);
			return res.data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
