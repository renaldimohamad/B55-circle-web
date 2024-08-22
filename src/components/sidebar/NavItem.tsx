import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const NAV_ITEMS = [
  {
    name: "Home",
    path: "/",
    icon: {
      active: "solar:home-angle-bold",
      nonactive: "solar:home-angle-linear",
    },
  },
  {
    name: "Search",
    path: "/search",
    icon: {
      active: "mdi:user-search",
      nonactive: "mdi:user-search-outline",
    },
  },
  {
    name: "Follows",
    path: "/follows",
    icon: {
      active: "ion:heart",
      nonactive: "ion:heart-outline",
    },
  },
  {
    name: "Profile",
    path: "/profile",
    icon: {
      active: "carbon:user-avatar-filled",
      nonactive: "carbon:user-avatar",
    },
  },
];

const NavItem = () => {
  return NAV_ITEMS.map((item) => {
    return (
      <NavLink
        key={item.name}
        to={item.path}
        style={{ textDecoration: "none" }}
      >
        {({ isActive }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              gap: 1,
            }}
          >
            <Icon
              icon={isActive ? item.icon.active : item.icon.nonactive}
              color={isActive ? "#FFFFFF" : "white"}
              fontSize={"28px"}
            />
            <Typography
              color={isActive ? "#FFFFFF" : "#FFFFFF"}
              fontWeight={isActive ? "bold" : "none"}
              sx={{ fontSize: "18px" }}
            >
              {item.name}
            </Typography>
          </Box>
        )}
      </NavLink>
    );
  });
};

export default NavItem;
