import { Box, Stack } from "@mui/material";
import { useState } from "react";
import ItemPost from "../Profile/ItemPost";
import InfoProfile from "./InfoProfile";

const Item = () => {
  const [users, itemUsers] = useState([
    {
      avatar: "/assetss/images/photo-profile.png",
      fullName: "✨ Stella Audhina ✨",
      userName: "@audhinafh",
      description: "Well beauty is in the eye of the beholder",
      timePost: "4h",
      follow: "/assetss/images/follow.png",
      numFollow: "24",
      message: "/assetss/images/message-text.png",
      numMessage: "381 Reaplies",
    },
  ]);
  return (
    <Box>
      <Stack>
        {users.map((item, index) => {
          return (
            <ItemPost
              key={index}
              avatar={item.avatar}
              fullName={item.fullName}
              userName={item.userName}
              description={item.description}
              timePost={item.timePost}
              follow={item.follow}
              numFollow={item.numFollow}
              message={item.message}
              numMessage={item.numMessage}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Item;
