import React from "react";
import { Button, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Post = ({ singlePost }) => {
  let { userId, id, title, body } = singlePost;
  let history = useHistory();
  let handleCommentButton = (postID) => {
    history.push(`/post/${postID}`);
  };
  return (
    <Box ml={30} pt={3}>
      {/* <Postcard title={title} body={body}></Postcard> */}
      <h1>{title}</h1>
      <pre>{body}</pre>
      <Button
        mr={10}
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
      >
        Share
      </Button>
      <Button onClick={()=>handleCommentButton(id)} variant="outlined" color="primary">
        View Comments
      </Button>
    </Box>
  );
};

export default Post;
