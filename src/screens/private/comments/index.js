import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Input, Grid } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { HiOutlineArrowLeft } from "react-icons/hi";

import Profile from "../../../assets/images/feed-image.png";
import FeedImage from "../../../assets/images/feed-post.png";
import Smily from "../../../assets/images/smile.png";
import Laugh from "../../../assets/images/laugh.png";
import HeartEyes from "../../../assets/images/heart-eyes.png";
import Chat from "../../../assets/images/chat.png";
import Share from "../../../assets/images/share.png";
import { ReactComponent as Attachment } from "../../../assets/inbox-icons/attachment.svg";
import { ReactComponent as Send } from "../../../assets/inbox-icons/send.svg";
import { ReactComponent as Reaction } from "../../../assets/footer-icons/reaction.svg";

const useStyles = makeStyles(() => ({
  linkBack: {
    backgroundColor: "#000",
    boxShadow: "0px 2px 10px 0px #0000001A",
    display: "flex",
    alignItems: "center",
    padding: "20px 0px 21px 24px",
    color: "#fff",
    marginBottom: "24px",
    "& a": {
      color: "#fff",
      fontSize: "18px",
      lineHeight: "22px",
      fontWeight: 400,
      marginLeft: "28px",
    },
  },
  profile: {
    width: "46px",
    height: "46px",
    marginRight: "10px",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
  profileName: {
    fontFamily: "Amarante !important",
    fontSize: "16px  !important",
    fontWeight: "400  !important",
    lineHeight: "20px  !important",
    color: "#000",
  },
  postPic: {
    marginBottom: "16px",
    "& img": {
      width: "100%",
    },
  },
  reaction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "16px",
    paddingRight: "22px",
    "& div": {
      backgroundColor: "#F5F5F5",
      padding: "7px 20px",
      borderRadius: "20px",
      display: "flex",
    },
  },
  imgSpan: {
    width: "20px",
    display: "flex",
    "& img": {
      width: "100%",
    },
  },
  reactCount: {
    fontSize: "16px",
    color: "#3A3A3A",
    lineHeight: "20px",
    marginLeft: "10px",
  },
  reacter: {
    width: "12px",
    "& img": {
      width: "100%",
    },
  },
  reactNo: {
    fontSize: "11px",
  },
  input: {
    position: "fixed",
    bottom: "20px",
    width: "100%",
    textAlign: "center",
    "& .MuiInputBase-root": {
      width: "100%",
      "&::before": {
        borderBottom: "none !important",
      },
      "&::after": {
        borderBottom: "none !important",
      },
      "& input": {
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "16px !important",
        border: "1.5px solid #000000",
        backgroundColor: "#fff",
      },
    },
  },
  inputDiv: {
    paddingRight: "20px",
    paddingLeft: "20px",
    position: "relative",
    // width: "335px",
    margin: "auto",
    "& span": {
      position: "absolute",
      zIndex: "100",
      top: "12px",
    },
  },
  commSect: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    paddingLeft: "8px",
    paddingRight: "15px",
    "& h6": {
      fontSize: "16px !important",
      color: "#000000",
      lineHeight: "20px !important",
      fontFamily: "Amarante !important",
      marginBottom: "7px",
    },
    "& p": {
      fontSize: "14px !important",
      color: "#000000",
      lineHeight: "17px !important",
      fontFamily: "Amarante !important",
      marginBottom: "3px",
    },
  },
  allSpan: {
    fontSize: "16px !important",
    color: "#000000",
    lineHeight: "20px !important",
    fontFamily: "Amarante !important",
  },
}));

