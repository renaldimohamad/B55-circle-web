import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import RootLayout from "../layout/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import ResetPassword from "../pages/ResetPassword";
import AuthLayout from "../layout/AuthLayout";
import Content from "../pages/Content";
import Navbar from "../pages/Navbar";
import Search from "../pages/Search";
import Status from "../pages/Status";
import Profile from "../pages/Profile";
import SearchnoResault from "../pages/SearchnoResault";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <SearchnoResault />,
      },
      {
        path: "follows",
        element: <>About</>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Forgot",
        element: <Forgot />,
      },
      {
        path: "/ResetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/Content",
        element: <Content />,
      },
      {
        path: "/status",
        element: <Status />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot",
        element: <Forgot />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
    ],
  },
];

export default routes;
