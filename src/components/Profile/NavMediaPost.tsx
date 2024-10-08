import { Box, Typography, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const NAV_ITEMS = [
  {
    name: "Media",
    path: "/",
  },
];

const NavMediaPost = () => {
  return NAV_ITEMS.map((item) => {
    return (
      <NavLink to={item.path} style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
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

export default NavMediaPost;
