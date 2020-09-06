import React from "react";
import { Box, Avatar, TextField } from "@material-ui/core";

const MyComment = () => {
  return (
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
  );
};

export default MyComment;
