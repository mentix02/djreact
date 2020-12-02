import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";

import PrivateRoute from "./components/PrivateRoute";

const BaseRouter = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={Login} path="/login" />
    <PrivateRoute>
      <Route component={Account} path="/account" />
    </PrivateRoute>
  </Switch>
);

export default BaseRouter;
