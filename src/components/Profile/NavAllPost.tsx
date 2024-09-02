import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  {
    name: "All Post",
    path: "/",
  },
];

const NavAllPost = () => {
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
              sx={{ fontSize: "16px" }}
            >
              {item.name}
            </Typography>
          </Box>
        )}
      </NavLink>
    );
  });
};

export default NavAllPost;
