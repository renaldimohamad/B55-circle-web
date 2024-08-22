import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import React from "react";
import DetailPost from "./DetailPost";
import GaleryAdd from "../Home/GaleryAdd";
import GaleryPost from "./GaleryPost";
import Item from "./Item";

const DetailStatus = () => {
  const [users, setUsers] = useState([
    {
      avatar: "/assetss/images/Phoyo-IndahPra.png",
      fullname: "Indra Pra Karya",
      username: "@indahpra",
      description:
        "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja gitu. Ada aja jalannya",
      duration: "11:32PM",
      monthYears: "Jul 26, 2023",
      follow: "/assetss/images/follow-red.png",
      numFollowers: "36",
      message: "/assetss/images/message-text.png",
      numMessage: "381 Reaplies",
    },
  ]);

  return (
    <Box>
      <Stack spacing={0} mt={1}>
        {users.map((item, index) => {
          return (
            <DetailPost
              key={index}
              avatar={item.avatar}
              fullName={item.fullname}
              username={item.username}
              description={item.description}
              duration={item.duration}
              monthYears={item.monthYears}
              follow={item.follow}
              numFollowers={item.numFollowers}
              message={item.message}
              numMessage={item.numMessage}
            />
          );
        })}
        <GaleryPost />
        <Item />
      </Stack>
    </Box>
  );
};

export default DetailStatus;
