import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, TextareaAutosize } from "@mui/material";

import Header from "../../../components/header";
import Input from "../../../components/inputWithLabel";
import Button from "../../../components/button";
import Footer from "../../../components/footer";
import { ReactComponent as Attachment } from "../../../assets/inbox-icons/attachment.svg";

const useStyles = makeStyles(() => ({
  formDiv: {
    position: "relative",
    top: "86px",
    backgroundColor: "#F5F5F5",
    paddingBottom: "88px",
  },
  input: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginBottom: "20px",
    "& .MuiInputBase-root": {
      width: "100%",
      "&::before": {
        borderBottom: "none !important",
      },
      "&::after": {
        borderBottom: "none !important",
      },
      "& input": {
        paddingTop: "13px",
        paddingBottom: "13px",
        borderRadius: "10px !important",
        "&:last-child": {
          paddingLeft: "35ox !important",
        },
      },
    },
    "& textarea": {
      width: "335px",
      padding: "14px",
      borderRadius: "10px",
      border: "2px solid #000",
    },
  },
  inputDiv: {
    paddingRight: "20px",
    paddingLeft: "20px",
    position: "relative",
    // width: "335px",
    margin: "auto",
    "& input": {
      paddingLeft: "35px !important",
    },
    "& span": {
      position: "absolute",
      zIndex: "100",
      top: "12px",
    },
  },
  btn: {
    width: "335px",
    margin: "auto",
    "& button": {
      marginTop: "26px !important",
      width: "100% !important",
      backgroundColor: "#000",
      borderRadius: "10px !important",
      color: "#fff !important",
      fontSize: "24px !important",
      lineHeight: "30px !important",
      paddingTop: "13px !important",
      paddingBottom: "13px !important",
    },
  },
}));

const Feedback = () => {
  const classes = useStyles();
  return (
    <Box
      style={{
        backgroundColor: "#F5F5F5",
        height: "100%",
      }}
    >
      <Header />

      <Box className={classes.formDiv}>
        <div className={classes.input}>
          <Input labelText="Email Address:" />
        </div>

        <div className={classes.input}>
          <Input labelText="Subject:" />
        </div>

        <div className={classes.input}>
          <label style={{ display: "block", marginBottom: "12px" }}>
            Description:
          </label>
          <TextareaAutosize
            aria-label="maximum height"
            style={{ width: 335, height: 256 }}
          />
        </div>

        <Box>
          <div className={classes.inputDiv}>
            <span style={{ left: "35px", top: "22px" }}>
              <Attachment />
            </span>
            <Input />
          </div>
        </Box>

        <div className={classes.btn}>
          <Button text="Send Feedback" type="button" />
        </div>
      </Box>

      <Footer />
    </Box>
  );
};

export default Feedback;
