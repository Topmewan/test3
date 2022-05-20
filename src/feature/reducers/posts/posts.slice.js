import { createSlice } from "@reduxjs/toolkit";
import { fetchPost, fetchUserPosts } from "./posts.actions";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  isError: null,
};

const postsSlice = createSlice({
  name: "@@posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.isLoading = false;
          state.isError = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export default postsSlice.reducer;
