import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";

import Radio from "../../../../components/customRadio";
import Checkbox from "../../../../components/customCheckbox";
import Button from "../../../../components/button";
import Switch from "../../../../components/customSwitch";

const useStyles = makeStyles(() => ({
  formDiv: {
    position: "relative",
    top: "140px",
    backgroundColor: "#F5F5F5",
    paddingBottom: "88px",
    "& label": {
      fontSize: "16px !important",
    },
    "& h1": {
      fontSize: "24px !important",
      lineHeight: "30px",
      color: "#000",
      fontFamily: "Amarante !important",
      fontWeight: "400",
    },
    "& p": {
      fontSize: "18px !important",
      lineHeight: "30px",
      color: "#000",
      fontFamily: "Amarante !important",
      fontWeight: "400",
      marginTop: "10px",
      marginBottom: "20px",
    },
  },
  genSetting: {
    marginLeft: "24px",
    "& .container": {
      marginLeft: "15px",
    },
  },
  btn: {
    width: "335px",
    margin: "auto",
    "& button": {
      marginTop: "26px !important",
      width: "100% !important",
      backgroundColor: "#000",
      borderRadius: "10px !important",
      color: "#fff !important",
      fontSize: "24px !important",
      lineHeight: "30px !important",
      paddingTop: "13px !important",
      paddingBottom: "13px !important",
    },
  },
}));

