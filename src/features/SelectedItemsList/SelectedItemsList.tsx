import React from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  selectSelectedItemsList,
  removeItem,
} from "store/sharedSlices/selectedItemsSlice";
import { Box, Chip, Typography } from "@mui/material";

export const SelectedItemsList: React.FC = () => {
  const selectedItemsList = useAppSelector(selectSelectedItemsList);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        bgcolor: "white",
        height: 725,
        overflow: "scroll",
        padding: 2,
        width: 400,
      }}
    >
      {selectedItemsList.length !== 0 && <Typography>Tap to delete</Typography>}

      {selectedItemsList.map((item) => (
        <Chip
          key={item}
          label={item}
          onClick={() => dispatch(removeItem(item))}
          color="primary"
          sx={{ margin: "5px" }}
        />
      ))}
    </Box>
  );
};
