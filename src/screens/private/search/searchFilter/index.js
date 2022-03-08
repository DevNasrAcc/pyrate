import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Grid, Input } from "@mui/material";

import CheckBox from "../../../../components/customCheckbox";
import Button from "../../../../components/button";
import { ReactComponent as Icon } from "../../../../assets/inbox-icons/search.svg";

const useStyles = makeStyles(() => ({
  label: {
    fontSize: "20px !important",
    lineHeight: "25px !important",
    color: "#000000",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    fontFamily: "Amarante !important",
    marginLeft: "20px !important",
  },
  input: {
    margin: "auto",
    width: "335px",
    "& label": {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    "& .MuiInputBase-root": {
      width: "100%",
      "&::before": {
        borderBottom: "none !important",
      },
      "&::after": {
        borderBottom: "none !important",
      },
      "& input": {
        paddingTop: "13px",
        paddingBottom: "13px",
        paddingLeft: "14px",
        borderRadius: "10px !important",
        backgroundColor: "#ffffff",
        border: "2px solid #000",
        marginBottom: "8px",
        marginTop: "8px",
      },
    },
  },
  searchInp: {
    position: "relative",
    "& span": {
      position: "absolute",
      right: "19px",
      top: "20px",
    },
  },
  searchBtn: {
    width: "335px",
    margin: "auto",
    "& button": {
      marginTop: "26px !important",
      marginBottom: "20px !important",
      width: "100% !important",
      backgroundColor: "#000",
      borderRadius: "10px !important",
      color: "#fff !important",
      fontSize: "24px !important",
      lineHeight: "30px !important",
      paddingTop: "13px !important",
      paddingBottom: "13px !important",
    },
  },
}));

const Filter = () => {
  const classes = useStyles();
  return (
    <Box>
      <div style={{ marginTop: "20px" }}>
        <Typography className={classes.label} variant="h6">
          Keyword/Hashtag:
        </Typography>
        <div className={classes.input}>
          <div className={classes.searchInp}>
            <Input />
            <span>
              <Icon />
            </span>
          </div>
        </div>
      </div>

      <div>
        <Typography className={classes.label} variant="h6">
          Categories:
        </Typography>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "14px", paddingLeft: "44px" }}
        >
          <Grid item md={4} style={{ paddingTop: "0px" }}>
            <CheckBox label="Members" />
            <CheckBox label="Groups" />
            <CheckBox label="Pages" />
          </Grid>

          <Grid item md={4} style={{ paddingTop: "0px" }}>
            <CheckBox label="Videos" />
            <CheckBox label="Photos" />
          </Grid>

          <Grid item md={4} />
        </Grid>
      </div>

      <div>
        <Typography className={classes.label} variant="h6">
          Browse By:
        </Typography>

        <div style={{ marginLeft: "40px", marginTop: "14px" }}>
          <CheckBox label="Most Viewed" />
          <CheckBox label="Most Liked" />
          <CheckBox label="Recently Created" />
        </div>
      </div>

      <div>
        <Typography className={classes.label} variant="h6">
          Location:
        </Typography>

        <Box style={{ marginTop: "18px" }}>
          <div className={classes.input}>
            <label>Country:</label>
            <Input />
          </div>

          <div className={classes.input}>
            <label>State/Province:</label>
            <Input />
          </div>
          <div className={classes.input}>
            <label>City:</label>
            <Input />
          </div>
        </Box>
      </div>

      <div className={classes.searchBtn}>
        <Button text="Search" type="button" />
      </div>
    </Box>
  );
};

export default Filter;
