import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserSummary from "../UserSummary/UserSummary";
import { Stack } from "@mui/material";

const SugestedFriends = () => {
  const [users, setUsers] = useState([
    {
      avatar: "/assetss/images/photo-profile.png",
      fullname: "Mohammed Jawahir",
      username: "@em.jawahir",
      description: "halooo aaaaaa",
      isFollowed: true,
    },
    {
      avatar: "/assetss/images/photo-profile2.png",
      fullname: "Shakia Kimathi",
      username: "@shakiakim",
      isFollowed: false,
    },
    {
      avatar: "/assetss/images/photo-profile3.png",
      fullname: "Naveen Singh",
      username: "@naveeeen",
      isFollowed: false,
    },
  ]);
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#262626",
          width: "25rem",
          margin: "auto",
          borderRadius: 2,
          border: "none",
          p: 2,
        }}
      >
        <Typography sx={{ fontSize: 20, marginBottom: 1 }} color="#FFFFFF">
          Suggested for you
        </Typography>
        <Stack spacing={2} mx={0} mt={2}>
          {users.map((item, index) => {
            return (
              <UserSummary
                key={index}
                avatar={item.avatar}
                fullName={item.fullname}
                username={item.username}
                follow={item.isFollowed}
              />
            );
          })}
        </Stack>
      </Card>
    </Box>
  );
};

export default SugestedFriends;
