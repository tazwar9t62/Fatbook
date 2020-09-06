import React from "react";
import { Box } from "@material-ui/core";
import Header from "../Header/Header";

const Error404 = () => {
  return (
    <Box>
      <Header></Header>
      <img
        src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Page.gif"
        alt="error404gif"
        style={{ width: "100%" }}
      />
    </Box>
  );
};

export default Error404;
