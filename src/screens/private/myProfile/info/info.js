import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#f5f5f5",
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

  const interests = [
    { name: "Interests Name" },
    { name: "Interests Name" },
    { name: "Interests Name" },
    { name: "Interests Name" },
    { name: "Interests Name" },
    { name: "Interests Name" },
    { name: "Interests Name" },
  ];
  return (
    <Box className={classes.box}>
      <div>
        <Typography variant="h6">Basic Info:</Typography>

        <div>
          <span>Name: Tyler Nix</span>
          <span>Other Names: NixVoltz</span>
          <span>Gender: Male</span>
          <span>Orientation: SLGBTQ</span>
          <span>Relationship Status: In a Relationship</span>
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
        <Typography variant="h6">Religion:</Typography>

        <div className={classes.mainDiv}>
          <span>Religion Name: Religion</span>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6">Politics:</Typography>

        <div className={classes.mainDiv}>
          <span>Politics Name: Politics</span>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6">Interest:</Typography>

        <div className={classes.interestsDiv}>
          <div className={classes.interestChildDiv}>
            {interests.map((ele, index) => (
              <div className={classes.interest} key={index}>
                <span>{ele.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Info;
