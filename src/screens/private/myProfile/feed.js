import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Box, Typography } from "@mui/material";

import Profile from "../../../assets/images/feed-image.png";
import FeedImage from "../../../assets/images/feed-post.png";
import Footer from "../../../components/footer";

const useStyles = makeStyles(() => ({
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
  postPara: {
    paddingLeft: "21px",
    paddingRight: "27px",
    paddingBottom: "16px",
    "& p": {
      fontFamily: "Amarante !important",
      fontSize: "16px !important",
      lineHeight: "20px",
      color: "#000 !important",
    },
  },
  postPic: {
    marginBottom: "16px",
    "& img": {
      width: "100%",
    },
  },
  reactionBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "16px",
    paddingRight: "20px",
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
}));

const Feed = ({ imagePost, name }) => {
  const classes = useStyles();

  const [footerStates, setFooterStates] = useState({
    feed: true,
    search: false,
    notifications: false,
    messages: false,
    profile: false,
  });

  const { feed, search, notifications, messages, profile } = footerStates;

  return (
    <div>
      <Box sx={{ paddingBottom: "10px" }}>
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
                {name}
              </Typography>
              <span>3 days ago</span>
            </div>
          </div>

          <div>
            <MoreHorizIcon />
          </div>
        </div>

        {imagePost ? (
          <div className={classes.postPic}>
            <img src={FeedImage} alt="" />
          </div>
        ) : (
          <div className={classes.postPara}>
            <Typography variant="body1">
              This is where a user can type up a bunch of stuff with no limit on
              characters or anything. They can talk and talk and talk and say
              whatever they want and they won’t get sent to the brig.
            </Typography>
          </div>
        )}
      </Box>

      <Footer />
    </div>
  );
};

export default Feed;
