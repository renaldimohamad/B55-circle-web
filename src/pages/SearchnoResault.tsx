import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import InputSearch from "../components/NoReasult/InputSearch";
import NoResault from "../components/NoReasult/NoResault";
import NavItem from "../components/NoReasult/NavItem";

const SearchnoResault = () => {
  return (
    <Box>
      <InputSearch />
      <NoResault />
    </Box>
  );
};

export default SearchnoResault;
