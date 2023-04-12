import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes as RouteSwitch } from "react-router-dom";
import UserView from "./views/userView";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteSwitch>
        <Route path="/" element={<>Hello</>} />
        <Route path="/users" element={<UserView />} />
      </RouteSwitch>
    </BrowserRouter>
  );
};

export default Routes;
