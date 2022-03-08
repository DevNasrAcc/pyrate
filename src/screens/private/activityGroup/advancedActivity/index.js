import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@mui/material";
import { HiOutlineArrowLeft } from "react-icons/hi";
import CloseIcon from "@material-ui/icons/Cancel";

import Radio from "../../../../components/customRadio";
import Footer from "../../../../components/footer";

const useStyles = makeStyles(() => ({
  linkBack: {
    backgroundColor: "#000",
    boxShadow: "0px 2px 10px 0px #0000001A",
    display: "flex",
    alignItems: "center",
    padding: "20px 0px 21px 24px",
    color: "#fff",
    "& a": {
      color: "#fff",
      fontSize: "18px",
      lineHeight: "22px",
      fontWeight: 400,
      marginLeft: "28px",
    },
  },
  mainDiv: {
    paddingLeft: "20px",
    paddingRight: "19px",
    "& p": {
      fontSize: "16px !important",
      lineHeight: "20px !important",
      color: "#000000",
      fontFamily: "Amarante !important",
      marginTop: "23px",
      marginBottom: "33px",
    },
    "& h1": {
      fontFamily: "Amarante !important",
      fontSize: "24px !important",
      lineHeight: "30px !important",
      color: "#000000",
    },
    "& h4": {
      fontSize: "20px !important",
      lineHeight: "25px !important",
      color: "#000000",
      fontFamily: "Amarante !important",
      marginTop: "24px",
      marginBottom: "12px",
      marginLeft: "20px",
    },
  },
  interestDiv: {
    backgroundColor: "#fff",
    width: "342px",
    height: "256px",
    border: "2px solid #000000",
    borderRadius: "10px",
    marginTop: "10px",
    paddingTop: "17px",
    paddingLeft: "17px",
    paddingRight: "20px",
    "@media (max-width:350px)": {
      width: "auto",
    },
    "&:first-child": {
      display: "block !important",
      textAlign: "center",
    },
  },
  interestChildDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "@media (max-width:350px)": {
      justifyContent: "center !important",
    },
  },
  interests: {
    background: "#000",
    fontSize: "12px",
    borderRadius: "10px",
    width: "136px",
    color: "#fff",
    padding: "5px 10px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "7px",
  },
  btn: {
    backgroundColor: "#000000 !important",
    borderRadius: "10px !important",
    width: "100%",
    paddingTop: "13px !important",
    paddingBottom: "13px !important",
    color: "#fff !important",
    fontSize: "24px !important",
    lineHeight: "30px !important",
    fontFamily: "Amarante !important",
    textTransform: "inherit !important",
    marginTop: "38px !important",
    marginBottom: "40px !important",
  },
}));

function AdvancedActivity() {
  const classes = useStyles();

  const interests = [
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
  ];

  return (
    <div>
      <Box
        sx={{ bgcolor: "#E5E5E5", minHeight: "100%", paddingBottom: "65px" }}
      >
        <div className={classes.linkBack}>
          <HiOutlineArrowLeft />
          <Link to="/activity-feed">Activity Feed</Link>
        </div>

        <Box className={classes.mainDiv}>
          <Typography variant="body1">
            Pyrate does not control your activity feed automatically with
            algorithms; instead, each user is allowed to manually customize what
            kind of media is displayed in their feed and where that content
            comes from.
          </Typography>

          <Box>
            <Typography variant="h1">My Interests:</Typography>
            <div className={classes.interestDiv}>
              <div className={classes.interestChildDiv}>
                {interests.map((ele, index) => (
                  <div className={classes.interests} key={index}>
                    <span>{ele.name}</span>
                    <CloseIcon fontSize="small" />
                  </div>
                ))}
              </div>
            </div>
          </Box>

          <Box style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Typography variant="h1">More Interests:</Typography>

            <div className={classes.interestDiv}>
              <div className={classes.interestChildDiv}>
                {interests.map((ele, index) => (
                  <div className={classes.interests} key={index}>
                    <span>{ele.name}</span>
                    <span>{ele.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </Box>

          <Box>
            <Typography variant="h1">Warning Label Settings:</Typography>

            <div>
              <Typography variant="h4">Sensitive Content</Typography>
            </div>

            <div style={{ marginLeft: "34px" }}>
              <Radio label="Default: Turn on warning label" />
            </div>

            <div style={{ marginLeft: "34px" }}>
              <Radio label="Uncensored: Turn off warning label" />
            </div>

            <div style={{ marginLeft: "34px" }}>
              <Radio label="Remove all Controversial Content from Feed" />
            </div>
          </Box>

          <Box>
            <div>
              <Typography variant="h4">Controversial Content</Typography>
            </div>

            <div style={{ marginLeft: "34px" }}>
              <Radio label="Default: Turn on warning label" />
            </div>

            <div style={{ marginLeft: "34px" }}>
              <Radio label="Uncensored: Turn off warning label" />
            </div>

            <div style={{ marginLeft: "34px" }}>
              <Radio label="Remove all Controversial Content from Feed" />
            </div>
          </Box>
        </Box>

        <Button className={classes.btn}>Filter Feed</Button>
      </Box>
      <Footer />
    </div>
  );
}

export default AdvancedActivity;
