import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: "10px",
    paddingBottom: "10px",
    position: "fixed",
    width: "100%",
    top: "66px",
    zIndex: "200",
    backgroundColor: "#f5f5f5",
    "& button": {
      color: "#9D9D9D",
      fontSize: "24px",
      lineHeight: "30px",
      textTransform: "inherit",
      fontFamily: "Amarante !important",
    },
  },
  active: {
    color: "#000000 !important",
    borderBottom: "3px solid #000000 !important",
    borderRadius: "0px !important",
  },
}));

const SettingLink = ({ state, setState }) => {
  const { general, privacy } = state;
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <div>
        <Button
          onClick={() => setState({ general: true })}
          className={general ? classes.active : null}
        >
          General
        </Button>
      </div>

      <div>
        <Button
          onClick={() => setState({ privacy: true })}
          className={privacy ? classes.active : null}
        >
          Privacy
        </Button>
      </div>
    </Box>
  );
};

export default SettingLink;
