import * as React from "react";

import { Button, Dialog, DialogContent } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dialogDiv: {
    "& .MuiPaper-root": {
      margin: "0px",
      maxWidth: "100%",
      width: "352px",
      height: "181px",
      backgroundColor: "#ffffff",
      boxShadow: "none",
      borderRadius: "18px",
      "& .MuiDialogContent-root": {
        padding: "0px",
      },
    },
  },
  body: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "320px !important",
    backgroundColor: "#000000 !important",
    fontSize: "24px !important",
    lineHeight: "30px !important",
    color: "#ffffff !important",
    textTransform: "inherit !important",
    fontFamily: "Amarante !important",
    padding: "14px 16px 25px !important",
    borderRadius: "10px !important",
    textAlign: "center",
  },
}));

export default function WriteDialog(props) {
  const { onClose, open, setOpen, firstText, secondText } = props;

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialogDiv}>
      <DialogContent className={classes.body}>
        <div style={{ width: "320px", margin: "auto" }}>
          <Button className={classes.btn}>{firstText}</Button>
          <Button className={classes.btn} style={{ marginTop: "22px" }}>
            {secondText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
