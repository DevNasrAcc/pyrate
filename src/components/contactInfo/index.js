import * as React from "react";

import { Dialog, DialogContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as Edit } from "../../assets/images/modalIcons/edit.svg";
import { ReactComponent as Cross } from "../../assets/images/modalIcons/close.svg";

const useStyles = makeStyles(() => ({
  dialogDiv: {
    "& .MuiPaper-root": {
      margin: "0px",
      maxWidth: "100%",
      width: "358px",
      height: "366px",
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
    "& h3": {
      fontSize: "24px !important",
      lineHeight: "30px !important",
      color: "#000",
      fontFamily: "Amarante !important",
      paddingLeft: "20px",
    },
    "& h6": {
      fontSize: "16px !important",
      lineHeight: "20px !important",
      color: "#000",
      marginBottom: "20px",
      marginLeft: "60px",
      fontFamily: "Amarante !important",
    },
  },
}));

export default function WriteDialog(props) {
  const { onClose, open, setOpen } = props;

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialogDiv}>
      <DialogContent className={classes.body}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 20px 0 24px",
            marginBottom: "34px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <Edit /> */}
            <Typography variant="h3">Contact Info:</Typography>
          </div>
          <div>
            <Cross />
          </div>
        </div>

        <div>
          <Typography variant="h6">E-mail:</Typography>
          <Typography variant="h6">Facebook:</Typography>
          <Typography variant="h6">Instagram:</Typography>
          <Typography variant="h6">Twitter:</Typography>
          <Typography variant="h6">Telegram:</Typography>
          <Typography variant="h6">Other:</Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
}
