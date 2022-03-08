import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  box: {
    paddingLeft: "20px",
    paddingTop: "20px",
    "& h6": {
      fontSize: "16px",
      lineHeight: "20px",
      color: "#000000",
      fontFamily: "Amarante",
    },
    "& span": {
      fontSize: "12px",
      lineHeight: "15px",
      color: "#000000",
      fontFamily: "Amarante",
      marginBottom: "10px",
    },
  },
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    marginTop: "6px",
    marginLeft: "15px",
  },
  interestsDiv: {
    width: "335px",
    height: "180px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "2px solid #000000",
  },
  interestChildDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    marginTop: "10px",
    marginLeft: "13px",
  },
  interest: {
    backgroundColor: "#000000",
    padding: "5px",
    borderRadius: "12px",
    width: "90xpx",
    // paddingRight: "3px",
    paddingLeft: "5px",
    paddingTop: "2px",
    marginBottom: "5px",
    marginRight: "5px",
    "& span": {
      color: "#fff",
      fontSize: "12px",
    },
  },
}));

const Info = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <div>
        <Typography variant="h6">Basic Info:</Typography>

        <div className={classes.mainDiv}>
          <span>Group Name : Group Name</span>
          <span>Date Created: MM/DD/YYYY</span>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6">Location:</Typography>

        <div className={classes.mainDiv}>
          <span>City: Charleston</span>
          <span>State/Province: SC</span>
          <span>Country: USA</span>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6">Contact Info:</Typography>
      </div>
    </Box>
  );
};

export default Info;
