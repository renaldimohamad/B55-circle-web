import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const Galery: React.FC<{
  avatar: string;
  fullName: string;
  username: string;
  description: string;
  duration: string;
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
  follow,
  numFollowers,
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
        <Avatar src={avatar} />
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
              {username}
            </Typography>
            <Icon
              icon="fluent-mdl2:radio-bullet"
              style={{ color: "#B2B2B2", width: "7px", height: "16px" }}
            />
            <Typography sx={{ fontSize: 14, color: "#909090" }}>
              {duration}
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
              gap: 1.2,
            }}
          >
            <img src={follow} alt="Follow.jpg" style={{ width: "24px" }} />

            <Typography fontSize={"14px"} color={"#909090"}>
              {" "}
              {numFollowers}{" "}
            </Typography>
            <img src={message} alt="Message.jpg" width={"24px"} />
            <Typography fontSize={"14px"} color={"#909090"}>
              {" "}
              {numMessage}{" "}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Galery;
