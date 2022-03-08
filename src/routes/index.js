import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";

const Navigations = React.memo(() => {
  return (
    <Router>
      <PublicRoutes />
      <PrivateRoutes />
    </Router>
  );
});

export default Navigations;
