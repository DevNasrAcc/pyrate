import React, {useEffect} from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, TextareaAutosize } from "@mui/material";

import Input from "../../../../components/inputWithLabel";
import Select from "../../../../components/customSelect";
import Button from "../../../../components/button";
import {useDispatch} from "react-redux";
import {generalSettings} from "../../../../redux/store/actions/settingActions/generalActions";

const useStyles = makeStyles(() => ({
  formDiv: {
    position: "relative",
    top: "140px",
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
  blockLabel: {
    display: "block",
    marginBottom: "12px",
    fontSize: "24px !important",
    lineHeight: "30px !important",
  },
}));

const Feedback = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generalSettings());
  }, []);

  return (
    <Box
      style={{
        backgroundColor: "#F5F5F5",
        height: "100%",
      }}
    >
      <Box className={classes.formDiv}>
        <div className={classes.input}>
          <Select label="Language:" />
        </div>

        <div className={classes.input}>
          <Input labelText="Current Password:" />
        </div>

        <div className={classes.input}>
          <Input labelText="New Password:" />
        </div>

        <div className={classes.input}>
          <Input labelText="Confirm Password:" />
        </div>

        <div className={classes.input}>
          <label className={classes.blockLabel}>Blocked Members:</label>
          <TextareaAutosize
            aria-label="maximum height"
            style={{ height: 240 }}
          />
        </div>

        <div className={classes.btn}>
          <Button text="Make Changs" type="button" />
        </div>
      </Box>
    </Box>
  );
};

export default Feedback;
