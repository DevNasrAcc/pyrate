import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  btn: {
    fontSize: "36px !important",
    borderRadius: "6px !important",
    width: "100%",
    fontFamily: "Amarante !important",
    padding: "10px 0px !important",
    fontWeight: "400 !important",
    lineHeight: "45px !important",
    letterSpacing: "normal !important",
    textTransform: "inherit !important",
  },
}));

const UsableButton = (props) => {
  const { text, onClick, type } = props;

  const classes = useStyles();
  return (
    <Button type={type} onClick={onClick} className={classes.btn}>
      {text}
    </Button>
  );
};

export default UsableButton;
