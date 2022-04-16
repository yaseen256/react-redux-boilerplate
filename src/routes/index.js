import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../pages/Home";

const publicRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
  { path: "/home", component: Home },
];

const authProtectedRoutes = [];

export { authProtectedRoutes, publicRoutes };
