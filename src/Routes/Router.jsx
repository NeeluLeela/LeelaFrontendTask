import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { authenticatedRoutes, nonPrivateRoutes } from "./RouteConstants";
import CommonLayout from "../Components/Layouts/CommonLayout";
import { isAuthenticated } from "../Components/Library/Utilities/isAuthenticated";
import LoginLayout from "../Components/Layouts/LoginLayout";

const Router = () => {
  const auth = isAuthenticated();
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route
            path={"/"}
            element={
              auth ? (
                <Navigate to={"/dashboard"} replace={true} />
              ) : (
                <Navigate to={"/login"} replace={true} />
              )
            }
          />
         
          <Route element={<LoginLayout />}>
          <Route
            path="/login"
            element={
              auth ? (
                <Navigate to="/dashboard" replace={true} />
              ) : (
                nonPrivateRoutes.find((route) => route.path === "/login")
                  ?.component || <Navigate to="/login" replace={true} />
              )
            }
          />
            {nonPrivateRoutes?.map((route, key) => (
              <Route key={key} path={route.path} element={route.component}>
                {route.childRoutes?.map((childRoute, childKey) => (
                  <Route
                    key={childKey}
                    path={childRoute.path}
                    element={childRoute.component}
                  ></Route>
                ))}
              </Route>
            ))}
          </Route>

          <Route element={<PrivateRoutes />}>
            {authenticatedRoutes.map((route, key) => (
              <Route key={key} path={route.path} element={route.component}>
                {route.childRoutes?.map((childRoute, childKey) => (
                  <Route
                    key={childKey}
                    path={childRoute.path}
                    element={childRoute.component}
                  ></Route>
                ))}
              </Route>
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
