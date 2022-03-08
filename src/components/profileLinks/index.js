import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";

const usestyles = makeStyles(() => ({
  link: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    borderBottom: "1.5px solid #000",
    borderTop: "1.5px solid #000",
    "& li": {
      listStyle: "none",
      "& button": {
        fontSize: "16px",
        lineHeight: "20px",
        color: "#C4C4C4",
        padding: 0,
        minWidth: 0,
        textTransform: "inherit",
      },
    },
  },
  active: {
    color: "#000 !important",
  },
}));

const ProfileLinks = ({
  setState,
  feed,
  info,
  friends,
  photos,
  videos,
  likes,
}) => {
  const classes = usestyles();
  return (
    <div>
      <ul className={classes.link}>
        <li>
          <Button
            onClick={() =>
              setState({
                feed: true,
                info: false,
                friends: false,
                photos: false,
                videos: false,
                likes: false,
              })
            }
            className={feed ? classes.active : null}
          >
            Feed
          </Button>
        </li>

        <li>
          <Button
            onClick={() =>
              setState({
                feed: false,
                info: true,
                friends: false,
                photos: false,
                videos: false,
                likes: false,
              })
            }
            className={info ? classes.active : null}
          >
            Info
          </Button>
        </li>

        <li>
          <Button
            onClick={() =>
              setState({
                feed: false,
                info: false,
                friends: true,
                photos: false,
                videos: false,
                likes: false,
              })
            }
            className={friends ? classes.active : null}
          >
            Friends
          </Button>
        </li>

        <li>
          <Button
            onClick={() =>
              setState({
                feed: false,
                info: false,
                friends: false,
                photos: true,
                videos: false,
                likes: false,
              })
            }
            className={photos ? classes.active : null}
          >
            Photos
          </Button>
        </li>

        <li>
          <Button
            onClick={() =>
              setState({
                feed: false,
                info: false,
                friends: false,
                photos: false,
                videos: true,
                likes: false,
              })
            }
            className={videos ? classes.active : null}
          >
            Videos
          </Button>
        </li>

        <li>
          <Button
            onClick={() =>
              setState({
                feed: false,
                info: false,
                friends: false,
                photos: false,
                videos: false,
                likes: true,
              })
            }
            className={likes ? classes.active : null}
          >
            Likes
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileLinks;
