import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import UserActivities from "../UserAcivities/UserActivities";
import Layout from "../Layout/Layout";
import Profile from "../Profile/Profile";
import ActivInfo from "../ActivInfo/ActivInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/users",
        element: <UserProfile />,
      },
      {
        path: "/activities",
        element: <UserActivities />,
      },
      {
        path: "/users/:id",
        element: <Profile />,
      },
      {
        path: "/activities/:id",
        element: <ActivInfo/>,
      },
    ],
  },
]);
