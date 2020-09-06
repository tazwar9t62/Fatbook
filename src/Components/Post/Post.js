import React from "react";
import { Button, Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const Post = ({ singlePost }) => {
  let { userId, id, title, body } = singlePost;
  let history = useHistory();
  let handleCommentButton = (postID) => {
    history.push(`/post/${postID}`);
  };
  return (
    <Box mx={20} my={3} p={3} boxShadow={2}>
      <Typography color="primary" variant="h4">
        {title}
      </Typography>
      <pre>{body}</pre>
      <ThumbUpIcon
        color="primary"
        style={{ marginRight: "10px" }}
      ></ThumbUpIcon>
      <ThumbDownIcon
        color="secondary"
        style={{ marginRight: "30px" }}
      ></ThumbDownIcon>
      <Button
        onClick={() => handleCommentButton(id)}
        variant="outlined"
        color="primary"
      >
        View Comments
      </Button>
    </Box>
  );
};

export default Post;
