import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid, Box } from "@mui/material";

import { data } from "./data";
import { ReactComponent as Filter } from "../../../../assets/images/filter.svg";
import SearchIcon from "../../../../assets/images/search.png";
import Footer from "../../../../components/footer";
import Header from "../../../../components/header";

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
  imagDiv: {
    width: "119px",
    height: "119px",
    borderRadius: "10px",
    "& img": {
      width: "100%",
    },
  },
}));

const PhotoSearch = () => {
  const classes = useStyles();
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
        <Box>
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
            {/* <div style={{ marginTop: "11px" }}>
            <LinksSearch
              text="Saved"
              onClick={() => history.push("/my-pages")}
            />
          </div> */}
          </div>
          <Grid
            container
            spacing={2}
            style={{
              width: "100%",
              marginLeft: "0px",
              marginTop: "4px",
              justifyContent: "space-evenly",
            }}
          >
            {data.map((img, index) => (
              <Grid key={index}>
                <div key={img.id} className={classes.imagDiv}>
                  <img src={img.image} alt="" />
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default PhotoSearch;
