import { Box, Typography, Stack, Avatar } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const StatusPost: React.FC<{
  avatar: string;
  fullName: string;
  userName: string;
  description: string;
  timePost: string;
  image: string;
}> = ({ avatar, fullName, userName, description, timePost, image }) => {
  return (
    <Box
      sx={{
        border: "solid 1px #3F3F3F",
        py: 2,
        px: 2,
      }}
    >
      <Stack direction="row" spacing={1}>
        <Avatar src={avatar} alt="photo.jpg" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <Stack direction={"row"} gap={"4px"}>
            <Typography sx={{ fontSize: "14px", color: "#FFFFFF" }}>
              {fullName}
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#909090" }}>
              {userName}
            </Typography>
            <Icon
              icon="fluent-mdl2:radio-bullet"
              style={{ color: "#B2B2B2", width: "7px", height: "16px" }}
            />
            <Typography sx={{ fontSize: 14, color: "#909090" }}>
              {timePost}
            </Typography>
          </Stack>

          <Typography
            sx={{ fontSize: 14, lineHeight: "20px", color: "#FFFFFF" }}
          >
            {description}
          </Typography>

          <img src={image} alt="images.jpg" style={{
            width: "400px",
            height: "500px",
          }}/>
        </Box>
      </Stack>
    </Box>
  );
};

export default StatusPost;
