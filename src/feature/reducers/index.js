import { combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./posts/posts.slice";
import usersSlice from "./users/users.slice";
import commentsSlice from "./comments/comments.slice";

export const rootReducer = combineReducers({
  users: usersSlice,
  posts: postsSlice,
  comments: commentsSlice,
});
