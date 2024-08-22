import {
  Avatar,
  Box,
  Button,
  colors,
  duration,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const DetailPost: React.FC<{
  avatar: string;
  fullName: string;
  username: string;
  description: string;
  duration: string;
  monthYears: string;
  follow: string;
  numFollowers: string;
  message: string;
  numMessage: string;
}> = ({
  avatar,
  fullName,
  username,
  description,
  duration,
  monthYears,
  follow,
  numFollowers,
  message,
  numMessage,
}) => {
  return (
    <Box>
      <Stack direction={"row"} spacing={1} px={2}>
        <Avatar src={avatar} />
        <Stack>
          <Typography sx={{ fontSize: "14px", color: "#FFFFFF" }}>
            {fullName}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#909090", mb: "3px" }}>
            {username}
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: "3px",
        }}
      >
        {/* DURATION DATE */}
        <Typography sx={{ fontSize: 14, lineHeight: "20px", color: "#FFFFFF" }}>
          {description}
        </Typography>
        <Stack
          direction={"row"}
          spacing={"3px"}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography fontSize={"14px"} color={"#909090"}>
            {duration}
          </Typography>
          <Icon
            icon="fluent-mdl2:radio-bullet"
            style={{ color: "#B2B2B2", width: "10px", height: "10px" }}
          />
          <Typography fontSize={"14px"} color={"#909090"}>
            {monthYears}
          </Typography>
        </Stack>

        {/* FOLLOWED AND MESSEAGE */}
        <Stack direction={"row"} spacing={1}>
          <img src={follow} alt="Follow.jpg" style={{ width: "24px" }} />
          <Typography fontSize={"14px"} color={"#909090"}>
            {numFollowers}
          </Typography>

          <img src={message} alt="Message.jpg" width={"24px"} />
          <Typography fontSize={"14px"} color={"#909090"}>
            {" "}
            {numMessage}{" "}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default DetailPost;
