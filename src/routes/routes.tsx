import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import ResetPassword from "../pages/ResetPassword";
import AuthLayout from "../layout/AuthLayout";
import Content from "../pages/Content";
import Status from "../pages/Status";
import Profile from "../pages/Profile";
import SearchAccount from "../components/Search/SearchAccount";
import Follows from "../pages/Follows";

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
        element: <SearchAccount />,
      },
      {
        path: "follows",
        element: <Follows />,
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
