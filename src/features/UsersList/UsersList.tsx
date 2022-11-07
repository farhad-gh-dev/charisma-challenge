import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectUsersList, fetchUsersAsync } from "./usersListSlice";
import {
  addItem,
  clearSelectedItems,
} from "store/sharedSlices/selectedItemsSlice";
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export const UsersList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const usersList = useAppSelector(selectUsersList);
  const dispatch = useAppDispatch();

  const filteredUsers = usersList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);
  return (
    <Box sx={{ p: 2, backgroundColor: "white" }}>
      <TextField
        id="outlined-basic"
        placeholder="Search..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ width: "400px", marginBottom: "5px" }}
      />
      <List
        sx={{
          width: "100%",
          maxWidth: 400,
          height: 600,
          overflowY: "scroll",
          bgcolor: "background.paper",
        }}
      >
        {filteredUsers.map((item) => (
          <ListItem
            key={item.id}
            sx={{ cursor: "pointer" }}
            onClick={() => dispatch(addItem(item.name))}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.email} />
          </ListItem>
        ))}
      </List>
      <Button
        fullWidth
        variant="contained"
        sx={{ marginTop: "10px" }}
        onClick={() => dispatch(clearSelectedItems())}
      >
        clear list
      </Button>
    </Box>
  );
};
