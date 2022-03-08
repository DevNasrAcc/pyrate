import * as React from "react";

import {
  Button,
  Dialog,
  DialogContent,
  Input,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import Select from "../customSelect";
import { ReactComponent as Edit } from "../../assets/images/modalIcons/edit.svg";
import { ReactComponent as Cross } from "../../assets/images/modalIcons/close.svg";

const useStyles = makeStyles(() => ({
  dialogDiv: {
    "& .MuiPaper-root": {
      margin: "0px",
      maxWidth: "100%",
      width: "375px",
      height: "348px",
      backgroundColor: "#F5F5F5",
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
      fontSize: "24px !important",
      lineHeight: "30px !important",
      color: "#000",
      fontFamily: "Amarante !important",
    },
  },
  btn: {
    width: "318px !important",
    backgroundColor: "#000000 !important",
    fontSize: "24px !important",
    lineHeight: "30px !important",
    color: "#ffffff !important",
    textTransform: "inherit !important",
    fontFamily: "Amarante !important",
    padding: "17px 0 !important",
    borderRadius: "10px !important",
    textAlign: "center",
    marginBottom: "13px",
  },
  select: {
    marginBottom: "32px !important",
    width: "323px",
    margin: "auto",
    "& label": {
      marginTop: "19px",
      fontSize: "24px !important",
      lineHeight: "30px !important",
      marginBottom: "11px !important",
    },
  },
  inputDiv: {
    position: "relative",
    width: "323px",
    margin: "auto",
    "& .MuiInputBase-root": {
      width: "100%",
      padding: "10px",
      backgroundColor: "#fff",
      border: "2px solid #000000",
      borderRadius: "10px",
      "&::before": {
        borderBottom: "none !important",
      },
      "&::after": {
        borderBottom: "none !important",
      },
    },
    "& input": {
      backgroundColor: "#fff",
      paddingLeft: "35px !important",
    },
    "& span": {
      position: "absolute",
      zIndex: "100",
      top: "12px",
      right: "28px",
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
        <div style={{ marginTop: "19px" }}>
          <div
            style={{
              marginBottom: "19px",
              marginLeft: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">New Album Name:</Typography>
            <div style={{ marginRight: "23px" }}>
              <Cross />
            </div>
          </div>
          <div className={classes.inputDiv}>
            <span>
              <Edit />
            </span>
            <Input />
          </div>
        </div>

        <div className={classes.select}>
          <Select label="Who can see Album:" />
        </div>

        <div style={{ textAlign: "center" }}>
          <Button className={classes.btn}>Create Album</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
