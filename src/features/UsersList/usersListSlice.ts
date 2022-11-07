import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { fetchUsers } from "./usersListAPI";
import type { User } from "./types";

export interface UsersListState {
  status: "idle" | "loading" | "failed";
  users: User[];
}

const initialState: UsersListState = {
  status: "idle",
  users: [],
};

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetchUsers();
    return response.data;
  }
);

export const usersListSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectUsersList = (state: RootState) => state.usersList.users;

export default usersListSlice.reducer;
