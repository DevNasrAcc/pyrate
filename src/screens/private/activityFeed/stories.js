import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

import FirstImage from "../../../assets/images/first-image.png";
import SecondImage from "../../../assets/images/second-image.png";
import ThirdImage from "../../../assets/images/third-image.png";
import Add from "../../../assets/images/transparent-add.png";

const useStyles = makeStyles(() => ({
  headText: {
    position: "relative",
    marginRight: "20px",
  },
  textOnImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  add: {
    textAlign: "right",
    marginRight: "9px",
    marginTop: "8px",
  },
  account: {
    position: "absolute",
    bottom: "10px",
    textAlign: "center",
    color: "#fff",
    width: "100%",
    fontSize: "16px",
    lineHeight: "20px",
  },
}));

const Stories = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        paddingLeft: "20px",
        paddingTop: "17px",
        paddingBottom: "17px",
      }}
    >
      <div className={classes.headText}>
        <div className={classes.headImage}>
          <img src={FirstImage} alt="" />
        </div>

        <div className={classes.textOnImage}>
          <div className={classes.add}>
            <img src={Add} alt="" />
          </div>

          <div className={classes.account}>
            <span>Add</span>
          </div>
        </div>
      </div>

      <div className={classes.headText}>
        <div className={classes.headImage}>
          <img src={SecondImage} alt="" />
        </div>

        <div className={classes.textOnImage}>
          <div className={classes.account}>
            <span>Stephanie</span>
          </div>
        </div>
      </div>

      <div className={classes.headText}>
        <div className={classes.headImage}>
          <img src={ThirdImage} alt="" />
        </div>

        <div className={classes.textOnImage}>
          <div className={classes.account}>
            <span>Aiony</span>
          </div>
        </div>
      </div>

      <div className={classes.headText}>
        <div className={classes.headImage}>
          <img src={ThirdImage} alt="" />
        </div>

        <div className={classes.textOnImage}>
          <div className={classes.account}>
            <span>Shusi</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Stories;
