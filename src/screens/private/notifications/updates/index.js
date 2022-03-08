import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Profile from "../../../../assets/images/feed-image.png";

const useStyles = makeStyles(() => ({
  parentDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 23px 25px 17px",
    borderBottom: "1px solid #000",
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

const Updates = ({ state, setState }) => {
  const classes = useStyles();
  const data = [
    {
      id: 1,
      name: "Lucas Sankey",
      activity: "Commented on your Photo.",
      icon: <MoreHorizIcon />,
    },
    {
      id: 2,
      name: "Lucas Sankey",
      activity: "Commented on your Photo.",
      icon: <MoreHorizIcon />,
    },
    {
      id: 3,
      name: "Lucas Sankey",
      activity: "Commented on your Photo.",
      icon: <MoreHorizIcon />,
    },
    {
      id: 4,
      name: "Lucas Sankey",
      activity: "Commented on your Photo.",
      icon: <MoreHorizIcon />,
    },
    {
      id: 5,
      name: "Lucas Sankey",
      activity: "Commented on your Photo.",
      icon: <MoreHorizIcon />,
    },
    {
      id: 6,
      name: "Lucas Sankey",
      activity: "Commented on your Photo.",
      icon: <MoreHorizIcon />,
    },
    {
      id: 7,
      name: "Lucas Sankey",
      activity: "Commented on your Photo.",
      icon: <MoreHorizIcon />,
    },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        top: "140px",
        zIndex: "100",
        paddingBottom: "75px",
        backgroundColor: "#fff",
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
    </Box>
  );
};

export default Updates;
