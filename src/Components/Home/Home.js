import React, { useState, useEffect, createContext } from "react";
import Header from "../Header/Header";
import Axios from "axios";
import Post from "../Post/Post";

const Home = () => {
  let [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    Axios("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setAllPosts(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Header></Header>
      {allPosts.map((singlePost) => (
        <Post singlePost={singlePost}></Post>
      ))}
    </div>
  );
};

export default Home;
