import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../Header/Header";
import { Box, Avatar, Typography } from "@material-ui/core";
import MyComment from "../MyComment/MyComment";

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

  let { title, body } = post;

  return (
    <div>
      <Header></Header>
      <Box mx={20} p={3} boxShadow={2}>
        <Typography color="primary" variant="h4">
          {title}
        </Typography>
        <pre>{body}</pre>
        <h3>Comments:</h3>
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
                style={{ background: "#f9f9f9", width: "100%" }}
                px={3}
                className="MuiPaper-rounded"
              >
                <Typography color="primary" variant="h6">
                  {singleComment.name}
                </Typography>
                {singleComment.body}
              </Box>
            </Box>
          ))}
        </ul>
        <MyComment></MyComment>
      </Box>
    </div>
  );
};

export default PostDetails;
