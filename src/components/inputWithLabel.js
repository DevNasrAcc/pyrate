import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/styles";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: "14px",
    paddingLeft: "18px",
    marginTop: "0px",
    color: "#040C0F",
    fontWeight: "100",
    backgroundColor: "#fff !important",
    border: "2px solid #000000 !important",
    fontFamily: "Amarante !important",
    borderRadius: "6px !important",
    height: "auto !important",
  },
}));

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  labelClass: {
    paddingBottom: "6px !important",
  },
}));

export function InputWithLabel(props) {
  const { labelText, type, value, onChange, required } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.labelClass} shrink>
        {labelText}
      </InputLabel>
      <BootstrapInput
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </FormControl>
  );
}

export default InputWithLabel;
