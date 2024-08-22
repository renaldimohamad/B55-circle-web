import { Box } from "@mui/material";
import React from "react";
import ContentForm from "../Content/ContentForm";

function Content() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1D1D1D",
      }}
    >
      <ContentForm />
    </Box>
  );
}

export default Content;
