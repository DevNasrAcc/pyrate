import * as React from "react";

import { Dialog, DialogContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as Cross } from "../../assets/images/modalIcons/close.svg";

const useStyles = makeStyles(() => ({
  dialogDiv: {
    "& .MuiPaper-root": {
      margin: "0px",
      maxWidth: "100%",
      width: "320px",
      height: "128px",
      backgroundColor: "#FFFFFF",
      boxShadow: "none",
      borderRadius: "10px",
      "& .MuiDialogContent-root": {
        padding: "0px",
      },
    },
  },
  body: {
    width: "100%",
    "& h6": {
      fontSize: "20px !important",
      lineHeight: "25px !important",
      color: "#000",
      marginBottom: "30px",
      fontFamily: "Amarante !important",
    },
  },
  perm: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function WriteDialog(props) {
  const { onClose, open, setOpen, request } = props;

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialogDiv}>
      <DialogContent className={classes.body}>
        {request && (
          <div
            style={{
              display: "flex",
              paddingLeft: "25px",
              paddingTop: "14px",
              paddingRight: "14px",
            }}
          >
            <Typography variant="h6">
              Send [User Name] a friend request?
            </Typography>
            <div>
              <Cross />
            </div>
          </div>
        )}

        {!request && (
          <div
            style={{
              display: "flex",
              paddingLeft: "70px",
              paddingTop: "14px",
              paddingRight: "14px",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Block [User Name] ?</Typography>
            <div>
              <Cross />
            </div>
          </div>
        )}

        <div className={classes.perm}>
          <span>Yes</span>
          <span>No</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
