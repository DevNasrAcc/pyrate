import * as React from "react";

import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as Cross } from "../../assets/images/modalIcons/cross-light.svg";
import { ReactComponent as Gallery } from "../../assets/images/modalIcons/gallery-light.svg";
import { ReactComponent as Camera } from "../../assets/images/modalIcons/cam.svg";
import { ReactComponent as Gif } from "../../assets/images/modalIcons/gif-light.svg";

const useStyles = makeStyles(() => ({
  dialogDiv: {
    "& .MuiPaper-root": {
      margin: "0px",
      maxWidth: "100%",
      width: "100%",
      height: "163px",
      backgroundColor: "#000000",
      boxShadow: "none",
      borderRadius: "0px",
      "& .MuiDialogContent-root": {
        padding: "0px",
      },
    },
  },
  body: {
    backgroundColor: "#000000",
    borderRadius: "0 !important",
    width: "100%",
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
        <div>
          <div style={{ paddingTop: "14px", paddingLeft: "20px" }}>
            <Cross />
          </div>

          <div
            style={{
              display: "flex",
              marginLeft: "44px",
              alignItems: "center",
              marginTop: "21px",
            }}
          >
            <div style={{ marginRight: "38px" }}>
              <Gallery />
            </div>

            <div style={{ marginRight: "38px" }}>
              <Camera />
            </div>

            <div>
              <Gif />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
