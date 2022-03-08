import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { OverlayButton } from "../../../../components/overlayButton";
import Profile from "../../../../assets/images/feed-image.png";
import ProfileSecond from "../../../../assets/images/profile.png";
import ProfileThird from "../../../../assets/images/message2.png";
import Write from "../../../../assets/images/write.png";

const useStyles = makeStyles(() => ({
  parentDiv: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    padding: "12px 23px 25px 17px",
    borderBottom: "1px solid #000",
    backgroundColor: "#fff",
    "& span": {
      fontSize: "12px",
    },
  },
  profile: {
    width: "30px",
    marginRight: "10px",
    "& img": {
      width: "100%",
    },
  },
  profileName: {
    fontFamily: "Amarante !important",
    fontSize: "16px  !important",
    fontWeight: "400  !important",
    lineHeight: "20px  !important",
    color: "#000",
    marginBottom: "8px !important",
  },
}));

const AllMessages = ({ state, setState }) => {
  const history = useHistory();
  const classes = useStyles();
  const data = [
    {
      id: 1,
      img: <img src={ProfileThird} alt="" />,
      name: "Aiony Haust ",
      activity:
        "Hello Friend, whats good mate? . It will say stuff here. Blah blah blah more stuff....",
      icon: <MoreHorizIcon />,
    },
    {
      id: 2,
      img: <img src={ProfileSecond} alt="" />,
      name: "Lucas Sankey",
      activity:
        "Hello Friend, whats good mate? . It will say stuff here. Blah blah blah more stuff....",
      icon: <MoreHorizIcon />,
    },
    {
      id: 3,
      img: <img src={ProfileSecond} alt="" />,
      name: "Warren Wong",
      activity:
        "Hello Friend, whats good mate? . It will say stuff here. Blah blah blah more stuff....",
      icon: <MoreHorizIcon />,
    },
    {
      id: 4,
      img: <img src={Profile} alt="" />,
      name: "Joe Robless",
      activity:
        "Hello Friend, whats good mate? . It will say stuff here. Blah blah blah more stuff....",
      icon: <MoreHorizIcon />,
    },
    {
      id: 5,
      img: <img src={ProfileThird} alt="" />,
      name: "Joanna Nix",
      activity:
        "Hello Friend, whats good mate? . It will say stuff here. Blah blah blah more stuff....",
      icon: <MoreHorizIcon />,
    },
    {
      id: 6,
      img: <img src={ProfileThird} alt="" />,
      name: "Aiony Haust ",
      activity:
        "Hello Friend, whats good mate? . It will say stuff here. Blah blah blah more stuff....",
      icon: <MoreHorizIcon />,
    },
    {
      id: 7,
      img: <img src={ProfileThird} alt="" />,
      name: "Aiony Haust ",
      activity:
        "Hello Friend, whats good mate? . It will say stuff here. Blah blah blah more stuff....",
      icon: <MoreHorizIcon />,
    },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        top: "65px",
        paddingBottom: "75px",
      }}
    >
      {data.map((value) => (
        <div key={value.id} className={classes.parentDiv}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={classes.profile}>
              <img src={Profile} alt="" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "14px",
              }}
            >
              <Typography variant="h6" className={classes.profileName}>
                {value.name}
              </Typography>
              <span>{value.activity}</span>
            </div>
          </div>

          <div>{value.icon}</div>
        </div>
      ))}
      <div>
        <OverlayButton icon={Write} onClick={() => history.push("/inbox")} />
      </div>
    </Box>
  );
};

export default AllMessages;
