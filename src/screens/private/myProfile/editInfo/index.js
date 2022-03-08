import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box, TextareaAutosize, Button, Typography } from "@mui/material";
import { HiOutlineArrowLeft } from "react-icons/hi";

import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import Input from "../../../../components/inputWithLabel";
import Select from "../../../../components/customSelect";
import { ReactComponent as Down } from "../../../../assets/images/down-arrow.svg";

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
  form: {
    padding: "25px 20px 38px 20px",
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
    },
  },
  inputPadding: {
    paddingBottom: "16px",
    "& .react-datepicker-wrapper": {
      marginTop: "4px",
      width: "335px",
      "& .react-datepicker__input-container": {
        "& input": {
          width: "100%",
          padding: "14px",
        },
      },
    },
    "& .react-datepicker-popper": {
      zIndex: "100",
    },
  },
  customInput: {
    padding: "17px",
    border: "2px solid #000",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    "& svg": {
      position: "relative",
      right: "7px",
    },
  },
  selection: {
    fontSize: "20px !important",
    fontWeight: "400 !important",
    lineHeight: "25px !important",
    fontFamily: "Amarante !important",
    marginTop: "24px !important",
  },
  interestDiv: {
    backgroundColor: "#fff",
    width: "335px",
    height: "256px",
    border: "2px solid #000000",
    borderRadius: "10px",
    marginTop: "10px",
    paddingTop: "17px",
    paddingLeft: "17px",
    paddingRight: "20px",
    "@media (max-width:350px)": {
      width: "auto",
    },
    "&:first-child": {
      display: "block !important",
      textAlign: "center",
    },
  },
  interestChildDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "@media (max-width:350px)": {
      justifyContent: "center !important",
    },
  },
  interests: {
    background: "#000",
    fontSize: "12px",
    borderRadius: "10px",
    width: "136px",
    color: "#fff",
    padding: "5px 10px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "7px",
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

function EditInfo() {
  const classes = useStyles();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    birthday: null,
    gender: "",
    orientation: "",
    relationStatus: "",
    country: "",
    province: "",
    city: "",
    religion: "",
    politics: "",
    bio: "",
  });
  const {
    firstName,
    lastName,
    birthday,
    gender,
    orientation,
    relationStatus,
    country,
    city,
    province,
    religion,
    politics,
    bio,
  } = state;

  const handleInputChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div onClick={onClick} className={classes.customInput}>
      <label ref={ref}>{value}</label>
      <Down />
    </div>
  ));

  const interests = [
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
    { name: "Interests Name", id: "###" },
  ];

  const gend = [
    {
      id: 1,
      name: "Male",
    },
    {
      id: 2,
      name: "Female",
    },
    {
      id: 3,
      name: "Other",
    },
  ];

  const relation = [
    {
      id: 1,
      name: "Married",
    },
    {
      id: 2,
      name: "Divorced",
    },
    {
      id: 3,
      name: "Single",
    },
  ];
  return (
    <Box sx={{ bgcolor: "#E5E5E5", minHeight: "100%" }}>
      <div className={classes.linkBack}>
        <HiOutlineArrowLeft />
        <Link>Edit Info</Link>
      </div>

      <Box component="form" className={classes.form}>
        <div className={classes.input}>
          <Input
            labelText="First Name:"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Last Name:"
            type="text"
            value={lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>

        <div className={classes.inputPadding}>
          <label>Birthday:</label>
          <DatePicker
            required
            selected={birthday}
            dateFormat="dd-MM-yyyy"
            customInput={<CustomInput />}
            onChange={(date) =>
              setState((state) => ({ ...state, birthday: date }))
            }
          />
        </div>

        <div className={classes.input}>
          <Select label="Gender" data={gend} />
        </div>

        <div className={classes.input}>
          <Select label="Oreintation" data={relation} />
        </div>

        <div className={classes.input}>
          <Select label="Relationship Status" />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Country:"
            type="text"
            value={country}
            onChange={(e) => handleInputChange("country", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="State/ Province:"
            type="text"
            value={province}
            onChange={(e) => handleInputChange("province", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="City:"
            type="text"
            value={city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Religion:"
            type="text"
            value={religion}
            onChange={(e) => handleInputChange("religion", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Politics:"
            type="text"
            value={politics}
            onChange={(e) => handleInputChange("politics", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <label style={{ display: "block", marginBottom: "12px" }}>Bio:</label>
          <TextareaAutosize
            aria-label="maximum height"
            style={{ width: 335, height: 256 }}
          />
        </div>

        <div>
          <Typography variant="h3" className={classes.selection}>
            Interests:
          </Typography>
          <div className={classes.interestDiv}>
            <div className={classes.interestChildDiv}>
              {interests.map((ele, index) => (
                <div className={classes.interests} key={index}>
                  <span>{ele.name}</span>
                  <span>{ele.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button className={classes.btn}>Update Info</Button>
      </Box>
    </Box>
  );
}

export default EditInfo;
