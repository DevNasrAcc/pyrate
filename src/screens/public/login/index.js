import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";

import LandingPage from "../../../components/landingPage";
import Button from "../../../components/button";
import Input from "../../../components/inputWithLabel";

import { login } from "../../../redux/store/actions/authAction";

const useStyles = makeStyles(() => ({
  email: {
    paddingBottom: "20px",
  },
  password: {
    paddingBottom: "32px",
  },
  form: {
    backgroundColor: "#3A3A3A",
    "& form": {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "16px",
      backgroundColor: "#F5F5F5",
      borderRadius: "15px 15px 0px 0px",
    },
  },
  signinBtn: {
    "& button": {
      backgroundColor: "#000",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#3A3A3A",
      },
    },
  },
  link: {
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: "center",
  },
  signupBtn: {
    paddingBottom: "20px",
    "& button": {
      backgroundColor: "#fff",
      border: "2px solid #000",
      color: "#000",
    },
  },
}));
const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const handleInputChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.push("/activity-feed");
  };

  return (
    <div className={classes.form}>
      <LandingPage />
      <form onSubmit={(e) => onSubmit(e)}>
        <div className={classes.email}>
          <Input
            labelText="Email / Username:"
            type="text"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            // required
          />
        </div>
        <div className={classes.password}>
          <Input
            labelText="Password:"
            type="password"
            value={password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
          />
        </div>
        <div className={classes.signinBtn}>
          <Button type="submit" text="Sign In" />
        </div>
        <div className={classes.link}>
          <Link to="/">Forgot Password</Link>
        </div>
        <div className={classes.signupBtn}>
          <Button text="Sign Up" onClick={() => history.push("/register")} />
        </div>
      </form>
    </div>
  );
};

export default Login;
