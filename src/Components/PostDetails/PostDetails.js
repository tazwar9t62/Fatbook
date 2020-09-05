import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../Header/Header";
import { Box } from "@material-ui/core";

const PostDetails = () => {
  let { postID } = useParams();
  let [post, setPost] = useState([]);
  useEffect(() => {
    Axios(`https://jsonplaceholder.typicode.com/posts/${postID}`).then((data) =>
      setPost(data.data)
    );
  }, []);
  let { title, body } = post;
  return (
    <div>
      <Header></Header>
      <Box mx={20} my={3} p={3} boxShadow={2}>
        <h1>{title}</h1>
        <pre>{body}</pre>
      </Box>
    </div>
  );
};

export default PostDetails;
