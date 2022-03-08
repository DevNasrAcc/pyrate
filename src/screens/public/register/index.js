import React, { forwardRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles, Typography, TextField } from "@material-ui/core";
import { Box } from "@mui/material";

// import Datepicker from "react-date-picker";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import { AiFillCaretDown } from "react-icons/ai";

import Button from "../../../components/button";
import Input from "../../../components/inputWithLabel";
import { ReactComponent as PhotoIcon } from "../../../assets/profileScreens/image.svg";

import { register } from "../../../redux/store/actions/authAction";

const useStyles = makeStyles(() => ({
  heading: {
    fontWeight: "400",
    fontSize: "36px",
    lineHeight: "45px",
    textAlign: "center",
    paddingTop: "180px",
  },
  profileSelector: {
    backgroundColor: "#F5F5F5",
    width: "167px",
    height: "167px",
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
  inputPadding: {
    paddingBottom: "16px",
    "& .react-datepicker-wrapper": {
      marginTop: "4px",
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
    // "& svg": {
    //   fontSize: "30px",
    // },
  },
  form: {
    "& form": {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "16px",
      borderRadius: "15px 15px 0px 0px",
    },
  },
  next: {
    paddingBottom: "26px",
    "& button": {
      backgroundColor: "#000",
      color: "#fff",
      textTransform: "inherit",
      "&:hover": {
        backgroundColor: "#3A3A3A",
      },
    },
  },
  link: {
    paddingBottom: "40px",
    textAlign: "center",
  },
  customInput: {
    border: "2px solid #000",
    padding: "12px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& svg": {
      position: "relative",
      top: "-5px",
      fontSize: "30px",
    },
  },
}));
const Register = () => {
  const classes = useStyles();

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    birthday: null,
    email: "",
    password: "",
    confirm_password: "",
  });
  const { user_name, first_name, last_name, birthday, email, password, confirm_password } =
    state;

  const handleInputChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const onRegistrationHandler = (e) => {
    e.preventDefault();
    dispatch(register(user_name, email, password, confirm_password));
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={classes.customInput}>
      <label onClick={onClick} ref={ref}>
        {value}
      </label>
      <FontAwesomeIcon icon={faSortDown} onClick={onClick} style={{}} />
    </div>
  ));

  return (
    <Box>
      <div className={classes.form}>
        <Typography variant="h1" className={classes.heading}>
          Sign Up Details:
        </Typography>
        <form onSubmit={(e) => onRegistrationHandler(e)}>
          <div className={classes.profileSelector}>
            <div style={{ textAlign: "center" }}>
              <PhotoIcon />
              <Typography variant="h6">Profile Photo</Typography>
            </div>
          </div>

          <div className={classes.inputPadding}>
            <Input
                labelText="User Name:"
                type="text"
                value={user_name}
                onChange={(e) => handleInputChange("user_name", e.target.value)}
            />
          </div>

          <div className={classes.inputPadding}>
            <Input
              labelText="First Name:"
              type="text"
              value={first_name}
              onChange={(e) => handleInputChange("first_name", e.target.value)}
            />
          </div>

          <div className={classes.inputPadding}>
            <Input
              labelText="Last Name:"
              type="text"
              value={last_name}
              onChange={(e) => handleInputChange("last_name", e.target.value)}
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

          <div className={classes.inputPadding}>
            <Input
              labelText="Email:"
              type="email"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>

          <div className={classes.inputPadding}>
            <Input
              labelText="Password:"
              type="password"
              value={password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </div>

          <div style={{ paddingBottom: "36px" }}>
            <Input
              labelText="Confirm Password:"
              type="password"
              value={confirm_password}
              onChange={(e) =>
                handleInputChange("confirm_password", e.target.value)
              }
            />
          </div>

          <div className={classes.next}>
            <Button text="Next" type="submit" />
            {/*<Button text="Next" onClick={() => history.push("/interests")} />*/}
          </div>

          <div className={classes.link}>
            <Link to="/">Already have an account? Sign In</Link>
          </div>
        </form>

        {message && (
          <div className="form-group">
              {message}
          </div>
        )}
      </div>
    </Box>
  );
};

export default Register;
