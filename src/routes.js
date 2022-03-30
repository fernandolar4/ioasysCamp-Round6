import { Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
    </Switch>
  );
};

export default Routes;
