import COLORS from "../../Utlis/COLORS";
import NavItem from "./NavItem";
import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import MyProfile from "./CardMyProfile";
import useStore from "../../stores/hook";

const Sidebar = () => {
  const { clearUser } = useStore();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        py: 5,
        px: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{ color: COLORS.PRIMARY, fontWeight: "bold" }}
      >
        Circle
      </Typography>

      <NavItem />

      <Button
        variant="contained"
        color="success"
        sx={{
          color: "white",
          borderRadius: 10,
          textTransform: "none",
          backgroundColor: COLORS.PRIMARY,
        }}
      >
        Create Post
      </Button>
      <Button
        startIcon={<Icon icon="solar:logout-2-outline" />}
        sx={{
          mt: "auto",
          textTransform: "none",
          color: "#FFFFFF",
          fontSize: "18px",
        }}
        onClick={clearUser}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
