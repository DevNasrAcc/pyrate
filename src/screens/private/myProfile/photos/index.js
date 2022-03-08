import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@mui/material";

import Uploads from "../../../../assets/photos/photo-1.png";
import NightBand from "../../../../assets/photos/photo-2.png";
import Tattoo from "../../../../assets/photos/photo-3.png";
import New from "../../../../assets/photos/photo-4.png";
import Uploaded from "../../../../assets/photos/photo-5.png";
import { ReactComponent as Add } from "../../../../assets/photos/add-photo.svg";

const useStyles = makeStyles(() => ({
  flexBox: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingTop: "20px",
    paddingLeft: "20px",
    "& h3": {
      fontSize: "16px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    "& span": {
      fontSize: "12px",
      lineHeight: "15px",
    },
  },
  albumDiv: {
    marginRight: "17px",
    marginBottom: "16px",
    textAlign: "center",
  },
  addPic: {
    textAlign: "center",
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(91, 91, 91, 1)",
    position: "relative",
    "& svg": {
      position: "absolute",
      top: 42,
      left: 42,
    },
  },
}));

const Photos = () => {
  const classes = useStyles();
  return (
    <Box sx={{ bgcolor: "#f5f5f5" }}>
      <Box className={classes.flexBox}>
        <div className={classes.albumDiv}>
          <img src={Uploads} alt="" />

          <div>
            <Typography variant="h3">Uploads</Typography>
            <span>162 photos</span>
          </div>
        </div>

        <div className={classes.albumDiv}>
          <img src={NightBand} alt="" />

          <div>
            <Typography variant="h3">Night Band</Typography>
            <span>38 photos</span>
          </div>
        </div>

        <div className={classes.albumDiv}>
          <img src={Tattoo} alt="" />

          <div>
            <Typography variant="h3">Tattoo</Typography>
            <span>9 photos</span>
          </div>
        </div>

        <div className={classes.albumDiv}>
          <img src={New} alt="" />

          <div>
            <Typography variant="h3">New Album</Typography>
            <span>162 photos</span>
          </div>
        </div>

        <div className={classes.albumDiv}>
          <img src={Uploaded} alt="" />

          <div>
            <Typography variant="h3">Uploaded</Typography>
            <span>162 photos</span>
          </div>
        </div>

        <div className={classes.addPic}>
          <div
            className={classes.albumDiv}
            style={{
              backgroundImage: `url(${Uploaded})`,
              opacity: "0.5",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <Add />
          <Typography variant="h3">Create Album</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Photos;
