import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { ReactComponent as UserIcon } from "../../../assets/profileScreens/userIcon.svg";
import Image from "../../../assets/profileScreens/sign.png";
import Pyrate from "../../../assets/profileScreens/pyrate.png";
import { ReactComponent as View } from "../../../assets/profileScreens/view.svg";
import { ReactComponent as Smile } from "../../../assets/profileScreens/smile.svg";
import { ReactComponent as Laugh } from "../../../assets/profileScreens/laugh.svg";
import { ReactComponent as Smiley } from "../../../assets/profileScreens/smiley.svg";
import { ReactComponent as Chat } from "../../../assets/profileScreens/chat.svg";
import { ReactComponent as Share } from "../../../assets/profileScreens/share.svg";
import { ReactComponent as Hide } from "../../../assets/profileScreens/icon-hide.svg";
import { ReactComponent as Photo } from "../../../assets/profileScreens/photo.svg";

const useStyles = makeStyles(() => ({
  box: {
    paddingTop: "8px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
  },
  profiltIcon: {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    backgroundColor: "#000000",
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 20px 12px 20px",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    "& h3": {
      fontSize: "16px !important",
      lineHeight: "20px !important",
      color: "#000000",
      fontFamily: "Amarante !important",
    },
    "& span": {
      fontSize: "12px !important",
      lineHeight: "15px !important",
      color: "#000000",
    },
  },
  mainDiv: {
    width: "375px",
    height: "342px",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  firstDiv: {
    "& h4": {
      fontSize: "18px !important",
      fontFamily: "Amarante !important",
      color: "#ffffff",
      lineHeight: "22px",
      marginTop: "5px",
    },
  },
  secondDiv: {
    marginTop: "48px",
    "& h1": {
      fontSize: "30px !important",
      lineHeight: "37px !important",
      color: "#ffffff",
      fontFamily: "Amarante !important",
    },
    "& p": {
      fontSize: "16px !important",
      lineHeight: "20px !important",
      color: "#ffffff",
      fontFamily: "Amarante !important",
      textAlign: "center",
    },
  },
  warn: {
    backgroundColor: "#FF0000",
    textAlign: "center",
    height: "23px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      fontSize: "12px !important",
      lineHeight: "15px",
      color: "#ffffff",
      paddingLeft: "5px",
    },
    "& svg": {
      marginTop: "4px",
    },
  },
  reaction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "20px",
    paddingBottom: "22px",
  },
  reacter: {
    width: "12px",
  },
  imgSpan: {
    width: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  innerDiv: {
    backgroundColor: "#F5F5F5",
    padding: "8px 23px 8px 21px",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
  },
  reactCount: {
    fontSize: "16px",
    color: "#3A3A3A",
    lineHeight: "20px",
    marginLeft: "10px",
  },
  reactNo: {
    fontSize: "11px",
    lineHeight: "14px",
    color: "#fff",
  },
}));

