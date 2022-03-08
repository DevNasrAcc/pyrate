import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box, TextareaAutosize, Button, Typography } from "@mui/material";

import { HiOutlineArrowLeft } from "react-icons/hi";

import Input from "../../../../../components/inputWithLabel";
import Select from "../../../../../components/customSelect";
import Radio from "../../../../../components/customRadio";
import { ReactComponent as PhotoIcon } from "../../../../../assets/profileScreens/image.svg";

const useStyles = makeStyles(() => ({
  linkBack: {
    backgroundColor: "#000",
    boxShadow: "0px 2px 10px 0px #0000001A",
    display: "flex",
    alignItems: "center",
    padding: "20px 0px 21px 24px",
    color: "#fff",
    "& a": {
      color: "#fff",
      fontSize: "18px",
      lineHeight: "22px",
      fontWeight: 400,
      marginLeft: "28px",
    },
  },
  createDiv: {
    backgroundColor: "#C4C4C4",
    boxShadow: "inset 0px -4px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    paddingTop: "14px",
    paddingBottom: "13px",
    "& span": {
      color: "#000000",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontSize: "16px",
      lineHeight: "20px",
    },
  },
  profileSelector: {
    width: "171px",
    height: "171px",
    borderRadius: "50%",
    border: "4px solid #000",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "31px",
    marginBottom: "40px",
    "& h6": {
      fontSize: "16px",
      lineHeight: "20px",
      fontFamily: "Amarante",
    },
  },
  form: {
    padding: "25px 20px 38px 20px",
    backgroundColor: "#F5F5F5",
  },
  input: {
    marginBottom: "20px",
    "& .MuiInputBase-root": {
      width: "335px !important",
      borderRadius: "10px !important",
      display: "flex",
      justifyContent: "center",
      "& input": {
        width: "100%",
        borderRadius: "10px !important",
      },
    },
    "& textarea": {
      width: "335px",
      padding: "14px",
      borderRadius: "10px",
      border: "2px solid #000",
      height: "170px !important",
    },
  },
  btn: {
    backgroundColor: "#000000 !important",
    borderRadius: "10px !important",
    width: "100%",
    paddingTop: "13px !important",
    paddingBottom: "13px !important",
    color: "#fff !important",
    fontSize: "24px !important",
    lineHeight: "30px !important",
    fontFamily: "Amarante !important",
    textTransform: "inherit !important",
    marginTop: "50px !important",
  },
}));

function CreateGroup() {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = useState({
    groupTitle: "",
    url: "",
    interest: null,
    category: "",
    description: "",
    location: "",
    titleSingular: "",
    titlePlural: "",
    viewPrivacy: "",
    commentPrivacy: "",
    uploadPrivacy: "",
    status: "",
  });
  const {
    groupTitle,
    url,
    interest,
    category,
    description,
    location,
    titleSingular,
    viewPrivacy,
    titlePlural,
    commentPrivacy,
    uploadPrivacy,
    status,
  } = state;

  const handleInputChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  return (
    <Box sx={{ bgcolor: "#E5E5E5", minHeight: "100%" }}>
      <div className={classes.linkBack}>
        <HiOutlineArrowLeft onClick={() => history.push("/my-group")} />
        <Link to="/my-group">Cancel</Link>
      </div>

      <div className={classes.createDiv}>
        <span>Create New Group:</span>
      </div>
      <Box component="form" className={classes.form}>
        <div>
          <label>Main Photo</label>
          <div className={classes.profileSelector}>
            <input style={{ display: "none" }} />
            <div style={{ textAlign: "center" }}>
              <PhotoIcon />
              <Typography variant="h6">Group Photo</Typography>
            </div>
          </div>
        </div>

        <div className={classes.input}>
          <Input
            labelText="Group Title:"
            type="text"
            value={groupTitle}
            onChange={(e) => handleInputChange("groupTitle", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Custom URL:"
            type="text"
            value={url}
            onChange={(e) => handleInputChange("url", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Intrests:"
            type="text"
            value={interest}
            onChange={(e) => handleInputChange("interest", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Select label="Category" />
        </div>

        <div className={classes.input}>
          <label style={{ display: "block", marginBottom: "12px" }}>
            Description:
          </label>
          <TextareaAutosize
            aria-label="maximum height"
            style={{ width: 335, height: 256 }}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Location:"
            type="text"
            value={location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </div>

        <div>
          <div>
            <label>Adult Only?</label>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "14px",
              marginBottom: "20px",
              marginLeft: "28px",
            }}
          >
            <span style={{ marginRight: "40px" }}>
              <Radio label="Yes" />
            </span>
            <span>
              <Radio label="No" />
            </span>
          </div>
        </div>

        <div>
          <div>
            <label>Approve Members?</label>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "14px",
              marginBottom: "20px",
              marginLeft: "28px",
            }}
          >
            <span style={{ marginRight: "40px" }}>
              <Radio label="Yes" />
            </span>
            <span>
              <Radio label="No" />
            </span>
          </div>
        </div>

        <div>
          <div>
            <label>Auto-Approve Posts?</label>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "14px",
              marginBottom: "20px",
              marginLeft: "28px",
            }}
          >
            <span style={{ marginRight: "40px" }}>
              <Radio label="Yes" />
            </span>
            <span>
              <Radio label="No" />
            </span>
          </div>
        </div>

        <div>
          <div>
            <label>Let Others Tag Your Group?</label>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "14px",
              marginBottom: "20px",
              marginLeft: "28px",
            }}
          >
            <span style={{ marginRight: "40px" }}>
              <Radio label="Yes" />
            </span>
            <span>
              <Radio label="No" />
            </span>
          </div>
        </div>

        <div>
          <div>
            <label>Let Members Invite Others?</label>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "14px",
              marginBottom: "20px",
              marginLeft: "28px",
            }}
          >
            <span style={{ marginRight: "40px" }}>
              <Radio label="Yes" />
            </span>
            <span>
              <Radio label="No" />
            </span>
          </div>
        </div>

        <div className={classes.input}>
          <Input
            labelText="Members’ Title (Singular)"
            type="text"
            value={titleSingular}
            onChange={(e) => handleInputChange("titleSingular", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Members’ Title (Plural)"
            type="text"
            value={titlePlural}
            onChange={(e) => handleInputChange("titlePlural", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Select label="Viewing Privacy" />
        </div>

        <div className={classes.input}>
          <Select label="Comment Privacy" />
        </div>

        <div className={classes.input}>
          <Select label="Video Upload Privacy" />
        </div>

        <div className={classes.input}>
          <Select label="Status:" />
        </div>

        <Button className={classes.btn}>Create Group</Button>
      </Box>
    </Box>
  );
}

export default CreateGroup;
