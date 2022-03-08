import React from "react";

import { styled } from "@mui/material/styles";

const Backdrop = styled("div")(() => ({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: "100",
}));

const BackDrop = (props) => <Backdrop onClick={props.drawerToggle} />;

export default BackDrop;
