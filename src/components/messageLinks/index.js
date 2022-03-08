import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  allPages: {
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "15px",
    paddingBottom: "18px",
    display: "flex",
    justifyContent: "space-around",
    position: "fixed",
    width: "100%",
    top: "64px",
    zIndex: "100",
    backgroundColor: "#fff",
    "& li": {
      listStyle: "none",
      "& a": {
        fontSize: "24px",
        color: "#C4C4C4",
      },
    },
    lineHeight: "20px",
  },
  activeLinks: {
    color: "#000000 !important",
    borderBottom: "3px solid #000",
  },
}));

const MessageLinks = (props) => {
  const { all, members, group, page } = props;

  const classes = useStyles();
  return (
    <Box>
      <ul className={classes.allPages}>
        <li>
          <Link to="/messages" className={classes.activeLinks}>
            All
          </Link>
        </li>
        <li>
          <Link to="/members" className={members ? classes.activeLinks : null}>
            Members
          </Link>
        </li>
        <li>
          <Link to="/groups" className={group ? classes.activeLinks : null}>
            Group
          </Link>
        </li>
        <li>
          <Link to="/pages" className={page ? classes.activeLinks : null}>
            Page
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default MessageLinks;
