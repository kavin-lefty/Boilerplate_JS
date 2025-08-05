import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { adminRoutes } from "./routes";
import Login from "../pages/Login";
import AdminLayout from "../layout/layout";

const renderRouteTree = (routes) =>
  routes.map(({ path, element, children }) => (
    <Route key={path} path={path} element={element}>
      {children && renderRouteTree(children)}
    </Route>
  ));

export default function Router() {
  return (
    <Suspense fallback={"loading....."}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AdminLayout />}>
          {renderRouteTree(adminRoutes)}
        </Route>
      </Routes>
    </Suspense>
  );
}
