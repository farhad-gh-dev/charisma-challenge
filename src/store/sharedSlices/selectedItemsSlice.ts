import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface SelectedItemsState {
  selectedItems: string[];
}

const initialState: SelectedItemsState = {
  selectedItems: [],
};

export const selectedItemsListSlice = createSlice({
  name: "selectedItemsList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.selectedItems = [...state.selectedItems, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.selectedItems = [
        ...state.selectedItems.filter((item) => item !== action.payload),
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
