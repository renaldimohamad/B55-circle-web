import { useState } from "react";
import { Link } from "react-router-dom";
import UserSummary from "../components/UserSummary/UserSummary";
import { Stack } from "@mui/material";
import SearchAccount from "../components/Search/SearchAccount";

const Search = () => {
  const [users, setUsers] = useState([
    {
      avatar: "/assetss/images/photo-search1.png",
      fullname: "rach",
      username: "@fortherAch",
      description: "All for Jesus and the A #GoBraves",
      isFollowed: true,
    },
    {
      avatar: "/assetss/images/photo-search2.png",
      fullname: "rach",
      username: "@Rache243",
      description: "catch me @ a concert or behind a bar",
      isFollowed: false,
    },
    {
      avatar: "/assetss/images/photo-search3.png",
      fullname: "Rach",
      username: "@racheltjhia",
      description: "☠",
      isFollowed: false,
    },
    {
      avatar: "/assetss/images/photo-search4.png",
      fullname: "Rachel Lindsay",
      username: "@TheRachLindsay",
      description:
        "✨Media Personality ⚖️Attorney 🎙 @Higher_Learning  🎬 @ExtraTV  🎬 @mtvghosted",
      isFollowed: false,
    },
    {
      avatar: "/assetss/images/photo-profile.png",
      fullname: "Rachel Bright",
      username: "@Rach_Bright",
      isFollowed: false,
    },
  ]);
  return (
    <div>
      <SearchAccount />
      <Stack spacing={2} mx={2} mt={3}>
        {users.map((item, index) => {
          return (
            <UserSummary
              key={index}
              avatar={item.avatar}
              fullName={item.fullname}
              username={item.username}
              follow={item.isFollowed}
              description={item.description}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default Search;
