import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  allPages: {
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "15px",
    paddingBottom: "18px",
    display: "flex",
    justifyContent: "space-between",
    "& li": {
      listStyle: "none",
      "& a": {
        fontSize: "16px",
        color: "#C4C4C4",
      },
    },
    lineHeight: "20px",
  },
  activeLinks: {
    color: "#000000 !important",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
}));

const ActiveLinks = (props) => {
  const { all, friends, groups, pages, saved, advanced } = props;

  const classes = useStyles();
  return (
    <ul className={classes.allPages}>
      <li>
        <Link to="/activity-feed" className={all ? classes.activeLinks : null}>
          All
        </Link>
      </li>
      {/* <li>
        <Link
          to="/activity-feed"
          className={friends ? classes.activeLinks : null}
        >
          Friends
        </Link>
      </li> */}
      <li>
        <Link to="/group" className={groups ? classes.activeLinks : null}>
          Groups
        </Link>
      </li>
      <li>
        <Link to="/page" className={pages ? classes.activeLinks : null}>
          Pages
        </Link>
      </li>
      <li>
        <Link
          to="/activity-feed"
          className={saved ? classes.activeLinks : null}
        >
          Saved
        </Link>
      </li>
      <li>
        <Link to="/advanced" className={advanced ? classes.activeLinks : null}>
          Advanced
        </Link>
      </li>
    </ul>
  );
};

export default ActiveLinks;
