import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, IconButton } from "@mui/material";

const useStyles = makeStyles(() => ({
  iframe: {
    zIndex: "2147483647",
    position: "fixed",
    border: "0px",
    width: "74px",
    height: "74px",
    boxShadow: "rgb(0 0 0 / 24%) 0px 8px 20px 0px",
    borderRadius: "50%",
    left: "auto",
    right: "20px",
    bottom: "84px",
    "& button": {
      position: "relative",
      display: "flex",
      webkitBoxPack: "center",
      justifyContent: "center",
      webkitBoxAlign: "center",
      alignItems: "center",
      width: "74px",
      minWidth: "74px",
      height: "74px",
      minHeight: "74px",
      padding: "0px",
      cursor: "pointer",
      // backgroundColor: "#000000 !important",
      border: "0px",
      borderRadius: "50%",
    },
  },
}));

export const OverlayButton = ({ icon, proifileScreen, onClick }) => {
  const classes = useStyles();
  return (
    <Box>
      <div className={classes.iframe} onClick={onClick}>
        <IconButton
          style={{ backgroundColor: proifileScreen ? "#ffffff" : "#000000" }}
        >
          <img src={icon} alt="" />
        </IconButton>
      </div>
    </Box>
  );
};
