import React, { useEffect, useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { authProtectedRoutes, betSlipRoutes, publicRoutes } from "./routes";
import Authmiddleware from "./routes/route";
import AppLayout from "./components/Layouts/AppLayout";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={AppLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={AppLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
