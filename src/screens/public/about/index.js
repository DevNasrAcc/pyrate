import React from "react";

import { makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";

import LandingPage from "../../../components/landingPage";

const useStyles = makeStyles(() => ({
  about: {
    backgroundColor: "#3A3A3A",
  },
  mainSection: {
    backgroundColor: "#F5F5F5",
    borderRadius: "15px 15px 0px 0px",
    padding: "13px 17px 20px 17px",
    "& h1": {
      fontFamily: "Amarante",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#000",
      fontWeight: "400",
      textAlign: "center",
    },
    "& p": {
      fontFamily: "Amarante",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#000",
      fontWeight: "400",
      letterSpacing: "0.02em",
    },
    "& span": {
      fontFamily: "Amarante",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#000",
      fontWeight: "400",
      letterSpacing: "0.02em",
      textDecoration: "underline",
    },
    "& ol": {
      counterReset: "list",
      "& li": {
        listStyle: "none",
        position: "relative",
        "&::before": {
          content: " counter(list) ') '",
          counterIncrement: "list",
          left: "-40px",
          paddingRight: "10px",
          position: "absolute",
          textAlign: "right",
          width: "40px",
        },
      },
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <LandingPage />
      <div className={classes.mainSection}>
        <div>
          <Typography variant="h1" sx={{ paddingBottom: "30px" }}>
            About Pyrate:
          </Typography>
          <span>Our Mission</span>
          <br />
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            To be the wildest place on Earth.
          </Typography>
          <br />
          <Typography variant="body2">
            To provide a safe-haven for edgy meme-lords, lowlife sh*tposters,
            and booty-loving scallawags alike.
          </Typography>
          <br />
          <Typography variant="body2">
            Where offensive humor, unpopular opinions, and all forms of
            controversy, mischief, and debauchery are always welcome.
          </Typography>
          <br />
          <Typography variant="body2">
            The laughter is free, but tissues are gonna cost ya.
          </Typography>
          <br />
          <Typography variant="body2">So enter at yer own risk.</Typography>
        </div>
        <div style={{ paddingTop: "30px" }}>
          <Typography variant="h1" sx={{ paddingBottom: "30px" }}>
            Key Benefits:
          </Typography>
          <div style={{ paddingLeft: "10px" }}>
            <ol>
              <li>
                <p style={{ paddingLeft: "5px" }}>
                  You can post any kind of content you want. But, maybe others
                  don’t want to view that kind of content. This is why we use
                  “warning labels.”
                </p>
                <br />
                <p>
                  When you post a photo or a video, a prompt will ask you if
                  your post contains “clean, sensitive, or controversial”
                  content. If you select either of the last 2 options, the
                  content will appear with a warning label in the feed which
                  others can remove by clicking on it.
                </p>
              </li>
              <br />
              <li>
                <p style={{ paddingLeft: "5px" }}>
                  Pyrate does not automatically filter your feed. You can
                  manually filter your own feed with the Advanced Activity Feed
                  Filter. This way you are always in control of the content in
                  your feed. You can also edit your warning label settings in
                  your feed if you want.
                </p>
              </li>
              <br />
              <li>
                <p style={{ paddingLeft: "5px" }}>
                  Maybe the best part is... Pyrate also supports embedded posts,
                  so you can share your content (including the removable warning
                  label) across the web, granting free speech even on other
                  platforms.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
