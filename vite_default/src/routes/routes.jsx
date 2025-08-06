import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Users = lazy(() => import("../pages/Users"));
const Inbox = lazy(() => import("../pages/Inbox"));
const Root = lazy(() => import("../pages/Root"));
export const adminRoutes = [
  {
    path: "",
    name: "",
    element: <Login />,
  },
  {
    path: "dashboard",
    name: "Dashboard",
    element: <Dashboard />,
    // icon: "DashboardOutlined",
  },
  {
    path: "users",
    name: "Users",
    element: <Users />,
    // icon: "UsersOutlined",
  },
  {
    path: "emails",
    name: "Email",
    // icon: "UserOutlined",
    children: [
      {
        path: "inbox",
        name: "Inbox",
        element: <Inbox />,
        // icon: "OwnerOutlined",
      },
    ],
  },
];
