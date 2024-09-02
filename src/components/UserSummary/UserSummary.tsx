import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import ModalEditProfile from "../modal/ModalEditProfile";

const UserSummary: React.FC<{
  avatar: string;
  fullName: string;
  username: string;
  description?: string;
  follow: boolean;
}> = ({ avatar, fullName, username, description, follow }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="start">
      <Stack direction="row" spacing={1}>
        <Avatar src={avatar} />
        <Box>
          <Typography sx={{ fontSize: 14 }} color="white">
            {fullName}
          </Typography>

          <Typography sx={{ fontSize: 12 }} color="#909090">
            {username}
          </Typography>

          <Typography sx={{ fontSize: 12 }} color="white">
            {description}
          </Typography>
        </Box>
      </Stack>

      <Button
        variant="outlined"
        size="small"
        sx={{
          borderRadius: 9999,
          border: "1px solid #FFFFFF",
          color: "#FFFFFF",
          py: "4px",
          px: 2,
          textTransform: "none",
        }}
      >
        {follow === true ? "Following" : "Follow"}
      </Button>
    </Stack>
  );
};

export default UserSummary;
