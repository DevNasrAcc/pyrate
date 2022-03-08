import React from "react";

import { styled } from "@material-ui/core/styles";
import { ReactComponent as Logo } from "../../assets/images/Pyrate_Logo.svg";

const Div = styled("div")(() => ({
  backgroundColor: "#000",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SplashScreen = () => {
  return (
    <Div>
      <Logo />
    </Div>
  );
};

export default SplashScreen;
