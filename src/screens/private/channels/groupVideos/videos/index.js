import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Video1 from "../../../../../assets/videos/channel-page.png";
import Video2 from "../../../../../assets/videos/video2.png";
import Video3 from "../../../../../assets/videos/video3.png";
import Video4 from "../../../../../assets/videos/video4.png";

const useStyles = makeStyles(() => ({
  videoDiv: {
    backgroundColor: "#fff",
    display: "flex",
    borderBottom: "1.5px solid #000",
  },
  imgDiv: {
    width: "124px",
    height: "124px",
    marginRight: "12px",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    "& h6": {
      color: "#000",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      fontSize: "16px",
      lineHeight: "20px",
      fontFamily: "Amarante",
    },
    "& span": {
      marginRight: "11px",
    },
  },
  details: {
    "& h6": {
      lineHeight: "15px",
      fontFamily: "Amarante",
      fontSize: "12px",
      color: "#3A3A3A",
    },
    "& p": {
      fontFamily: "Amarante",
      fontSize: "12px",
      lineHeight: "15px",
      color: "#3A3A3A",
      marginTop: "3px",
    },
  },
}));

const Videos = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.videoDiv}>
        <div className={classes.imgDiv}>
          <img src={Video1} alt="" />
        </div>

        <div style={{ marginTop: "8px", width: "100%" }}>
          <div className={classes.heading}>
            <Typography variant="h6">Video Title Here</Typography>
            <span>
              <MoreHorizIcon />
            </span>
          </div>

          <div className={classes.details}>
            <Typography variant="h6">## of Views</Typography>
            <Typography variant="body1">
              Here is a short preview of the video’s description. Blah Blah
              Blah, lorem ipsum something, something.. Click here to find out
              what happens..
            </Typography>
          </div>
        </div>
      </Box>

      <Box className={classes.videoDiv}>
        <div className={classes.imgDiv}>
          <img src={Video2} alt="" />
        </div>

        <div style={{ marginTop: "8px", width: "100%" }}>
          <div className={classes.heading}>
            <Typography variant="h6">Channel Title</Typography>
            <span>
              <MoreHorizIcon />
            </span>
          </div>

          <div className={classes.details}>
            <Typography variant="h6">## of Views</Typography>
            <Typography variant="body1">
              Here is a short preview of the video’s description. Blah Blah
              Blah, lorem ipsum something, something.. Click here to find out
              what happens..
            </Typography>
          </div>
        </div>
      </Box>

      <Box className={classes.videoDiv}>
        <div className={classes.imgDiv}>
          <img src={Video3} alt="" />
        </div>

        <div style={{ marginTop: "8px", width: "100%" }}>
          <div className={classes.heading}>
            <Typography variant="h6">Channel Title</Typography>
            <span>
              <MoreHorizIcon />
            </span>
          </div>

          <div className={classes.details}>
            <Typography variant="h6">## of Views</Typography>
            <Typography variant="body1">
              Here is a short preview of the video’s description. Blah Blah
              Blah, lorem ipsum something, something.. Click here to find out
              what happens..
            </Typography>
          </div>
        </div>
      </Box>

      <Box className={classes.videoDiv}>
        <div className={classes.imgDiv}>
          <img src={Video4} alt="" />
        </div>

        <div style={{ marginTop: "8px", width: "100%" }}>
          <div className={classes.heading}>
            <Typography variant="h6">Channel Title</Typography>
            <span>
              <MoreHorizIcon />
            </span>
          </div>

          <div className={classes.details}>
            <Typography variant="h6">## of Views</Typography>
            <Typography variant="body1">
              Here is a short preview of the video’s description. Blah Blah
              Blah, lorem ipsum something, something.. Click here to find out
              what happens..
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Videos;
