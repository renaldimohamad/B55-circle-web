import { Box, Typography, Stack, Avatar } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ItemPost: React.FC<{
  avatar: string;
  fullName: string;
  userName: string;
  description: string;
  follow: string;
  numFollow: string;
  timePost: string;
  message: string;
  numMessage: string;
}> = ({
  avatar,
  fullName,
  userName,
  description,
  follow,
  numFollow,
  timePost,
  message,
  numMessage,
}) => {
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

          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              gap: 2,
            }}
          >
            <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
              <img src={follow} alt="Follow.jpg" style={{ width: "24px" }} />
              <Typography fontSize={"14px"} color={"#909090"}>
                {numFollow}
              </Typography>
            </Stack>

            <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
              <img src={message} alt="Follow.jpg" style={{ width: "24px" }} />
              <Typography fontSize={"14px"} color={"#909090"}>
                {numMessage}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ItemPost;
