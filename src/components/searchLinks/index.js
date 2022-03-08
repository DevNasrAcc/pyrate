import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box, Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  linkBox: {
    display: "flex",
    justifyContent: "space-between",
    height: "50px",
    // width: "335px",
    // margin: "auto",
  },
  heading: {
    color: "#C4C4C4 !important",
    fontSize: "16px !important",
    lineHeight: "20px !important",
    fontFamily: "Amarante !important",
    textTransform: "inherit !important",
  },
  active: {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3) !important",
    color: "#000000 !important",
  },
}));

const SearchLinks = (props) => {
  const { setState, state } = props;

  const classes = useStyles();
  return (
    <Box className={classes.linkBox}>
      <Button
        onClick={() => {
          setState({
            members: true,
            groups: false,
            pages: false,
            images: false,
            videos: false,
          });
        }}
        className={[
          classes.heading,
          state.members ? classes.active : null,
        ].join(" ")}
      >
        Members
      </Button>

      <Button
        onClick={() => {
          setState({
            members: false,
            groups: true,
            pages: false,
            images: false,
            videos: false,
          });
        }}
        className={[classes.heading, state.groups ? classes.active : null].join(
          " "
        )}
      >
        Groups
      </Button>

      <Button
        onClick={() => {
          setState({
            members: false,
            groups: false,
            pages: true,
            images: false,
            videos: false,
          });
        }}
        className={[classes.heading, state.pages ? classes.active : null].join(
          " "
        )}
      >
        Pages
      </Button>

      <Button
        onClick={() => {
          setState({
            members: false,
            groups: false,
            pages: false,
            images: true,
            videos: false,
          });
        }}
        className={[classes.heading, state.images ? classes.active : null].join(
          " "
        )}
      >
        Images
      </Button>

      <Button
        onClick={() => {
          setState({
            members: false,
            groups: false,
            pages: false,
            images: false,
            videos: true,
          });
        }}
        className={[classes.heading, state.videos ? classes.active : null].join(
          " "
        )}
      >
        Videos
      </Button>
    </Box>
  );
};

export default SearchLinks;
