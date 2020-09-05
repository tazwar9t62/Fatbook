import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Error404 from "./Components/Error404/Error404";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:postID">
          <PostDetails></PostDetails>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <Error404></Error404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
