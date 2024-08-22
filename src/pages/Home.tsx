import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Galery from "../components/Home/Galery";
import GaleryAdd from "../components/Home/GaleryAdd";
import PostList from "../components/Home/PostList";

const Home = () => {
  const [users, setUsers] = useState([
    {
      avatar: "/assetss/images/Phoyo-IndahPra.png",
      fullname: "Indra Pra Karya",
      username: "@indahpra",
      description:
        "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja gitu. Ada aja jalannya augmented reality real time puppet I made. You can try it now went below in the thread.",
      duration: "4h",
      follow: "/assetss/images/follow-red.png",
      numFollowers: "36",
      message: "/assetss/images/message-text.png",
      numMessage: "381 Reaplies",
    },
    {
      avatar: "/assetss/images/Photo-Mona.png",
      fullname: "Mona",
      username: "@nmonarizqa",
      description:
        "Pernah nggak dapet dream job terus lama-lama ngerasa lah kok tidak seperti yang diharapkan (atau simply lelah) terus fall out of love dengan job/bidang tsb?",
      duration: "17h",
      follow: "/assetss/images/follow.png",
      numFollowers: "293",
      message: "/assetss/images/message-text.png",
      numMessage: "381 Reaplies",
    },
    {
      avatar: "/assetss/images/photo-profile.png",
      fullname: "tuantigabelas",
      username: "@tuantigabelas",
      description:
        "Dibanding rekan2 media menginterview saya terkait issue yg lg ramai, ada baiknya mending interview instansi yg ngasih izin, BKSDA dll, manfaatkan moment untuk mendorong regulasi nya jadi lebih ketat.Ketua mpr kita pak Bamsut juga pelihara singa, ga mau push berita ini aja?",
      duration: "10h",
      follow: "/assetss/images/follow.png",
      numFollowers: "293",
      message: "/assetss/images/message-text.png",
      numMessage: "381 Reaplies",
    },
    {
      avatar: "/assetss/images/Photo-Mona.png",
      fullname: "Mona",
      username: "@nmonarizqa",
      description:
        "Pernah nggak dapet dream job terus lama-lama ngerasa lah kok tidak seperti yang diharapkan (atau simply lelah) terus fall out of love dengan job/bidang tsb?",
      duration: "17h",
      follow: "/assetss/images/follow.png",
      numFollowers: "293",
      message: "/assetss/images/message-text.png",
      numMessage: "381 Reaplies",
    },
    {
      avatar: "/assetss/images/photo-profile.png",
      fullname: "tuantigabelas",
      username: "@tuantigabelas",
      description:
        "Dibanding rekan2 media menginterview saya terkait issue yg lg ramai, ada baiknya mending interview instansi yg ngasih izin, BKSDA dll, manfaatkan moment untuk mendorong regulasi nya jadi lebih ketat.Ketua mpr kita pak Bamsut juga pelihara singa, ga mau push berita ini aja?",
      duration: "10h",
      follow: "/assetss/images/follow.png",
      numFollowers: "293",
      message: "/assetss/images/message-text.png",
      numMessage: "381 Reaplies",
    },
  ]);

  const navigate = useNavigate();

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "28px",
          py: 2,
          px: 2,
        }}
      >
        Home
      </Typography>
      <GaleryAdd />
      <Stack spacing={0} mt={3}>
        <PostList />

        {users.map((item, index) => {
          return (
            <Galery
              key={index}
              avatar={item.avatar}
              fullName={item.fullname}
              username={item.username}
              description={item.description}
              duration={item.duration}
              follow={item.follow}
              numFollowers={item.numFollowers}
              message={item.message}
              numMessage={item.numMessage}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Home;
