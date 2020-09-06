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
            <Box display="flex" flexDirection="row" p={1} m={1}>
              <Box mr={2}>
                <Avatar
                  alt="Profile Picture"
                  src={`https://graph.facebook.com/v2.5/${
                    postID + Math.floor(Math.random() * 1000)
                  }/picture?height=200&height=200`}
                />
              </Box>
              <Box
                style={{ background: "#DCDCDC" }}
                px={3}
                className="MuiPaper-rounded"
              >
                {singleComment.name}
                <br></br>
                {singleComment.body}
              </Box>
            </Box>
          ))}
        </ul>
        <Box display="flex" flexDirection="row" p={1} m={2}>
          <Box mx={3}>
            <Avatar
              alt="Profile Picture"
              src={`https://i.insider.com/5cdf0a1393a152734e0fc973?width=1021&format=jpeg`}
            />
          </Box>

          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Write a Comment..."
              variant="outlined"
            />
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default PostDetails;
