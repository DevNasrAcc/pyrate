import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

import Footer from "../../../components/footer";
import Header from "../../../components/header";
import SearchIcon from "../../../assets/images/search.png";
// import { ReactComponent as Filter } from "../../../assets/images/filter.svg";
import LinksSearch from "../../../components/searchLinks";
// import SearchFilter from "./searchFilter";
// import Member from "./memberSearch";
// import Group from "./groupSearch";
// import Page from "./pageSearch";
// import Photo from "./photoSearch";
// import Video from "./videoSearch";
// import MyGroupSearch from "./myGroupSearch";
// import MyPageSearch from "./myPageSearch";

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#F5F5F5",
    height: "100%",
    paddingTop: "70px",
  },
  searchDiv: {
    backgroundColor: "#ffffff",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .divInp": {
      width: "100%",
      padding: "0 18px 0 20px",
      position: "relative",
      "& input": {
        width: "100%",
        padding: "12px 0 12px 17px",
        border: "1px solid #C4C4C4",
        borderRadius: "10px",
        fontFamily: "Amarante",
        lineHeight: "20px",
        fontSize: "16px",
      },
    },
  },
  searcIcon: {
    position: "absolute",
    top: "13px",
    right: "28px",
  },
  searchLinks: {
    margin: "4px 0",
    backgroundColor: "#ffffff",
  },
}));

const Search = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    members: false,
    groups: false,
    pages: false,
    images: true,
    videos: false,
  });
  return (
    <>
      <Header search={true} />
      <Box className={classes.box}>
        <div className={classes.searchDiv}>
          <div className="divInp">
            <input type="text" placeholder="Search" />
            <span className={classes.searcIcon}>
              <img src={SearchIcon} alt="" />
            </span>
          </div>
        </div>
        <div className={classes.searchLinks}>
          <LinksSearch setState={setState} state={state} />
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            width: "100%",
            height: "66.5%",
          }}
        ></div>
      </Box>
      <Footer />
    </>
  );
};

export default Search;
