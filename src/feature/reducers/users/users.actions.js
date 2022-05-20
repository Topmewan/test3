import { createAsyncThunk } from '@reduxjs/toolkit';
import TotalService from './../../../services/TotalApi';
export const fetchUsers = createAsyncThunk(
	'@@users/fetchUsers',
	async (_, { rejectWithValue }) => {
		try {
			const res = await TotalService.getUsers();
			return res.data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const fetchUser = createAsyncThunk(
	'@@users/fetchUser',
	async (id, { rejectWithValue }) => {
		try {
			const res = await TotalService.getUser(id);
			return res.data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
