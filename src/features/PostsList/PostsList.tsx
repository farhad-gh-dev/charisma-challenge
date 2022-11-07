import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectPostsList, fetchPostsAsync } from "./postsListSlice";
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

export const PostsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const postsList = useAppSelector(selectPostsList);
  const dispatch = useAppDispatch();

  const filteredPosts = postsList.filter(
    (post) => post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  useEffect(() => {
    dispatch(fetchPostsAsync());
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
        {filteredPosts.map((item) => {
          return (
            <ListItem
              key={item.id}
              sx={{ cursor: "pointer" }}
              onClick={() => dispatch(addItem(item.title))}
            >
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} secondary={item.description} />
            </ListItem>
          );
        })}
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
