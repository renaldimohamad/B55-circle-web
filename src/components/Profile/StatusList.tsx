import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import React from "react";
import ItemPost from "./ItemPost";
import InfoProfile from "./InfoProfile";
import StatusPost from "./StatusPost";

const StatusList = () => {
  const [users, itemUsers] = useState([
    {
      avatar: "/assetss/images/photo-profile.png",
      fullName: "✨ Stella Audhina ✨",
      userName: "@audhinafh",
      description:
        "Yg miss menurut gw minum sih. Mango lassi ok aja, mangga melimpah tp sisanya yauda, gw punya standar lbh tinggi di goodlife 🙏🏼 Zonknya: butter milk. Udah diperingatkan mbanya sampe beneran mau kak??? Takut ga cocok tp laki gw nekat pesen. Rasanya kek kuah sop dikulkasin 👍🏼👍🏼",
      timePost: "4h",
      image: "/assetss/images/photo-drink.png",
    },
  ]);
  return (
    <Box>
      <Stack>
        {users.map((item, index) => {
          return (
            <StatusPost
              key={index}
              avatar={item.avatar}
              fullName={item.fullName}
              userName={item.userName}
              description={item.description}
              timePost={item.timePost}
              image={item.image}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default StatusList;
