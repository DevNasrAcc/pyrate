import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import FirstImg from "../../../../assets/likes/img-1.png";
import SecondImg from "../../../../assets/likes/img-2.png";
import ThirdImg from "../../../../assets/likes/img-3.png";
import FourthImg from "../../../../assets/likes/img-4.png";
import FifthImg from "../../../../assets/likes/img-5.png";

const useStyles = makeStyles(() => ({
  mainHeading: {
    backgroundColor: "#C4C4C4",
    boxShadow: "inset 0px -4px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    borderBottom: "1px solid #000000",
    paddingTop: "11px",
    paddingBottom: "16px",
    "& h4": {
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Amarante",
      lineHight: "20px",
      color: "#000000",
    },
  },
  imgDiv: {
    width: "124px",
    height: "124px",
    marginRight: "12px",
  },
  likeDiv: {
    backgroundColor: "#fff",
    display: "flex",
    borderBottom: "1.5px solid #000",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
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
      color: "#3A3A3A",
      fontSize: "12px",
      lineHeight: "15px",
      fontFamily: "Amarante",
      marginBottom: "2px",
    },
    "& p": {
      fontSize: "12px",
      lineHeight: "15px",
      fontFamily: "Amarante",
      color: "#5B5B5B",
    },
  },
  loadMore: {
    backgroundColor: "#5B5B5B",
    border: "1px solid #000",
    textAlign: "center",
    paddingTop: "4px",
    paddingBottom: "4px",
    "& h6": {
      color: "#F5F5F5",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      fontSize: "12px",
      lineHeight: "15px",
      fontFamily: "Amarante",
    },
  },
}));

const Likes = () => {
  const classes = useStyles();
  return (
    <Box sx={{ minHeight: "80vh", overflowY: "auto" }}>
      <div>
        <div className={classes.mainHeading}>
          <Typography variant="h4">Groups:</Typography>
        </div>
        <Box className={classes.likeDiv}>
          <div className={classes.imgDiv}>
            <img src={FirstImg} alt="" />
          </div>

          <div style={{ marginTop: "8px", width: "100%" }}>
            <div className={classes.heading}>
              <Typography variant="h6">Group Title Here</Typography>
              <span>
                <MoreHorizIcon />
              </span>
            </div>

            <div className={classes.details}>
              <Typography variant="h6">Open / Closed / Paid Group</Typography>
              <Typography variant="h6">Members: ###</Typography>
              <Typography variant="h6">Mutual Interests: ###</Typography>
            </div>
          </div>
        </Box>

        <Box className={classes.likeDiv}>
          <div className={classes.imgDiv}>
            <img src={SecondImg} alt="" />
          </div>

          <div style={{ marginTop: "8px", width: "100%" }}>
            <div className={classes.heading}>
              <Typography variant="h6">Group Title Here</Typography>
              <span>
                <MoreHorizIcon />
              </span>
            </div>

            <div className={classes.details}>
              <Typography variant="h6">Open / Closed / Paid Group</Typography>
              <Typography variant="h6">Members: ###</Typography>
              <Typography variant="h6">Mutual Interests: ###</Typography>
            </div>
          </div>
        </Box>

        <div className={classes.loadMore}>
          <Typography variant="h6">Load More</Typography>
        </div>
      </div>

      <div>
        <div className={classes.mainHeading}>
          <Typography variant="h4">Pages:</Typography>
        </div>

        <Box className={classes.likeDiv}>
          <div className={classes.imgDiv}>
            <img src={ThirdImg} alt="" />
          </div>

          <div style={{ marginTop: "8px", width: "100%" }}>
            <div className={classes.heading}>
              <Typography variant="h6">Page Title Here</Typography>
              <span>
                <MoreHorizIcon />
              </span>
            </div>

            <div className={classes.details}>
              <Typography variant="h6">Paid / Free Subscription</Typography>
              <Typography variant="h6">Subscribers: ###</Typography>
              <Typography variant="h6">Mutual Interests: ###</Typography>
            </div>
          </div>
        </Box>

        <Box className={classes.likeDiv}>
          <div className={classes.imgDiv}>
            <img src={FourthImg} alt="" />
          </div>

          <div style={{ marginTop: "8px", width: "100%" }}>
            <div className={classes.heading}>
              <Typography variant="h6">Page Title Here</Typography>
              <span>
                <MoreHorizIcon />
              </span>
            </div>

            <div className={classes.details}>
              <Typography variant="h6">Paid / Free Subscription</Typography>
              <Typography variant="h6">Subscribers: ###</Typography>
              <Typography variant="h6">Mutual Interests: ###</Typography>
            </div>
          </div>
        </Box>
        <div className={classes.loadMore}>
          <Typography variant="h6">Load More</Typography>
        </div>
      </div>

      <div>
        <div className={classes.mainHeading}>
          <Typography variant="h4">Saved:</Typography>
        </div>

        <Box className={classes.likeDiv}>
          <div className={classes.imgDiv}>
            <img src={FourthImg} alt="" />
          </div>

          <div style={{ marginTop: "8px", width: "100%" }}>
            <div className={classes.heading}>
              <Typography variant="h6">Video Title Here</Typography>
              <span>
                <MoreHorizIcon />
              </span>
            </div>

            <div className={classes.details}>
              <Typography variant="h6">## of views</Typography>
              <Typography variant="body1">
                Here is a short preview of the video’s description. Blah Blah
                Blah, lorem ipsum something, something.. Click here to find out
                what happens..
              </Typography>
            </div>
          </div>
        </Box>

        <Box className={classes.likeDiv}>
          <div className={classes.imgDiv}>
            <img src={FifthImg} alt="" />
          </div>

          <div style={{ marginTop: "8px", width: "100%" }}>
            <div className={classes.heading}>
              <Typography variant="h6">Video Title Here</Typography>
              <span>
                <MoreHorizIcon />
              </span>
            </div>

            <div className={classes.details}>
              <Typography variant="h6">## of views</Typography>
              <Typography variant="body1">
                Here is a short preview of the video’s description. Blah Blah
                Blah, lorem ipsum something, something.. Click here to find out
                what happens..
              </Typography>
            </div>
          </div>
        </Box>
        <div className={classes.loadMore}>
          <Typography variant="h6">Load More</Typography>
        </div>
      </div>
    </Box>
  );
};

export default Likes;
