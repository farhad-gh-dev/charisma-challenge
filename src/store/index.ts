import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersListReducer from "../features/UsersList/usersListSlice";
import postsListReducer from "../features/PostsList/postsListSlice";
import selectedItemsReducer from "./sharedSlices/selectedItemsSlice";

export const store = configureStore({
  reducer: {
    usersList: usersListReducer,
    postsList: postsListReducer,
    selectedItemsList: selectedItemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
