import React from "react";
import { Button, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";


const Post = ({ singlePost }) => {
  let { userId, id, title, body } = singlePost;
  let history = useHistory();
  let handleCommentButton = (postID) => {
    history.push(`/post/${postID}`);
  };
  return (
    <Box mx={20} my={3} p={3} boxShadow={2}>
      {/* <Postcard title={title} body={body}></Postcard> */}
      <h1>{title}</h1>
      <pre>{body}</pre>
      <ThumbUpIcon color="primary"></ThumbUpIcon>
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
