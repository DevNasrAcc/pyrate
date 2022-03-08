import * as React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as Close } from "../../assets/images/modalIcons/close.svg";
import { ReactComponent as Photo } from "../../assets/images/modalIcons/add-photo.svg";
import { ReactComponent as Play } from "../../assets/images/modalIcons/play.svg";
import { ReactComponent as Gif } from "../../assets/images/modalIcons/gif.svg";
import { ReactComponent as Attach } from "../../assets/images/modalIcons/attach.svg";
import { ReactComponent as Down } from "../../assets/images/modalIcons/down.svg";
import { ReactComponent as Gallery } from "../../assets/images/modalIcons/gallery.svg";
import { ReactComponent as Cross } from "../../assets/images/modalIcons/cross.svg";
import { ReactComponent as Add } from "../../assets/images/modalIcons/plus.svg";

const useStyles = makeStyles(() => ({
  dialogDiv: {
    "& .MuiPaper-root": {
      margin: "0px",
      maxWidth: "100%",
      height: "659px",
      boxShadow: "none",
      borderRadius: "20px 20px 0px 0px",
      "& .MuiDialogContent-root": {
        padding: "0px",
      },
    },
  },
  body: {
    backgroundColor: "#ffffff",
    borderRadius: "20px 20px 0px 0px",
    width: "375px",
    height: "659px",
    position: "relative",
  },
  write: {
    backgroundColor: "#F5F5F5",
    borderRadius: "20px 20px 0px 0px",
    height: "381px",
    position: "absolute",
    bottom: "0px",
    width: "100%",
  },
  add: {
    display: "flex",
    paddingLeft: "20px",
    marginBottom: "23px",
    "& div": {
      width: "40px",
      height: "36px",
    },
    "& h5": {
      fontFamily: "Amarante !important",
      fontSize: "24px !important",
      lineHeight: "30px !important",
      marginLeft: "24px !important",
      color: "#000000",
    },
  },
  every: {
    display: "flex !important",
    justifyContent: "space-between !important",
    width: "192px !important",
    border: "2px solid #000000 !important",
    alignItems: "center !important",
    backgroundColor: "#fff !important",
    fontSize: "24px !important",
    lineHeight: "30px !important",
    color: "#000000 !important",
    textTransform: "inherit !important",
    fontFamily: "Amarante !important",
    padding: "13px 12px 13px 20px !important",
    borderRadius: "10px !important",
  },
  share: {
    backgroundColor: "#000 !important",
    width: "123px !important",
    fontSize: "24px !important",
    lineHeight: "30px !important",
    padding: "13px 32px !important",
    color: "#fff !important",
    borderRadius: "10px !important",
    fontFamily: "Amarante !important",
    textTransform: "inherit !important",
    marginLeft: "20px !important",
  },
  gallery: {
    backgroundColor: "#000",
    width: "64px",
    height: "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
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
        <div style={{ paddingTop: "198px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ position: "relative", marginLeft: "20px" }}>
              <span style={{ position: "absolute", left: "1px", top: "3px" }}>
                <Cross />
              </span>
              <div className={classes.gallery}>
                <Gallery />
              </div>
            </div>

            <div style={{ position: "relative", marginLeft: "20px" }}>
              <span style={{ position: "absolute", left: "1px", top: "3px" }}>
                <Cross />
              </span>
              <div className={classes.gallery}>
                <Gallery />
              </div>
            </div>

            <div style={{ position: "relative", marginLeft: "20px" }}>
              <span style={{ position: "absolute", left: "1px", top: "3px" }}>
                <Cross />
              </span>
              <div className={classes.gallery}>
                <Gallery />
              </div>
            </div>

            <div className={classes.gallery} style={{ marginLeft: "20px" }}>
              <Add />
            </div>
          </div>
          <div className={classes.write}>
            <div
              style={{
                textAlign: "right",
                paddingRight: "20px",
                paddingTop: "16px",
              }}
            >
              <Close />
            </div>
            <div className={classes.add}>
              <div>
                <Photo />
              </div>
              <Typography variant="h5">Add Photo</Typography>
            </div>

            <div className={classes.add}>
              <div>
                <Play />
              </div>
              <Typography variant="h5">Add Video</Typography>
            </div>

            <div className={classes.add}>
              <div>
                <Gif />
              </div>
              <Typography variant="h5">Add Gif</Typography>
            </div>

            <div className={classes.add}>
              <div>
                <Attach />
              </div>
              <Typography variant="h5">Add Link</Typography>
            </div>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <Button className={classes.every}>
                <span>Everone</span>
                <span>
                  <Down />
                </span>
              </Button>
              <Button className={classes.share}>Share</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
