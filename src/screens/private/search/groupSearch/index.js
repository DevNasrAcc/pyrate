import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { data } from "./data";
import { ReactComponent as Filter } from "../../../../assets/images/filter.svg";
import SearchIcon from "../../../../assets/images/search.png";
import Footer from "../../../../components/footer";
import Header from "../../../../components/header";
import LinksSearch from "../../../../components/searchLinks";

const useStyles = makeStyles(() => ({
  search: {
    position: "relative",
    marginTop: "25px",
    margin: "auto",
    "& input": {
      borderRadius: "20px !important",
      border: "2px solid #000 !important",
      backgroundColor: "#9D9D9D !important",
      padding: "11px",
      width: "335px",
      filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
      paddingLeft: "40px",
      paddingRight: "70px",
    },
  },
  filterIcon: {
    position: "absolute",
    top: "8px",
    left: "15px",
    zIndex: "200",
  },
  searcIcon: {
    position: "absolute",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "0.5px",
    right: "0",
    width: "64px",
    height: "41px",
    borderRadius: "20px",
    "& img": {
      width: "40%",
    },
  },
  mainHeading: {
    backgroundColor: "#C4C4C4",
    boxShadow: "inset 0px -4px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    borderBottom: "1px solid #000000",
    paddingTop: "11px",
    paddingBottom: "16px",
    "& h4": {
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Amarante",
      lineHight: "20px",
      color: "#000000",
    },
  },
  imgDiv: {
    width: "124px",
    height: "124px",
    marginRight: "12px",
  },
  likeDiv: {
    backgroundColor: "#fff",
    display: "flex",
    borderBottom: "1.5px solid #000",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
    "& h6": {
      color: "#000",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      fontSize: "16px",
      lineHeight: "20px",
      fontFamily: "Amarante",
    },
    "& span": {
      marginRight: "11px",
    },
  },
  details: {
    "& h6": {
      color: "#3A3A3A",
      fontSize: "12px",
      lineHeight: "15px",
      fontFamily: "Amarante",
      marginBottom: "2px",
    },
    "& p": {
      fontSize: "12px",
      lineHeight: "15px",
      fontFamily: "Amarante",
      color: "#5B5B5B",
    },
  },
  loadMore: {
    backgroundColor: "#5B5B5B",
    border: "1px solid #000",
    textAlign: "center",
    paddingTop: "4px",
    paddingBottom: "4px",
    "& h6": {
      color: "#F5F5F5",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      fontSize: "12px",
      lineHeight: "15px",
      fontFamily: "Amarante",
    },
  },
}));

const GroupSearch = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box>
      <Header />
      <Box
        style={{
          position: "relative",
          top: "66px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            height: "112px",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            borderBottom: "1px solid #000000",
            filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
            backgroundColor: "#5B5B5B",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className={classes.search}>
              <span
                className={classes.filterIcon}
                onClick={() => history.push("/filter")}
              >
                <Filter />
              </span>
              <input type="text" />
              <span className={classes.searcIcon}>
                <img src={SearchIcon} alt="" />
              </span>
            </span>
          </div>
          <div style={{ marginTop: "11px" }}>
            <LinksSearch
              text="My Groups"
              onClick={() => history.push("/my-groups")}
            />
          </div>
        </div>
        <Box sx={{ minHeight: "80vh", overflowY: "auto" }}>
          {data.map((value) => (
            <Box
              className={classes.likeDiv}
              onClick={() => history.push("/group")}
            >
              <div className={classes.imgDiv}>
                <img src={value.img} alt="" />
              </div>

              <div style={{ marginTop: "8px", width: "100%" }}>
                <div className={classes.heading}>
                  <Typography variant="h6">{value.title}</Typography>
                  <span>
                    <MoreHorizIcon />
                  </span>
                </div>

                <div className={classes.details}>
                  <Typography variant="h6">{value.detail}</Typography>
                  <Typography variant="h6">Members: {value.members}</Typography>
                  <Typography variant="h6">
                    Mutual Interests: {value.mutualInterests}
                  </Typography>
                </div>
              </div>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default GroupSearch;