function Comment() {
  const classes = useStyles();

  return (
    <Box sx={{ minHeight: "100%", paddingBottom: "65px" }}>
      <div className={classes.linkBack}>
        <HiOutlineArrowLeft />
        <Link>Comments</Link>
      </div>

      <Box>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 23px 25px 17px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={classes.profile}>
              <img src={Profile} alt="" />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" className={classes.profileName}>
                Lucas Sankey
              </Typography>
              <span>3 days ago</span>
            </div>
          </div>

          <div>
            <MoreHorizIcon />
          </div>
        </div>

        <div className={classes.postPic}>
          <img src={FeedImage} alt="" />
        </div>
      </Box>

      <Box>
        <div style={{ display: "flex", paddingLeft: "16px" }}>
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
          <div>
            <span className={classes.imgSpan}>
              <img src={Smily} alt="" />
            </span>

            <span className={classes.reactCount}>234</span>
          </div>

          <div>
            <span className={classes.imgSpan}>
              <img src={Chat} alt="" />
            </span>

            <span className={classes.reactCount}>53</span>
          </div>

          <div>
            <span className={classes.imgSpan}>
              <img src={Share} alt="" />
            </span>

            <span className={classes.reactCount}>19</span>
          </div>
        </div>
      </Box>

      <div className={classes.commSect}>
        <div style={{ marginRight: "12px" }}>
          <img src={Profile} alt="" />
        </div>

        <div>
          <Typography variant="h6">Kinga Chichwez</Typography>

          <Typography variant="body1">
            Oh my God this social network is the best hands up.
          </Typography>

          <div className={classes.allSpan}>
            <span style={{ marginRight: "16px" }}>1w</span>
            <span style={{ marginRight: "16px" }}>React</span>
            <span>Reply</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span>
            <MoreHorizIcon />
          </span>
          <span>
            <Reaction />
          </span>
        </div>
      </div>

      <div className={classes.commSect}>
        <div style={{ marginRight: "12px" }}>
          <img src={Profile} alt="" />
        </div>

        <div>
          <Typography variant="h6">Kinga Chichwez</Typography>

          <Typography variant="body1">
            Oh my God this social network is the best hands up.
          </Typography>

          <div className={classes.allSpan}>
            <span style={{ marginRight: "16px" }}>1w</span>
            <span style={{ marginRight: "16px" }}>React</span>
            <span>Reply</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span>
            <MoreHorizIcon />
          </span>
          <span>
            <Reaction />
          </span>
        </div>
      </div>

      <div className={classes.commSect}>
        <div style={{ marginRight: "12px" }}>
          <img src={Profile} alt="" />
        </div>

        <div>
          <Typography variant="h6">Kinga Chichwez</Typography>

          <Typography variant="body1">
            Oh my God this social network is the best hands up.
          </Typography>

          <div className={classes.allSpan}>
            <span style={{ marginRight: "16px" }}>1w</span>
            <span style={{ marginRight: "16px" }}>React</span>
            <span>Reply</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span>
            <MoreHorizIcon />
          </span>
          <span>
            <Reaction />
          </span>
        </div>
      </div>

      <div className={classes.commSect} style={{ marginLeft: "15px" }}>
        <div style={{ marginRight: "12px" }}>
          <img src={Profile} alt="" />
        </div>

        <div>
          <Typography variant="h6">Kinga Chichwez</Typography>

          <Typography variant="body1">
            Oh my God this social network is the best hands up.
          </Typography>

          <div className={classes.allSpan}>
            <span style={{ marginRight: "16px" }}>1w</span>
            <span style={{ marginRight: "16px" }}>React</span>
            <span>Reply</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span>
            <MoreHorizIcon />
          </span>
          <span>
            <Reaction />
          </span>
        </div>
      </div>

      <div className={classes.commSect}>
        <div style={{ marginRight: "12px" }}>
          <img src={Profile} alt="" />
        </div>

        <div>
          <Typography variant="h6">Kinga Chichwez</Typography>

          <Typography variant="body1">
            Oh my God this social network is the best hands up.
          </Typography>

          <div className={classes.allSpan}>
            <span style={{ marginRight: "16px" }}>1w</span>
            <span style={{ marginRight: "16px" }}>React</span>
            <span>Reply</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span>
            <MoreHorizIcon />
          </span>
          <span>
            <Reaction />
          </span>
        </div>
      </div>

      <Box className={classes.input}>
        <div className={classes.inputDiv}>
          <span style={{ left: "35px" }}>
            <Attachment />
          </span>
          <Input />

          <span style={{ right: "30px" }}>
            <Send />
          </span>
        </div>
      </Box>
    </Box>
  );
}

export default Comment;
