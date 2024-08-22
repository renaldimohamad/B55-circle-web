import { Box, Typography, Stack } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

import StatusList from "../components/Profile/StatusList";
import DetailStatus from "../components/Status/DetailStatus";

const Status = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        spacing={"10px"}
        sx={{
          alignItems: "center",
          py: 2,
          px: 2,
        }}
      >
        <img
          src="./assetss/images/line-back.png"
          alt="line-back.jpg"
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
        />
        <Typography>Status</Typography>
      </Stack>
      <DetailStatus />
    </Box>
  );
};

export default Status;
