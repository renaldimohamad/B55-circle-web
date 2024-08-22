import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ItemPost from "./ItemPost";

const Item = () => {
  const [users, setUsers] = useState([
    {
      avatar: "/assetss/images/photo-search3.png",
      fullName: "Putra",
      userName: "@rzkiypratama",
      description:
        "Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa survive, ada aja rejekinya, sampai hari pecah telor tiba pas kondisi bener2 0 duit 🥺",
      timePost: "18h",
      follow: "/assetss/images/follow.png",
      numFollow: "43",
    },
    {
      avatar: "/assetss/images/photo-search1.png",
      fullName: "Menantu Idaman Ibumu",
      userName: "@ninanenen",
      description: `Sering banget. Lebih sering deg2annya daripada nyantainya. Karena sandwich gen, mau di planning in kaya apa juga, selalu ada kedaruratan tiap saat.Tapi selalu terselamatkan. Sering bet ada rejeki nomplok pas injury time. Cape bat ya Allah.`,
      timePost: "10h",
      follow: "/assetss/images/follow.png",
      numFollow: "3",
    },
    {
      avatar: "/assetss/images/photo-search5.png",
      fullName: "jena 👋🏻",
      userName: "@sweetbubbly",
      description:
        "Pas kmrn2 lg parah2nya punya kucing sampe 10 ekor pernah.. gangerti gmn tau2 ada aja rejeki buat beli makan sm pasir mereka",
      timePost: "6h",
      follow: "/assetss/images/follow.png",
      numFollow: "139",
    },
    {
      avatar: "/assetss/images/photo-search3.png",
      fullName: "Tama",
      userName: "@josiSRG",
      description:
        "Sering wkwk. Kuncinya percaya kalau tetep akan bisa survive",
      timePost: "8h",
      follow: "/assetss/images/follow.png",
      numFollow: "81",
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
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Item;
