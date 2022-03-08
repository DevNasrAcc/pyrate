import React from "react";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Input } from "@mui/material";

import { HiOutlineArrowLeft } from "react-icons/hi";

import { ReactComponent as Photo } from "../../../assets/inbox-icons/photo.svg";
import { ReactComponent as Share } from "../../../assets/inbox-icons/share.svg";
import { ReactComponent as Play } from "../../../assets/inbox-icons/play.svg";
import { ReactComponent as Gif } from "../../../assets/inbox-icons/gif.svg";
import { ReactComponent as Attachment } from "../../../assets/inbox-icons/attachment.svg";
import { ReactComponent as Send } from "../../../assets/inbox-icons/send.svg";
import { ReactComponent as Video } from "../../../assets/inbox-icons/video.svg";
import Sender from "../../../assets/inbox-icons/sender.png";
import Reciever from "../../../assets/inbox-icons/recieve.png";

const useStyles = makeStyles(() => ({
  box: {
    position: "relative",
  },
  linkBack: {
    backgroundColor: "#000",
    boxShadow: "0px 2px 10px 0px #0000001A",
    display: "flex",
    alignItems: "center",
    padding: "20px 0px 21px 24px",
    color: "#fff",
    "& a": {
      color: "#fff",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 400,
      marginLeft: "28px",
    },
  },
  img: {
    width: "47px",
    height: "47px",
    position: "relative",
    bottom: "30px",
    left: "17px",
    "& img": {
      width: "100%",
    },
  },
  date: {
    fontSize: "12px",
    lineHeight: "15px",
    marginBottom: "4px",
    marginLeft: "10px",
  },
  senderTxt: {
    backgroundColor: "#fff",
    padding: "10px 7px 13px 17px",
    borderRadius: "10px 10px 10px 0px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.25)",
    filter: "drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25))",
    "& p": {
      fontSize: "12px",
      fontFamily: "Amarante",
      lineHeight: "15px",
      fontWeight: "400",
      color: "#000",
    },
  },
  recieverTxt: {
    backgroundColor: "#000",
    padding: "10px 7px 13px 17px",
    borderRadius: "10px 10px 0px 10px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.25)",
    filter: "drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25))",
    "& p": {
      fontSize: "12px",
      fontFamily: "Amarante",
      lineHeight: "15px",
      fontWeight: "400",
      color: "#fff",
    },
  },
  imgDiv: {
    backgroundColor: "#000",
  },
  messageBox: {
    width: "218px",
    marginLeft: "76px",
  },
  secondImg: {
    width: "47px",
    height: "47px",
    position: "absolute",
    right: "20px",
    top: "54px",
  },
  imgInfoRecieve: {
    color: "#fff",
    fontSize: "12px",
    lineHeight: "15px",
    marginBottom: "25px",
  },
  photo: {
    width: "54px",
    height: "54px",
    margin: "auto",
  },
  gif: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      marginTop: "38px",
      marginBottom: "30px",
    },
  },
  senderDiv: {
    display: "flex",
    justifyContent: "end",
  },
  input: {
    position: "fixed",
    bottom: "10px",
    width: "100%",
    textAlign: "center",
    "& .MuiInputBase-root": {
      width: "100%",
      borderRadius: "16px !important",
      backgroundColor: "#fff",
      border: "1.5px solid #000000 !important",
      "&::before": {
        borderBottom: "none !important",
      },
      "&::after": {
        borderBottom: "none !important",
      },
      "& input": {
        paddingTop: "16px",
        paddingBottom: "16px",
        borderRadius: "16px !important",
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
      top: "18px",
    },
  },
}));

