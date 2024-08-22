import * as React from "react";
import { Box, Typography, Input, Stack } from "@mui/material";
import { Key } from "react";
import LinearProgress from "@mui/material";
import { Icon } from "@iconify/react";
import NavItem from "../sidebar/NavItem";

// const ITEMS_SEARCH = [
//   {
//     name: "Home",
//     path: "/",
//     icon: {
//       active: "mdi:user-search",
//       nonactive: "mdi:user-search-outline",
//     },
//   },
// ];

const SearchAccount = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Input
        placeholder="rach"
        disableUnderline
        sx={{
          py: 0.5,
          px: 4,
          width: "95%",
          border: "1px solid #3F3F3F",
          color: "white",
          borderRadius: "30px",
          backgroundColor: "#3F3F3F",
        }}
      ></Input>
    </Box>
  );
};

export default SearchAccount;
