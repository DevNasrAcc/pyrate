import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";

import Pic from "../../../../assets/images/requestProfile.png";
import { ReactComponent as Accept } from "../../../../assets/images/accept.svg";
import { ReactComponent as Delete } from "../../../../assets/images/remove.svg";

const usestyles = makeStyles(() => ({
  parentDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 15px 15px 12px",
    marginBottom: "1px",
    backgroundColor: "#ffffff",
  },
  profileName: {
    fontFamily: "Amarante !important",
    fontSize: "16px  !important",
    fontWeight: "400  !important",
    lineHeight: "20px  !important",
    color: "#000",
    // marginBottom: "8px !important",
  },
  friends: {
    marginTop: "4px",
    display: "flex",
    "& div": {
      backgroundColor: "#000000",
      color: "#ffffff",
      padding: "4px 12px",
      borderRadius: "12px",
      marginRight: "10px",

      "& span": {
        fontSize: "12px",
      },
    },
  },
  suggestion: {
    textAlign: "center",
    backgroundColor: "#6F6F6F",
    borderBottom: "1px solid #000000",
    filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
    "& h3": {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      color: "#fff",
      fontSize: "24px",
      lineHeight: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      fontFamily: "Amarante !important",
    },
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& span": {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#000",
      "& svg": {
        width: "100%",
      },
    },
  },
  delete: {
    backgroundColor: "#fff !important",
    border: "1px solid #000",
    marginTop: "16px",
    "& svg": {
      position: "relative",
      top: "3px",
    },
  },
  accept: {
    "& svg": {
      position: "relative",
      top: "1px",
    },
  },
}));

const FriendRequest = ({ state, setState }) => {
  const { friendRequest } = state;

  const classes = usestyles();

  const data = [
    {
      id: 1,
      img: Pic,
      name: "Hunter Johnson",
      mutualFriends: "Friends: #",
      accept: <Accept />,
      remove: <Delete />,
    },
    {
      id: 2,
      img: Pic,
      name: "Hunter Johnson",
      mutualFriends: "Friends: #",
      accept: <Accept />,
      remove: <Delete />,
    },
    {
      id: 3,
      img: Pic,
      name: "Hunter Johnson",
      mutualFriends: "Friends: #",
      accept: <Accept />,
      remove: <Delete />,
    },
    {
      id: 4,
      img: Pic,
      name: "Hunter Johnson",
      mutualFriends: "Friends: #",
      accept: <Accept />,
      remove: <Delete />,
    },
  ];

  useEffect(() => {
    setState({ friendRequest: true });
  }, [friendRequest]);

  return (
    <Box
      sx={{
        position: "relative",
        top: "140px",
        zIndex: "100",
        paddingBottom: "75px",
        backgroundColor: "#E5E5E5",
      }}
    >
      {data.map((element, index) => (
        <div key={index} className={classes.parentDiv}>
          <div style={{ display: "flex" }}>
            <div>
              <img src={element.img} alt="" />
            </div>

            <div style={{ marginLeft: "13px" }}>
              <Typography variant="h6" className={classes.profileName}>
                {element.name}
              </Typography>

              <div>
                <span>Mutual:</span>

                <div className={classes.friends}>
                  <div>
                    <span>{element.mutualFriends}</span>
                  </div>
                  <div>
                    <span>{element.mutualFriends}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={classes.icons}>
              <span className={classes.accept}>{element.accept}</span>

              <span className={classes.delete}>{element.remove}</span>
            </div>
          </div>
        </div>
      ))}

      <Box>
        <div className={classes.suggestion}>
          <Typography variant="h3">Suggested Friends</Typography>
        </div>

        {data.map((element, index) => (
          <div key={index} className={classes.parentDiv}>
            <div style={{ display: "flex" }}>
              <div>
                <img src={element.img} alt="" />
              </div>

              <div style={{ marginLeft: "13px" }}>
                <Typography variant="h6" className={classes.profileName}>
                  {element.name}
                </Typography>

                <div>
                  <span>Mutual:</span>

                  <div className={classes.friends}>
                    <div>
                      <span>{element.mutualFriends}</span>
                    </div>
                    <div>
                      <span>{element.mutualFriends}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.icons}>
                <span className={classes.accept}>{element.accept}</span>

                <span className={classes.delete}>{element.remove}</span>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default FriendRequest;
