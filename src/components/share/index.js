import * as React from "react";

import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as Send } from "../../assets/images/modalIcons/send.svg";
import { ReactComponent as Share } from "../../assets/images/modalIcons/share.svg";
import User1 from "../../assets/images/feed-image.png";
import User2 from "../../assets/images/profile.png";

const useStyles = makeStyles(() => ({
  dialogDiv: {
    "& .MuiPaper-root": {
      margin: "0px",
      maxWidth: "100%",
      height: "375px",
      boxShadow: "none",
      borderRadius: "15px",
      "& .MuiDialogContent-root": {
        padding: "0px",
      },
    },
  },
  body: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    width: "356px",
    "& h5": {
      fontSize: "29px !important",
      lineHeight: "36px !important",
      color: "#000",
      fontFamily: "Amarante !important",
      paddingLeft: "30px !important",
      paddingTop: "20px !important",
      marginBottom: "30px !important",
    },
    "& h6": {
      fontSize: "14px !important",
      lineHeight: "14px !important",
      color: "#000",
      fontFamily: "Amarante !important",
    },
  },
  share: {
    display: "flex !important",
    justifyContent: "center !important",
    width: "320px !important",
    border: "2px solid #000000 !important",
    alignItems: "flex-start !important",
    backgroundColor: "#000000 !important",
    fontSize: "24px !important",
    lineHeight: "30px !important",
    color: "#ffffff !important",
    textTransform: "inherit !important",
    fontFamily: "Amarante !important",
    padding: "13px 12px 13px 0 !important",
    borderRadius: "10px !important",
    margin: "auto !important",
    marginTop: "25px !important",
    textAlign: "center",
  },
  outside: {
    display: "flex !important",
    justifyContent: "center !important",
    width: "320px !important",
    border: "2px solid #000000 !important",
    alignItems: "flex-start !important",
    backgroundColor: "#ffffff !important",
    fontSize: "24px !important",
    lineHeight: "30px !important",
    color: "#000000 !important",
    textTransform: "inherit !important",
    fontFamily: "Amarante !important",
    padding: "13px 12px 13px 0 !important",
    borderRadius: "10px !important",
    margin: "auto !important",
    marginTop: "25px !important",
    textAlign: "center",
    marginBottom: "30px !important",
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
        <Typography variant="h5">Share with your friends</Typography>
        <div
          style={{
            borderBottom: "4px solid #C4C4C4",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              marginLeft: "21px",
              paddingBottom: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <img src={User1} alt="" />
              <Typography variant="h6">User One</Typography>
            </div>

            <div style={{ marginRight: "10px" }}>
              <img src={User2} alt="" />
              <Typography variant="h6">User Two</Typography>
            </div>

            <div style={{ marginRight: "10px" }}>
              <img src={User1} alt="" />
              <Typography variant="h6">User Three</Typography>
            </div>

            <div style={{ marginRight: "10px" }}>
              <img src={User1} alt="" />
              <Typography variant="h6">User Four</Typography>
            </div>

            <div>
              <img src={User2} alt="" />
              <Typography variant="h6">User Five</Typography>
            </div>
          </div>
        </div>

        <div>
          <Button className={classes.share}>
            <span>Share Now</span>
            <span style={{ marginRight: "-50px", marginLeft: "30px" }}>
              <Send />
            </span>
          </Button>

          <Button className={classes.outside}>
            <span style={{ marginRight: "20px", marginLeft: "-30px" }}>
              <Share />
            </span>
            <span>Share Outside</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
