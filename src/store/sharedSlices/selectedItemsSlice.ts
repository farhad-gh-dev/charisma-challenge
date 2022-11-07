import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { v4 as uuidV4 } from "uuid";
import { SelectedItem } from "./types";

export interface SelectedItemsState {
  selectedItems: SelectedItem[];
}

const initialState: SelectedItemsState = {
  selectedItems: [],
};

export const selectedItemsListSlice = createSlice({
  name: "selectedItemsList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const newItem = { id: uuidV4(), title: action.payload };

      state.selectedItems = [...state.selectedItems, newItem];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.selectedItems = [
        ...state.selectedItems.filter((item) => item.id !== action.payload),
      ];
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
  },
});

export const { addItem, removeItem, clearSelectedItems } =
  selectedItemsListSlice.actions;

export const selectSelectedItemsList = (state: RootState) =>
  state.selectedItemsList.selectedItems;

export default selectedItemsListSlice.reducer;
