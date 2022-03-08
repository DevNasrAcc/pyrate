import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import Logo from "../../assets/images/logo.png";
import Pyrate from "../../assets/images/pyrate.png";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    height: "345px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  headerForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 32px",
    "& button": {
      fontFamily: "Amarante",
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "normal",
      color: theme.palette.primary.main,
      fontWeight: "400 !important",
      transition: "border 0.3s ease-in-out",
      cursor: "pointer",
      textTransform: "inherit",
      minWidth: "unset",
      padding: "0",
    },
  },
  borderBtn: {
    borderBottom: "2px solid #fff !important",
    borderRadius: "0 !important",
  },
}));

const LandingPage = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box>
      <div className={classes.banner}>
        <div style={{ marginBottom: "10px" }}>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <img src={Pyrate} alt="Pyrate Text" />
        </div>
      </div>
      <Box className={classes.headerForm}>
        <Button
          onClick={() => history.push("/")}
          className={
            history.location.pathname === "/" ? classes.borderBtn : null
          }
        >
          Sign In
        </Button>
        <Button
          onClick={() => history.push("/about")}
          className={
            history.location.pathname === "/about" ? classes.borderBtn : null
          }
        >
          About
        </Button>
        <Button
          onClick={() => history.push("/app")}
          className={
            history.location.pathname === "/app" ? classes.borderBtn : null
          }
        >
          App
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
