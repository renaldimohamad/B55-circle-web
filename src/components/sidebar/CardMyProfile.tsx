import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
  CardActions,
  Button,
  Typography,
  Stack,
} from "@mui/material";

// const bull = (
//   <Box
//     component="span"
//     sx={{
//       display: "inline-block",
//       mx: "2px",
//       transform: "scale(0.8)",
//     }}
//   >
//     •
//   </Box>
// );

const cardContent = (
  <Box
    sx={{
      position: "relative",
    }}
  >
    <Avatar
      sx={{
        width: 80,
        height: 80,
        position: "absolute",
        top: 35,
        left: 16,
      }}
      alt="Semy Sharp"
      src="/assetss/images/photo-profile.png"
    />

    <Box
      sx={{
        height: 80,
        backgroundColor: "yellow",
        borderRadius: "8px",
      }}
    >
      <img
        src="/assetss/images/profile-cover.png"
        alt=""
        width={"100%"}
        height={"100%"}
      />
    </Box>

    <Stack justifyContent="end" direction="row" py={1}>
      <Button
        variant="outlined"
        href="#outlined-buttons"
        sx={{
          borderRadius: "18px",
          border: "1px solid white",
          color: "white",
          textTransform: "none",
        }}
      >
        Edit Profile
      </Button>
    </Stack>

    <Typography fontSize={"24px"} color={"#FFFFFF"}>
      Stella Audhina
    </Typography>
    <Typography fontSize={"14px"} color={"#909090"}>
      @audhina
    </Typography>
    <Typography fontSize={"16px"} color={"#FFFFFF"}>
      picked over by the worms, and weird fishes
    </Typography>

    <Stack direction={"row"} gap={1}>
      <Typography>291</Typography>
      <Typography fontSize={"16px"} color={"#909090"}>
        Following
      </Typography>
      <Stack direction={"row"} gap={1}>
        <Typography>23</Typography>
        <Typography fontSize={"16px"} color={"#909090"}>
          Followers
        </Typography>
      </Stack>
    </Stack>
  </Box>
);

export default function MyProfile() {
  return (
    <Box sx={{}}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#262626",
          border: "none",
          width: "25rem",
          borderRadius: 2,
          marginTop: "5px",
          p: 2,
          gap: "0px",
        }}
      >
        <Typography sx={{ fontSize: 20, marginBottom: 1 }} color="white">
          My Profile
        </Typography>

        {cardContent}
      </Card>
    </Box>
  );
}
