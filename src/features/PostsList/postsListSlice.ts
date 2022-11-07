import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { fetchPosts } from "./postsListAPI";
import type { Post } from "./types";

export interface PostsListState {
  status: "idle" | "loading" | "failed";
  posts: Post[];
}

const initialState: PostsListState = {
  status: "idle",
  posts: [],
};

export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetchPosts();
    return response.data;
  }
);

export const postsListSlice = createSlice({
  name: "postsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectPostsList = (state: RootState) => state.postsList.posts;

export default postsListSlice.reducer;
