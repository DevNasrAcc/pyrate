import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Friend1 from "../../../../assets/friends/friend-1.png";
import Friend2 from "../../../../assets/friends/friend-2.png";

const useStyles = makeStyles(() => ({
  friendDiv: {
    backgroundColor: "#fff",
    display: "flex",
    borderBottom: "1.5px solid #000",
  },
  imgDiv: {
    width: "124px",
    height: "124px",
    marginRight: "12px",
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
      marginBottom: "4px",
    },
  },
}));

const Friends = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.friendDiv}>
        <div className={classes.imgDiv}>
          <img src={Friend2} alt="" />
        </div>

        <div style={{ marginTop: "8px", width: "100%" }}>
          <div className={classes.heading}>
            <Typography variant="h6">Member Name Here</Typography>
            <span>
              <MoreHorizIcon />
            </span>
          </div>

          <div className={classes.details}>
            <Typography variant="h6">Age: ##</Typography>
            <Typography variant="h6">Location: City, State, Country</Typography>
            <Typography variant="h6">Mutual Friends: ###</Typography>
            <Typography variant="h6">Mutual Interests: ###</Typography>
          </div>
        </div>
      </Box>

      <Box className={classes.friendDiv}>
        <div className={classes.imgDiv}>
          <img src={Friend1} alt="" />
        </div>

        <div style={{ marginTop: "8px", width: "100%" }}>
          <div className={classes.heading}>
            <Typography variant="h6">Member Name Here</Typography>
            <span>
              <MoreHorizIcon />
            </span>
          </div>

          <div className={classes.details}>
            <Typography variant="h6">Age: ##</Typography>
            <Typography variant="h6">Location: City, State, Country</Typography>
            <Typography variant="h6">Mutual Friends: ###</Typography>
            <Typography variant="h6">Mutual Interests: ###</Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Friends;
