import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";

import AddImage from "../../assets/images/add-bg.png";
import Contact from "../../assets/images/contact.png";
import { ReactComponent as Add } from "../../assets/profileScreens/add-friend.svg";
import { ReactComponent as Message } from "../../assets/profileScreens/message.svg";
import { ReactComponent as Link } from "../../assets/profileScreens/link.svg";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: "218px",
    position: "relative",
  },
  addImg: {
    textAlign: "right",
    paddingRight: "20px",
    paddingTop: "20px",
  },
  img: {
    position: "absolute",
    bottom: "-22px",
    width: "100%",
    textAlign: "center",
  },
  profileImg: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    margin: "auto",
  },
  name: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    "& h6": {
      marginRight: "10px",
      fontSize: "24px",
      lineHeight: "30px",
      fontFamily: "Amarante",
    },
    "& span": {
      position: "relative",
      top: "2px",
    },
  },
  desc: {
    padding: "10px 32px 20px 32px",
    "& p": {
      fontFamily: "Amarante",
      fontSize: "12px",
      lineHeight: "15px",
      color: "#000",
      textAlign: "center",
    },
  },
  contactSvg: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      marginRight: "13px",
    },
  },
}));

const ProfileHeader = ({
  ProfileImage,
  name,
  bio,
  bgImage,
  page,
  group,
  type,
  pageType,
}) => {
  const classes = useStyles();

  return (
    <Box>
      <div
        className={classes.bgImage}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {page || group ? (
          <div className={classes.addImg}>
            <img src={AddImage} alt="" />
          </div>
        ) : null}

        <div className={classes.img}>
          <div className={classes.profileImg}>
            <img src={ProfileImage} alt="" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <div
          className={classes.name}
          style={{ display: page || group ? "flex" : "block" }}
        >
          <Typography variant="h6">
            {name}
            {type && (
              <span style={{ fontSize: "14px", marginLeft: "10px" }}>
                {pageType}
              </span>
            )}
          </Typography>
          {page || group ? (
            <span>
              <img src={Contact} alt="" />
            </span>
          ) : (
            <div className={classes.contactSvg}>
              <div>
                <Add />
              </div>
              <div>
                <Message />
              </div>
              <div>
                <Link />
              </div>
            </div>
          )}
        </div>

        <div className={classes.desc}>
          <Typography variant="body1">Bio: {bio}</Typography>
        </div>
      </div>
    </Box>
  );
};

export default ProfileHeader;
