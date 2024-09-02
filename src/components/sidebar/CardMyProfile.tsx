import { Box, Card, Avatar, Typography, Stack } from "@mui/material";
import useStore from "../../stores/hook";
import ModalEditProfile from "../modal/ModalEditProfile";

export default function MyProfile() {
  const { user } = useStore();

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
            <ModalEditProfile />
          </Stack>

          <Typography fontSize={"24px"} color={"#FFFFFF"}>
            {user.fullName}
          </Typography>
          <Typography fontSize={"14px"} color={"#909090"}>
            @{user.username}
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
      </Card>
    </Box>
  );
}
