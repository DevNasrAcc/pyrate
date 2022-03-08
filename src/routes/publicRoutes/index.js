import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../../screens/public/login";
import Register from "../../screens/public/register";
import About from "../../screens/public/about";
import App from "../../screens/public/app";
import Interest from "../../screens/public/interests";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/app" component={App} />
      <Route exact path="/interests" component={Interest} />
    </Switch>
  );
};

export default PublicRoutes;
