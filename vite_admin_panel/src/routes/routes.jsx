import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Users = lazy(() => import("../pages/Users"));
const Inbox = lazy(() => import("../pages/Inbox"));
export const adminRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    element: <Dashboard />,
    icon: "DashboardOutlined",
  },
  {
    path: "users",
    name: "Users",
    element: <Users />,
    icon: "UsersOutlined",
  },
  {
    path: "emails",
    name: "Email",
    icon: "UserOutlined",
    children: [
      {
        path: "inbox",
        name: "Inbox",
        element: <Inbox />,
        icon: "OwnerOutlined",
      },
    ],
  },
];
