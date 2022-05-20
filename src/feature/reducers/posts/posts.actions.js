import { createAsyncThunk } from "@reduxjs/toolkit";
import TotalService from "./../../../services/TotalApi";

export const fetchUserPosts = createAsyncThunk(
  "@@posts/fetchUserPosts ",
  async (id, { rejectWithValue }) => {
    try {
      const res = await TotalService.getUserPosts(id);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchPost = createAsyncThunk(
  "@@posts/fetchPost ",
  async (id, { rejectWithValue }) => {
    try {
      const res = await TotalService.getPost(id);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
