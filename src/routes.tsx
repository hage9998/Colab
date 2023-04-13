import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes as RouteSwitch } from "react-router-dom";

const UserView = lazy(() => import("./views/userView"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <RouteSwitch>
          <Route path="/" element={<UserView />} />
        </RouteSwitch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
