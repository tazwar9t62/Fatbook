import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../Header/Header";
import { Box, Avatar, TextField } from "@material-ui/core";

const PostDetails = () => {
  let { postID } = useParams();
  let [post, setPost] = useState([]);
  let [comments, setComments] = useState([]);
  useEffect(() => {
    Axios(`https://jsonplaceholder.typicode.com/posts/${postID}`).then((data) =>
      setPost(data.data)
    );
  }, []);
  useEffect(() => {
    Axios(
      `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
    ).then((data) => setComments(data.data));
  }, []);

  //   console.log(comments);
  let { title, body } = post;

  return (
    <div>
      <Header></Header>
      <Box mx={20} p={3} boxShadow={2}>
        <h1>{title}</h1>
        <pre>{body}</pre>
        <h3 color="text.warning.main">Comments:</h3>
        <ul>
          {comments.map((singleComment) => (
            <Box
              display="flex"
              flexDirection="row"
              p={1}
              m={1}
              bgcolor="background.paper"
            >
              {" "}
              <Box mr={3}>
                <Avatar
                  alt="Profile Picture"
                  src={`https://graph.facebook.com/v2.5/${
                    postID + Math.floor(Math.random() * 1000)
                  }/picture?height=200&height=200`}
                />
              </Box>
              {singleComment.name}
              <br></br>
              {singleComment.body}
            </Box>
          ))}
        </ul>

        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Your Comment"
            variant="outlined"
          />
        </form>
      </Box>
    </div>
  );
};

export default PostDetails;
