import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const NAV_ITEMS = [
  {
    name: "Follows",
    path: "/",
    icon: {
      active: "ion:heart",
      nonactive: "ion:heart-outline",
    },
  },
];

const ItemFollow = () => {
  return NAV_ITEMS.map((item) => {
    return (
      <NavLink to={item.path} style={{ textDecoration: "none" }}>
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
              color={isActive ? "red" : "white"}
              fontSize={"24px"}
            />
          </Box>
        )}
      </NavLink>
    );
  });
};

export default ItemFollow;
