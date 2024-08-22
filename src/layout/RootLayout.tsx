import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Sidebar from "../components/sidebar/Index";
import useStore from "../stores/hook";
import CardMyProfile from "../components/sidebar/CardMyProfile";
import SugestedFriends from "../components/sidebar/SugestedFriends";
import CopyrightPanel from "../components/sidebar/CopyrightPanel";
import axios from "axios";

const RootLayout = () => {
  const { isLogin } = useStore();
  // const navigate = async function checkAuth() {
  //   const token = localStorage.getitem(token);

  //   if (!token) {
  //     navigate("/atuh/login");
  //     return;
  //   }

  //   try {
  //     const response
  //   } catch (error) {

  //   }
  // };

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      {/* Sidebar */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#1D1D1D",
          borderRight: "1px solid gray",
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          flex: 2,
          backgroundColor: "#1D1D1D",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>

      <Box
        sx={{
          overflow: "auto",
        }}
      >
        <Stack
          p={2}
          spacing={1}
          sx={{
            flex: 1.2,
            borderLeft: "1px solid gray",
            backgroundColor: "#1D1D1D",
          }}
        >
          <CardMyProfile />

          <SugestedFriends />

          <CopyrightPanel />
          {/* <Home /> */}
          {/* <CardCompanyInfo /> */}
        </Stack>
      </Box>
    </Box>
  );
};

export default RootLayout;
