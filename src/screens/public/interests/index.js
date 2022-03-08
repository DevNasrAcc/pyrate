import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Typography, TextField } from "@mui/material";
import CloseIcon from "@material-ui/icons/Cancel";

import { HiOutlineArrowLeft } from "react-icons/hi";

import Button from "../../../components/button";

const useStyles = makeStyles(() => ({
  backLink: {
    boxShadow: "0px 2px 10px 0px #0000001A",
    display: "flex",
    alignItems: "center",
    padding: "20px 0px 20px 30px",
    "& a": {
      fontSize: "18px",
      lineHeight: "22px",
      fontWeight: 400,
      marginLeft: "15px",
    },
  },
  heading: {
    fontSize: "36px !important",
    fontWeight: "400 !important",
    lineHeight: "45px !important",
    fontFamily: "Amarante !important",
    textAlign: "center",
    marginTop: "24px !important",
    marginBottom: "24px !important",
  },
  allPara: {
    paddingLeft: "18px",
    paddingRight: "21px",
    paddingBottom: "30px",
    "& p": {
      fontFamily: "Amarante !important",
      fontSize: "16px !important",
      fontWeight: "400 !important",
      lineHeight: "20px",
    },
  },
  selection: {
    fontSize: "20px !important",
    fontWeight: "400 !important",
    lineHeight: "25px !important",
    fontFamily: "Amarante !important",
    marginTop: "24px !important",
  },
  interestDiv: {
    margin: "auto",
    width: "335px",
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
  firstBtn: {
    "& button": {
      backgroundColor: "#fff",
      fontSize: "30px !important",
      lineHeight: "37px !important",
      color: "#000",
      border: "2px solid #000",
      marginTop: "38px",
    },
  },
  secondBtn: {
    "& button": {
      backgroundColor: "#000 !important",
      fontSize: "30px !important",
      lineHeight: "37px !important",
      color: "#fff",
      marginTop: "21px",
      marginBottom: "20px",
    },
  },
}));

const Interests = () => {
  const classes = useStyles();
  const history = useHistory();

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
      <div className={classes.backLink}>
        <HiOutlineArrowLeft
          fontSize="22px"
          onClick={() => history.push("/register")}
        />
        <Link to="register">Back</Link>
      </div>
      <Typography variant="h1" className={classes.heading}>
        Interests:
      </Typography>

      <div className={classes.allPara}>
        <Typography variant="body1">
          Interests are a useful way to find others who are interested in the
          same kind of content as you. Add some interests and find your people!
        </Typography>
        <br />

        <Typography variant="body1">
          The first box contains not only other users’ interests, but also the
          number of users who are interested in it.
        </Typography>
        <br />

        <Typography variant="body1">
          In the second box, you can add your own interests, just make sure you
          separate each one with a comma.
        </Typography>
        <br />

        <Typography variant="body1">
          You can edit these later from your Profile Info, or the Advanced
          Activity Feed Filter.
        </Typography>

        <div style={{ textAlign: "center" }}>
          <Typography variant="h3" className={classes.selection}>
            Select from others’ interests:
          </Typography>
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
        </div>

        {/* <form> */}
        <div style={{ textAlign: "center" }}>
          <Typography variant="h3" className={classes.selection}>
            Add your own interests here:
          </Typography>

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
        </div>

        <div className={classes.firstBtn}>
          <Button text="Skip For Now" />
        </div>

        <div className={classes.secondBtn}>
          <Button text="Completed!" />
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Interests;
