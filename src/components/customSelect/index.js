import * as React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, InputLabel, FormControl, NativeSelect } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Down } from "../../assets/images/down-arrow.svg";

const useStyles = makeStyles(() => ({
  selectDropdown: {
    "& .MuiInputBase-root ": {
      marginTop: "6px !important",
      backgroundColor: "#fff",
      borderRadius: "10px !important",
      padding: "10px",
      border: "2px solid #000",
      position: "relative",
    },
    "& .MuiInputBase-root": {
      "&:before": {
        borderBottom: "none !important",
      },
      "&:after": {
        borderBottom: "none",
      },
    },
    "& svg": {
      position: "absolute",
      right: "23px",
      pointerEvents: "none",
    },
  },
}));

export default function NativeSelectDemo({ label, data, handleInputChange }) {
  const classes = useStyles();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className={classes.selectDropdown}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {label}
        </InputLabel>
        <NativeSelect
          IconComponent={() => <Down />}
          inputProps={{
            name: `${label}`,
            id: "uncontrolled-native ",
          }}
        >
          <option disabled>Select</option>
          {/* {data?.map((value, index) => (
            <option key={value.id} value={value.name}>
              {value.name}
            </option>
          ))} */}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
