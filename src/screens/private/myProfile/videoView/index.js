import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Button } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { ReactComponent as Closed } from "../../../../assets/images/exit.svg";
import { ReactComponent as Down } from "../../../../assets/images/dropdown.svg";
import Profile from "../../../../assets/images/video-profile.png";
import Video from "../../../../assets/images/video-screen.png";
import Smily from "../../../../assets/images/smile.png";
import Laugh from "../../../../assets/images/laugh.png";
import HeartEyes from "../../../../assets/images/heart-eyes.png";
import Chat from "../../../../assets/images/chat-white.png";
import Share from "../../../../assets/images/share-white.png";

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#3A3A3A",
    height: "100vh",
    "& h4": {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      color: "#F5F5F5",
      fontSize: "20px !important",
      lineHeight: "25px !important",
      fontFamily: "Amarante !important",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 20px 0px",
    color: "#ffffff !important",
  },
  videoPrev: {
    marginBottom: "8px",
    marginTop: "70px",
    width: "375px",
    height: "233px",
  },
  imgDiv: {
    width: "80px",
    height: "80px",
    "& img": {
      width: "100%",
    },
  },
  detail: {
    marginLeft: "13px",
    "& h6": {
      fontFamily: "Amarante !important",
      color: "#ffffff",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      fontSize: "16px !important",
      lineHeight: "20px !important",
    },
    "& button": {
      backgroundColor: "#9D9D9D !important",
      padding: "2px 7px !important",
      boxShadow: "0px -4px 4px 2px #00000040 inset",
      border: "1px solid #5B5B5B",
      boxSizing: "border-box",
      borderRadius: "4px !important",
      textTransform: "inherit",
      color: "#ffffff",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      fontFamily: "Amarante !important",
      fontSize: "16px !important",
      marginTop: "13px",
    },
  },
  heading: {
    fontSize: "24px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    fontFamily: "Amarante !important",
    lineHeight: "30px",
    color: "#fff !important",
  },
  para: {
    color: "#f5f5f5",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    fontSize: "16px",
    lineHeight: "20px",
    fontFamily: "Amarante !important",
  },
  reaction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "20px",
  },
  reacter: {
    width: "12px",
    "& img": {
      width: "100%",
    },
  },
  imgSpan: {
    width: "20px",
    display: "flex",
    justifyContent: "space-between",
    "& img": {
      width: "100%",
    },
  },
  innerDiv: {
    backgroundColor: "#6F6F6F",
    padding: "8px 23px 8px 21px",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
  },
  reactCount: {
    fontSize: "16px",
    color: "#ffffff",
    lineHeight: "20px",
    marginLeft: "10px",
  },
  reactNo: {
    fontSize: "11px",
    lineHeight: "14px",
    color: "#fff",
  },
}));

const VideoView = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <div className={classes.header}>
        <div>
          <Closed />
        </div>

        <div>
          <MoreHorizIcon />
        </div>
      </div>

      <div className={classes.videoPrev}>
        <img src={Video} alt="" />
      </div>

      <Box style={{ marginLeft: "18px" }}>
        <Box style={{ display: "flex", marginBottom: "18px" }}>
          <div className={classes.imgDiv}>
            <img src={Profile} alt="" />
          </div>
          <div className={classes.detail}>
            <Typography variant="h6">Warren Wong</Typography>
            <Button>Add Friend</Button>
          </div>
        </Box>
        <Box style={{ marginBottom: "9px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">Tokyo Vampires</Typography>
            <span style={{ paddingRight: "23px" }}>
              <Down />
            </span>
          </div>
          <div
            style={{
              border: "1px solid #ffffff",
              width: "324px",
              marginLeft: "8px",
              marginTop: "16px",
            }}
          />
        </Box>

        <Typography variant="body1" className={classes.para}>
          Video description goes here; blah blah lorem ipsum would be pretty
          helpful right now but whatever this is faster.Here’s an imaginary link
          they might leave:
        </Typography>

        <Typography variant="body1" className={classes.para}>
          Here’s an imaginary link they might leave:
          <span>www.somewherereallycool.com</span>
        </Typography>

        <Box style={{ marginTop: "90px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <span className={classes.reacter}>
              <img src={Smily} alt="" />
            </span>

            <span
              className={classes.reacter}
              style={{ position: "relative", left: "-3.5px" }}
            >
              <img src={Laugh} alt="" />
            </span>

            <span
              className={classes.reacter}
              style={{ position: "relative", left: "-5.5px" }}
            >
              <img src={HeartEyes} alt="" />
            </span>

            <span className={classes.reactNo}>234</span>
          </div>

          <div className={classes.reaction}>
            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <img src={Smily} alt="" />
              </span>

              <span className={classes.reactCount}>234</span>
            </div>

            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <img src={Chat} alt="" />
              </span>

              <span className={classes.reactCount}>53</span>
            </div>

            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <img src={Share} alt="" />
              </span>

              <span className={classes.reactCount}>19</span>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoView;
