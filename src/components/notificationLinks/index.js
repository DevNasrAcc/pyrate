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
    background: "#fff",
    top: "66px",
    zIndex: "200",
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

const NotificationLink = ({ state, setState }) => {
  const { updates, friendRequest } = state;
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <div>
        <Button
          onClick={() => setState({ updates: true })}
          className={updates ? classes.active : null}
        >
          Updates
        </Button>
      </div>

      <div>
        <Button
          onClick={() => setState({ friendRequest: true })}
          className={friendRequest ? classes.active : null}
        >
          Friend Requests
        </Button>
      </div>
    </Box>
  );
};

export default NotificationLink;
