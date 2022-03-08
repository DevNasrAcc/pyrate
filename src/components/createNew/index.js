import * as React from "react";

import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import Radio from "../customRadio";

const useStyles = makeStyles(() => ({
  dialogDiv: {
    "& .MuiPaper-root": {
      margin: "0px",
      maxWidth: "100%",
      height: "446px",
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
    width: "375px",
    "& h5": {
      fontSize: "29px !inmportant",
      lineHeight: "36px !important",
      color: "#000",
      fontFamily: "Amarante !important",
      paddingLeft: "30px !important",
      paddingTop: "30px !important",
    },
    "& label": {
      fontSize: "24px !important",
      marginBottom: "45px",
    },
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
        <Typography variant="h5">Create New...</Typography>

        <div
          style={{
            marginTop: "41px",
            marginLeft: "40px",
            marginBottom: "68px",
          }}
        >
          <div>
            <Radio label="Photo Album" />
          </div>

          <div>
            <Radio label="Video Channel" />
          </div>
        </div>

        <div style={{ textAlign: "right", marginRight: "20px" }}>
          <Button className={classes.share}>Begin</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
