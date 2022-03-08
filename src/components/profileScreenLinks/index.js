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
        fontFamily: "Amarante",
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
  photos,
  videos,
  members,
  subscribers,
  group,
  page,
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
                photos: false,
                videos: false,
                members: false,
                subscribers: false,
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
                photos: false,
                videos: false,
                members: false,
                subscribers: false,
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
                photos: true,
                videos: false,
                members: false,
                subscribers: false,
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
                photos: false,
                videos: true,
                members: false,
                subscribers: false,
              })
            }
            className={videos ? classes.active : null}
          >
            Videos
          </Button>
        </li>

        {group && (
          <li>
            <Button
              onClick={() =>
                setState({
                  feed: false,
                  info: false,
                  photos: false,
                  videos: false,
                  members: true,
                })
              }
              className={members ? classes.active : null}
            >
              Members
            </Button>
          </li>
        )}

        {page && (
          <li>
            <Button
              onClick={() =>
                setState({
                  feed: false,
                  info: false,
                  photos: false,
                  videos: false,
                  subscribers: true,
                })
              }
              className={subscribers ? classes.active : null}
            >
              Subscribers
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProfileLinks;
