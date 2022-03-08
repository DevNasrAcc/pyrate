import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { ReactComponent as Closed } from "../../../../assets/images/exit.svg";
import Photo from "../../../../assets/images/photo-view.png";
import Smily from "../../../../assets/images/smile.png";
import Laugh from "../../../../assets/images/laugh.png";
import HeartEyes from "../../../../assets/images/heart-eyes.png";
import Chat from "../../../../assets/images/chat-white.png";
import Share from "../../../../assets/images/share-white.png";

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#3A3A3A",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 20px 0px",
    color: "#ffffff !important",
  },
  imgDiv: {
    width: "375px",
    height: "375px",
    marginTop: "123px",
    marginBottom: "60px",
    "& img": {
      width: "100%",
    },
  },
  heading: {
    fontSize: "24px !important",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    fontFamily: "Amarante !important",
    lineHeight: "30px !important",
    color: "#fff !important",
    marginBottom: "14px !important",
  },
  para: {
    color: "#f5f5f5",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    fontSize: "16px !important",
    lineHeight: "20px !important",
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

const PhotoView = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <div className={classes.header}>
        <div>
          <Closed />
        </div>

        <div># of ##</div>

        <div>
          <MoreHorizIcon />
        </div>
      </div>

      <div className={classes.imgDiv}>
        <img src={Photo} alt="" />
      </div>

      <Box style={{ marginLeft: "18px" }}>
        <Typography variant="h3" className={classes.heading}>
          Tyler Nix
        </Typography>

        <Typography variant="body1" className={classes.para}>
          Caption of the photo goes here and stuff blah blah blah...
        </Typography>

        <Box style={{ marginTop: "30px" }}>
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

export default PhotoView;