const Inbox = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.box}>
      <div className={classes.linkBack}>
        <HiOutlineArrowLeft onClick={() => history.push("/messages")} />
        <Link to="/messages">Inbox</Link>
      </div>

      {/* Reciever */}

      <div style={{ marginTop: "10px" }}>
        <div className={classes.messageBox}>
          <div className={classes.date}>
            <span>8 April, 8:33 am</span>
          </div>
          <div className={classes.senderTxt}>
            <Typography variant="body2">
              Here’s a message someone might type. It says stuff. And it fits
              inside this bubble here.
            </Typography>
          </div>
        </div>

        <div className={classes.img}>
          <img src={Reciever} alt="" />
        </div>
      </div>

      {/* Sender */}

      <div style={{ position: "relative", marginBottom: "29px" }}>
        <div className={classes.senderDiv}>
          <div className={classes.secondImg}>
            <img src={Sender} alt="" />
          </div>

          <div style={{ width: "218px", marginRight: "76px" }}>
            <div
              className={classes.date}
              style={{ textAlign: "right", marginRight: "10px" }}
            >
              <span>8 April, 8:33 am</span>
            </div>

            <div className={classes.recieverTxt}>
              <Typography variant="body2">
                Here’s a message someone might type. It says stuff. And it fits
                inside this bubble here.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Sender */}

      <div style={{ position: "relative" }}>
        <div className={classes.senderDiv}>
          <div
            className={classes.secondImg}
            style={{ top: "140px", right: "20px" }}
          >
            <img src={Sender} alt="" />
          </div>
          <div style={{ width: "218px", marginRight: "76px" }}>
            <div
              className={classes.date}
              style={{ textAlign: "right", marginRight: "10px" }}
            >
              <span>8 April, 8:33 am</span>
            </div>

            <div className={classes.recieverTxt}>
              <div className={classes.imgInfoRecieve}>
                <span>IMG_0001:</span>
              </div>

              <div className={classes.photo}>
                <Photo />
              </div>

              <div
                style={{
                  filter: "invert(1)",
                  textAlign: "right",
                  marginTop: "17px",
                  marginRight: "10px",
                }}
              >
                <Share />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reciever */}

      <div style={{ position: "relative", marginTop: "29px" }}>
        <div className={classes.senderDiv} style={{ justifyContent: "start" }}>
          <div style={{ width: "218px", marginLeft: "76px" }}>
            <div className={classes.date}>
              <span>8 April, 8:33 am</span>
            </div>

            <div className={classes.senderTxt}>
              <div className={classes.imgInfoRecieve} style={{ color: "#000" }}>
                <span>IMG_0001:</span>
              </div>

              <div className={classes.photo}>
                <Photo />
              </div>

              <div
                style={{
                  textAlign: "right",
                  marginTop: "17px",
                  marginRight: "10px",
                }}
              >
                <Share />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.img}>
          <img src={Reciever} alt="" />
        </div>
      </div>

      {/* Sender */}

      <div style={{ position: "relative" }}>
        <div className={classes.senderDiv}>
          <div
            className={classes.secondImg}
            style={{ top: "140px", right: "20px" }}
          >
            <img src={Sender} alt="" />
          </div>
          <div style={{ width: "218px", marginRight: "76px" }}>
            <div
              className={classes.date}
              style={{ textAlign: "right", marginRight: "10px" }}
            >
              <span>8 April, 8:33 am</span>
            </div>

            <div className={classes.recieverTxt}>
              <div className={classes.imgInfoRecieve}>
                <span>Video</span>
              </div>

              <div className={classes.photo}>
                <Play />
              </div>

              <div
                style={{
                  filter: "invert(1)",
                  textAlign: "right",
                  marginTop: "17px",
                  marginRight: "10px",
                }}
              >
                <Share />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reciever */}

      <div style={{ position: "relative", marginTop: "29px" }}>
        <div className={classes.senderDiv} style={{ justifyContent: "start" }}>
          <div style={{ width: "218px", marginLeft: "76px" }}>
            <div className={classes.date}>
              <span>8 April, 8:33 am</span>
            </div>

            <div className={classes.senderTxt}>
              <div className={classes.imgInfoRecieve} style={{ color: "#000" }}>
                <span>IMG_0001:</span>
              </div>

              <div className={classes.photo}>
                <Play />
              </div>

              <div
                style={{
                  textAlign: "right",
                  marginTop: "17px",
                  marginRight: "10px",
                }}
              >
                <Share />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.img}>
          <img src={Reciever} alt="" />
        </div>
      </div>

      {/* Sender */}

      <div style={{ position: "relative" }}>
        <div className={classes.senderDiv}>
          <div
            className={classes.secondImg}
            style={{ top: "140px", right: "20px" }}
          >
            <img src={Sender} alt="" />
          </div>
          <div style={{ width: "218px", marginRight: "76px" }}>
            <div
              className={classes.date}
              style={{ textAlign: "right", marginRight: "10px" }}
            >
              <span>8 April, 8:33 am</span>
            </div>

            <div className={classes.recieverTxt}>
              <div className={classes.gif}>
                <Gif />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reciever */}

      <div style={{ position: "relative", marginTop: "29px" }}>
        <div className={classes.senderDiv} style={{ justifyContent: "start" }}>
          <div style={{ width: "218px", marginLeft: "76px" }}>
            <div className={classes.date}>
              <span>8 April, 8:33 am</span>
            </div>

            <div className={classes.senderTxt}>
              <div className={classes.gif}>
                <Gif style={{ filter: "invert(1)" }} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.img}>
          <img src={Reciever} alt="" />
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
};

export default Inbox;