const ActivityGroup = () => {
  const classes = useStyles();

  return (
    <Box style={{ backgroundColor: "#F5F5F5", height: "100%" }}>
      <div className={classes.box}>
        <div className={classes.header}>
          <div className={classes.profile}>
            <div className={classes.profiltIcon}>
              <UserIcon />
            </div>
            <div>
              <Typography variant="h3">User Full Name</Typography>
              <span>Date / Time</span>
            </div>
          </div>

          <div>
            <MoreHorizIcon />
          </div>
        </div>

        <Box className={classes.mainDiv}>
          <div>
            <div className={classes.firstDiv}>
              <div style={{ textAlign: "center" }}>
                <img src={Image} alt="" />
              </div>

              <div>
                <img src={Pyrate} alt="" />
              </div>
              <Typography variant="h4">Social Media</Typography>
            </div>

            <div className={classes.secondDiv}>
              <Typography variant="h1">Warning</Typography>

              <Typography variant="body1">
                This post may contain sensitive content
              </Typography>
            </div>
          </div>
        </Box>
        <div className={classes.warn}>
          <span>
            <View />
          </span>
          <Typography variant="body1">Show me anyway</Typography>
        </div>

        <Box style={{ paddingLeft: "19px", marginTop: "5px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <span className={classes.reacter}>
              <Smile />
            </span>

            <span
              className={classes.reacter}
              style={{ position: "relative", left: "-3.5px" }}
            >
              <Laugh />
            </span>

            <span
              className={classes.reacter}
              style={{ position: "relative", left: "-5.5px" }}
            >
              {/* <img src={HeartEyes} alt="" /> */}
            </span>

            <span className={classes.reactNo}>234</span>
          </div>

          <div className={classes.reaction}>
            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Smiley />
              </span>

              <span className={classes.reactCount}>234</span>
            </div>

            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Chat />
              </span>

              <span className={classes.reactCount}>53</span>
            </div>

            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Share />
              </span>

              <span className={classes.reactCount}>19</span>
            </div>
          </div>
        </Box>
      </div>

      {/* Second */}
      <div className={classes.box} style={{ marginTop: "4px" }}>
        <div className={classes.header}>
          <div className={classes.profile}>
            <div className={classes.profiltIcon}>
              <UserIcon />
            </div>
            <div>
              <Typography variant="h3">User Full Name</Typography>
              <span>Date / Time</span>
            </div>
          </div>

          <div>
            <MoreHorizIcon />
          </div>
        </div>

        <Box className={classes.mainDiv}>
          <div>
            <div className={classes.firstDiv}>
              <div style={{ textAlign: "center" }}>
                <img src={Image} alt="" />
              </div>

              <div>
                <img src={Pyrate} alt="" />
              </div>
              <Typography variant="h4">Social Media</Typography>
            </div>

            <div className={classes.secondDiv}>
              <Typography variant="h1">Warning</Typography>

              <Typography variant="body1">
                This post may contain sensitive content
              </Typography>
            </div>
          </div>
        </Box>
        <div className={classes.warn}>
          <span>
            <View />
          </span>
          <Typography variant="body1">Show me anyway</Typography>
        </div>

        <Box style={{ paddingLeft: "19px", marginTop: "5px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <span className={classes.reacter}>
              <Smile />
            </span>

            <span
              className={classes.reacter}
              style={{ position: "relative", left: "-3.5px" }}
            >
              <Laugh />
            </span>

            <span
              className={classes.reacter}
              style={{ position: "relative", left: "-5.5px" }}
            >
              {/* <img src={HeartEyes} alt="" /> */}
            </span>

            <span className={classes.reactNo}>234</span>
          </div>

          <div className={classes.reaction}>
            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Smiley />
              </span>

              <span className={classes.reactCount}>234</span>
            </div>

            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Chat />
              </span>

              <span className={classes.reactCount}>53</span>
            </div>

            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Share />
              </span>

              <span className={classes.reactCount}>19</span>
            </div>
          </div>
        </Box>
      </div>

      {/* Third */}
      <div className={classes.box} style={{ marginTop: "4px" }}>
        <div className={classes.header}>
          <div className={classes.profile}>
            <div className={classes.profiltIcon}>
              <UserIcon />
            </div>
            <div>
              <Typography variant="h3">User Full Name</Typography>
              <span>Date / Time</span>
            </div>
          </div>

          <div>
            <MoreHorizIcon />
          </div>
        </div>

        <Box className={classes.mainDiv} style={{ backgroundColor: "#DAE3EA" }}>
          <Photo />
        </Box>
        <div className={classes.warn}>
          <span>
            <Hide />
          </span>
          <Typography variant="body1">Nevermind, hide it!</Typography>
        </div>

        <Box style={{ paddingLeft: "19px", marginTop: "5px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <span className={classes.reacter}>
              <Smile />
            </span>

            <span
              className={classes.reacter}
              style={{ position: "relative", left: "-3.5px" }}
            >
              <Laugh />
            </span>

            <span
              className={classes.reacter}
              style={{ position: "relative", left: "-5.5px" }}
            >
              {/* <img src={HeartEyes} alt="" /> */}
            </span>

            <span className={classes.reactNo}>234</span>
          </div>

          <div className={classes.reaction}>
            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Smiley />
              </span>

              <span className={classes.reactCount}>234</span>
            </div>

            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Chat />
              </span>

              <span className={classes.reactCount}>53</span>
            </div>

            <div className={classes.innerDiv}>
              <span className={classes.imgSpan}>
                <Share />
              </span>

              <span className={classes.reactCount}>19</span>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default ActivityGroup;