const Privacy = () => {
  const classes = useStyles();
  return (
    <Box
      style={{
        backgroundColor: "#F5F5F5",
        height: "100%",
      }}
    >
      <Box className={classes.formDiv}>
        <div className={classes.genSetting}>
          <label style={{ marginBottom: "10px", display: "block" }}>
            Who can view my profile?
          </label>
          <Radio label="Only Me" />
          <Radio label="Only Friends" />
          <Radio label="All Registered Members" />
          <Radio label="Everyone" />
        </div>

        <div className={classes.genSetting}>
          <label style={{ marginBottom: "10px", display: "block" }}>
            Who can view my last login date?
          </label>
          <Radio label="Only Me" />
          <Radio label="Only Friends" />
          <Radio label="All Registered Members" />
          <Radio label="Everyone" />
        </div>

        <div className={classes.genSetting}>
          <label style={{ marginBottom: "10px", display: "block" }}>
            Who can view last update date?
          </label>
          <Radio label="Only Me" />
          <Radio label="Only Friends" />
          <Radio label="All Registered Members" />
          <Radio label="Everyone" />
        </div>

        <div className={classes.genSetting}>
          <label style={{ marginBottom: "10px", display: "block" }}>
            Who can view my profile views?
          </label>
          <Radio label="Only Me" />
          <Radio label="Only Friends" />
          <Radio label="All Registered Members" />
          <Radio label="Everyone" />
        </div>

        <div className={classes.genSetting}>
          <label style={{ marginBottom: "10px", display: "block" }}>
            Who can post on my profile?
          </label>
          <Radio label="Only Me" />
          <Radio label="Only Friends" />
          <Radio label="All Registered Members" />
        </div>

        <Box
          style={{
            marginBottom: "40px",
            marginTop: "40px",
            marginLeft: "20px",
          }}
        >
          <Typography variant="h1">Message Privacy</Typography>

          <div style={{ marginTop: "15px", marginLeft: "37px" }}>
            <label>Allow others to see last seen time?</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  paddingRight: "17px",
                }}
              >
                Yes
              </span>

              <Switch />

              <span
                style={{
                  paddingLeft: "17px",
                }}
              >
                No
              </span>
            </div>
          </div>

          <div style={{ marginTop: "10px", marginLeft: "37px" }}>
            <label>Allow others to see online status?</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  paddingRight: "17px",
                }}
              >
                Yes
              </span>

              <Switch />

              <span
                style={{
                  paddingLeft: "17px",
                }}
              >
                No
              </span>
            </div>
          </div>

          <div style={{ marginTop: "10px", marginLeft: "37px" }}>
            <label>Allow others to send me messages?</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  paddingRight: "17px",
                }}
              >
                Yes
              </span>

              <Switch />

              <span
                style={{
                  paddingLeft: "17px",
                }}
              >
                No
              </span>
            </div>
          </div>
        </Box>

        <Box style={{ marginLeft: "20px" }}>
          <Typography variant="h1">Recent Activity Privacy</Typography>
          <Typography variant="body1">
            Which of the following do you want to be published about you in the
            activity feed?
          </Typography>

          <div>
            <Checkbox label="When I like an album" />
          </div>

          <div>
            <Checkbox label="When I like a photo" />
          </div>

          <div>
            <Checkbox label="When I post a new album" />
          </div>

          <div>
            <Checkbox label="When I comment on a post" />
          </div>

          <div>
            <Checkbox label="When someone comments on my albums" />
          </div>

          <div>
            <Checkbox label="When someone comments on my photos" />
          </div>

          <div>
            <Checkbox label="When I comment on a group’s album" />
          </div>

          <div>
            <Checkbox label="When I comment on a group" />
          </div>

          <div>
            <Checkbox label="When I comment on a group’s photo" />
          </div>

          <div>
            <Checkbox label="When I comment on a page’s album" />
          </div>

          <div>
            <Checkbox label="When I comment on a page" />
          </div>

          <div>
            <Checkbox label="When I comment on a page’s photo" />
          </div>

          <div>
            <Checkbox label="When someone comments on my profile" />
          </div>

          <div>
            <Checkbox label="When someone comments on my videos" />
          </div>

          <div>
            <Checkbox label="When I update my profile cover photo" />
          </div>

          <div>
            <Checkbox label="When I become friends with someone" />
          </div>

          <div>
            <Checkbox label="When I like a post" />
          </div>

          <div>
            <Checkbox label="When I add a photo" />
          </div>

          <div>
            <Checkbox label="When I change my photo" />
          </div>

          <div>
            <Checkbox label="When I create a new group video" />
          </div>

          <div>
            <Checkbox label="When I create a new photo album in a group" />
          </div>

          <div>
            <Checkbox label="When I like a group’s album" />
          </div>

          <div>
            <Checkbox label="When I upload new photos in a group album" />
          </div>

          <div>
            <Checkbox label="When I upload a new cover photo to my group" />
          </div>

          <div>
            <Checkbox label="When I create a new group" />
          </div>

          <div>
            <Checkbox label="When I mark a group as favorite" />
          </div>

          <div>
            <Checkbox label="When I join a group" />
          </div>

          <div>
            <Checkbox label="When I like a group" />
          </div>

          <div>
            <Checkbox label="When I add a new profile photo to my group" />
          </div>

          <div>
            <Checkbox label="When I like a group photo" />
          </div>

          <div>
            <Checkbox label="When I create a photo album on a page" />
          </div>

          <div>
            <Checkbox label="When I like a page’s photo album" />
          </div>

          <div>
            <Checkbox label="When I add a new cover photo to page" />
          </div>

          <div>
            <Checkbox label="When I add new photos to page album" />
          </div>

          <div>
            <Checkbox label="When I create a new page" />
          </div>

          <div>
            <Checkbox label="When I subscribe to a page" />
          </div>

          <div>
            <Checkbox label="When I add a new profile photo to my page" />
          </div>

          <div>
            <Checkbox label="When I like a page’s photo album" />
          </div>

          <div>
            <Checkbox label="When I create a new video on my page" />
          </div>

          <div>
            <Checkbox label="When I favorite a page’s video" />
          </div>

          <div>
            <Checkbox label="When I add a new video" />
          </div>

          <div>
            <Checkbox label="When I rate a channel" />
          </div>

          <div>
            <Checkbox label="When I follow a channel" />
          </div>

          <div>
            <Checkbox label="When I add a photo" />
          </div>

          <div>
            <Checkbox label="When I share an activity feed item" />
          </div>

          <div>
            <Checkbox label="When I am tagged" />
          </div>
        </Box>

        <div className={classes.btn}>
          <Button text="Make Changes" type="button" />
        </div>
      </Box>
    </Box>
  );
};

export default Privacy;
