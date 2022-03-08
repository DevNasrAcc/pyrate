import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Input } from "@mui/material";

import Profile from "../../../assets/images/profile.png";
import Header from "../../../components/header";
import ActivityLinks from "../../../components/activityLinks";
import Feed from "./activityFeed";
import Stories from "./stories";
import Advanced from "../activityGroup/advancedActivity";
import Footer from "../../../components/footer";

const useStyles = makeStyles(() => ({
  createFeed: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
    paddingLeft: "11px",
    paddingTop: "21px",
    paddingBottom: "12px",
    backgroundColor: "#fff",
  },
  profilePic: {
    width: "46px",
    height: "46px",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
  input: {
    marginLeft: "12px",
    width: "80%",
    "& .MuiInput-root": {
      width: "100%",
      borderRadius: "10px !important",
      "&::before": {
        borderBottom: "none !important",
      },
      "&::after": {
        borderBottom: "none !important",
      },
      "& input": {
        borderRadius: "10px !important",
        border: "1px solid #C4C4C4 !important",
        padding: "12px 8px",
        lineHeight: "20px",
        fontSize: "16px",
        "&::placeholder": {
          fontWeight: "600 !important",
        },
      },
    },
  },
  allPages: {
    paddingLeft: "12px",
    paddingRight: "12px",
    display: "flex",
    justifyContent: "space-between",
    "& li": {
      listStyle: "none",
    },
  },
}));

const ActivityFeed = () => {
  const classes = useStyles();

  const [activeLinks, setActiveLink] = useState({
    all: true,
    friends: false,
    groups: false,
    pages: false,
    saved: false,
    advanced: false,
  });
  const { all, friends, groups, pages, saved, advanced } = activeLinks;

  const imagePost = true;

  return (
    <div>
      <Box sx={{ bgcolor: "#F5F5F5" }}>
        <Header />

        <Box sx={{ position: "relative", top: "50px", paddingBottom: "75px" }}>
          <div className={classes.createFeed}>
            <div className={classes.profilePic}>
              <img src={Profile} alt="" />
            </div>
            <div className={classes.input}>
              <Input placeholder="Say Something.." />
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              marginTop: "5px",
              overflow: "hidden",
            }}
          >
            <Stories />
          </div>

          <div style={{ marginTop: "5px", backgroundColor: "#fff" }}>
            <ActivityLinks
              all={all}
              // friends={friends}
              groups={groups}
              pages={pages}
              advanced={advanced}
              saved={saved}
              setActiveLink={setActiveLink}
              activeLinks={activeLinks}
            />
          </div>

          {all ? (
            <>
              <div
                style={{
                  marginTop: "5px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                }}
              >
                <Feed name="Lucas Sankey" />
              </div>

              <div
                style={{
                  marginTop: "5px",
                  backgroundColor: "#fff",
                }}
              >
                <Feed imagePost={imagePost} name="Lucas Sankey" />
              </div>
            </>
          ) : advanced ? (
            <Advanced />
          ) : null}
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default ActivityFeed;
