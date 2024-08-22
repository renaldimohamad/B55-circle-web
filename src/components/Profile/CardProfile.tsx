import { Box, Card, Typography, Stack } from "@mui/material";
import React from "react";
import InfoProfile from "./InfoProfile";

const CardProfile = () => {
  return (
    <Box sx={{}}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#1D1D1D",
          border: "none",
          width: "100%",
          borderRadius: 2,
          marginTop: "5px",
          p: 2,
          gap: "0px",
        }}
      >
        <Typography sx={{ fontSize: 20, marginBottom: 1 }} color="white">
          ✨ Stella Audhina ✨
        </Typography>

        <InfoProfile />
      </Card>
    </Box>
  );
};

export default CardProfile;
