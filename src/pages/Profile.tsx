import { Box, Typography, Avatar, Button, Stack } from "@mui/material";
import React from "react";
import CardProfile from "../components/Profile/CardProfile";
import Item from "../components/Profile/Item";
import StatusList from "../components/Profile/StatusList";
import NavAllPost from "../components/Profile/NavAllPost";
import NavMediaPost from "../components/Profile/NavMediaPost";
import Line from "../components/Profile/Line";

const Profile = () => {
  return (
    <Box>
      <CardProfile />
      <Stack direction={"row"} spacing={20} mx={18}>
        <NavAllPost />
        <NavMediaPost />
      </Stack>
      <Stack direction={"row"} mx={2}>
        <Line />
      </Stack>
      <Item />
      <StatusList />
    </Box>
  );
};

export default Profile;
