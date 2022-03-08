import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import Community from "../../assets/images/community.png";
import Media from "../../assets/images/media.png";
import Settings from "../../assets/images/setting.png";
import Feedback from "../../assets/images/feedback.png";
import Close from "../../assets/images/close.png";
import Down from "../../assets/images/down.png";
import Up from "../../assets/images/up.png";
import Search from "../../assets/images/search.png";
import Logout from "../../assets/images/Logout.png";
import {logout} from "../../redux/store/actions/authAction";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
  closeBtn: {
    textAlign: "right",
    paddingTop: "32px",
    paddingRight: "22px",
  },
  search: {
    position: "relative",
    marginTop: "25px",
    margin: "auto",
    "& input": {
      borderRadius: "20px !important",
      border: "2px solid #000 !important",
      backgroundColor: "#9D9D9D !important",
      padding: "5px",
      width: "200px",
    },
    "& span": {
      position: "absolute",
      backgroundColor: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: "0",
      right: "0",
      width: "50px",
      height: "29px",
      borderRadius: "20px",
    },
  },
  list: {
    "& button": {
      fontSize: "24px",
      color: "#fff",
      textTransform: "inherit",
      "& span": {
        fontFamily: "Amarante !important",
        fontSize: "24px !important",
      },
    },
  },
  innerCont: {
    fontSize: "24px !important",
    color: "#fff",
    textTransform: "inherit",
    marginLeft: "60px",
    "& span": {
      fontSize: "24px !important",
      fontFamily: "Amarante !important",
    },
  },
  span: {
    color: "#fff",
    position: "absolute",
    bottom: "90px",
    width: "80%",
    borderTop: "1px solid #fff",
    marginLeft: "20px",
  },
  btn: {
    position: "absolute !important",
    bottom: "30px",
    marginLeft: "10px !important",
    width: "100% !important",
    display: "block !important",
    textAlign: "left !important",
    textTransform: "inherit !important",
  },
  logout: {
    display: "flex",
    alignItems: "center",
  },
  btnText: {
    fontSize: "24px !important",
    fontWeight: "400 !important",
    fontFamily: "Amarante !important",
    marginLeft: "30px !important",
    color: "#fff !important",
  },
}));

function Drawer(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState({
    community: false,
    media: false,
  });
  const { community, media } = dropdown;

  let drawerClasses = "sidedrawer";

  if (props.show) {
    drawerClasses = "sidedrawer open";
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className={drawerClasses}>
      <div className={classes.closeBtn}>
        <span onClick={props.drawerToggle}>
          <img src={Close} alt="" />
        </span>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <span className={classes.search}>
          <input type="search" />
          <span>
            <img src={Search} alt="" />
          </span>
        </span>
      </div>

      <List component="nav" className={classes.list}>
        <ListItemButton
          component={Button}
          onClick={() =>
            setDropdown({ ...dropdown, community: !community, media: false })
          }
          style={{ position: "relative", width: "100%" }}
        >
          <ListItemIcon>
            <img src={Community} alt="" />
          </ListItemIcon>
          <ListItemText primary="Community" />
          {community ? <img src={Down} alt="" /> : <img src={Up} alt="" />}
        </ListItemButton>

        <Collapse in={community} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                history.push("/members");
                props.drawerToggle();
              }}
            >
              <ListItemText primary="Members" className={classes.innerCont} />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                history.push("/group");
                props.drawerToggle();
              }}
            >
              <ListItemText primary="Groups" className={classes.innerCont} />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                history.push("/page");
                props.drawerToggle();
              }}
            >
              <ListItemText primary="Pages" className={classes.innerCont} />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton
          component={Button}
          onClick={() =>
            setDropdown({
              ...dropdown,
              media: !media,
              community: false,
            })
          }
          style={{ position: "relative", width: "100%" }}
        >
          <ListItemIcon>
            <img src={Media} alt="" />
          </ListItemIcon>
          <ListItemText primary="Media" />
          {media ? <img src={Down} alt="" /> : <img src={Up} alt="" />}
        </ListItemButton>

        <Collapse in={media} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Button}
              sx={{ pl: 4 }}
              onClick={() => {
                history.push("/videos");
                props.drawerToggle();
              }}
            >
              <ListItemText primary="Videos" className={classes.innerCont} />
            </ListItemButton>

            <ListItemButton
              component={Button}
              sx={{ pl: 4 }}
              onClick={() => {
                history.push("/photos");
                props.drawerToggle();
              }}
            >
              <ListItemText primary="Photos" className={classes.innerCont} />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton
          component={Button}
          onClick={() => history.push("/setting")}
        >
          <ListItemIcon>
            <img src={Settings} alt="" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

        <ListItemButton
          component={Button}
          onClick={() => history.push("/feedback")}
        >
          <ListItemIcon>
            <img src={Feedback} alt="" />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItemButton>
      </List>

      <span className={classes.span} />

      <Button className={classes.btn} onClick={onLogoutHandler}>
        <div className={classes.logout}>
          <img src={Logout} alt="" />
          <span className={classes.btnText}>Logout</span>
        </div>
      </Button>
    </div>
  );
}
export default Drawer;
