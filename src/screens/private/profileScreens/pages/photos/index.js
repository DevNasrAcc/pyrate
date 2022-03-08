import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";

import Channel1 from "../../../../../assets/photos/page-1.png";
import Channel2 from "../../../../../assets/photos/page-2.png";
import Create from "../../../../../assets/photos/page-3.png";
import { ReactComponent as Add } from "../../../../../assets/photos/add-photo.svg";

const useStyles = makeStyles(() => ({
  flexBox: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingTop: "20px",
    paddingLeft: "20px",
    "& h3": {
      fontSize: "16px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      lineHeight: "20px",
    },
    "& span": {
      fontSize: "12px",
      lineHeight: "15px",
    },
  },
  albumDiv: {
    marginRight: "17px",
    marginBottom: "16px",
    textAlign: "center",
  },
  addPic: {
    textAlign: "center",
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(91, 91, 91, 1)",
    position: "relative",
    "& svg": {
      position: "absolute",
      top: 42,
      left: 42,
    },
  },
}));

const Photos = () => {
  const classes = useStyles();
  return (
    <Box sx={{ bgcolor: "#f5f5f5" }}>
      <Box className={classes.flexBox}>
        <div className={classes.albumDiv}>
          <img src={Channel1} alt="" />

          <div>
            <Typography variant="h3">Channel Name</Typography>
            <span>## videos</span>
          </div>
        </div>

        <div className={classes.albumDiv}>
          <img src={Channel2} alt="" />

          <div>
            <Typography variant="h3">Channel Name</Typography>
            <span>## video</span>
          </div>
        </div>

        <div className={classes.addPic}>
          <div
            className={classes.albumDiv}
            style={{
              backgroundImage: `url(${Create})`,
              opacity: "0.5",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <Add />
          <Typography variant="h3">New Channel</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Photos;
