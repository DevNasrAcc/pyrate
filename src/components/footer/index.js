import React from "react";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

import { ReactComponent as Feed } from "../../assets/footer-icons/home.svg";
import { ReactComponent as Search } from "../../assets/footer-icons/search.svg";
import { ReactComponent as Notification } from "../../assets/footer-icons/notification.svg";
import { ReactComponent as Message } from "../../assets/footer-icons/message.svg";
import { ReactComponent as Profile } from "../../assets/footer-icons/profile.svg";

const useStyles = makeStyles(() => ({
  footerMain: {
    position: "fixed",
    width: "100%",
    backgroundColor: "#000000",
    zIndex: "100",
    bottom: "0",
  },
  list: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "21px 0px 23px 0px",
    "& li": {
      listStyle: "none",
      "& a": {
        transition: "all 0.3s ease-in-out",
      },
    },
  },
  listStyle: {
    borderBottom: "1.5px solid #FFFFFF",
    "& svg": {
      filter: "brightness(0) invert(1)",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.footerMain}>
      <ul className={classes.list}>
        <li>
          <Link
            className={
              history.location.pathname === "/activity-feed"
                ? classes.listStyle
                : null
            }
            to="/activity-feed"
          >
            <Feed />
          </Link>
        </li>

        <li>
          <Link
            className={
              history.location.pathname === "/search" ? classes.listStyle : null
            }
            to="search"
          >
            <Search />
          </Link>
        </li>

        <li>
          <Link
            className={
              history.location.pathname === "/notifications"
                ? classes.listStyle
                : null
            }
            to="notifications"
          >
            <Notification />
          </Link>
        </li>

        <li>
          <Link
            className={
              history.location.pathname === "/messages"
                ? classes.listStyle
                : null
            }
            to="messages"
          >
            <Message />
          </Link>
        </li>

        <li>
          <Link
            className={
              history.location.pathname === "/my-profile"
                ? classes.listStyle
                : null
            }
            to="my-profile"
          >
            <Profile />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
