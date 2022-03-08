import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@mui/material";

import Input from "../../../components/inputWithLabel";
import { ReactComponent as Close } from "../../../assets/images/modalIcons/close.svg";

const useStyles = makeStyles(() => ({
  form: {
    padding: "25px 20px 38px 20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    "& h2": {
      fontSize: "24px !important",
      lineHeight: "30px !important",
      color: "#000",
      fontFamily: "Amarante !important",
    },
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

function ContactInfo() {
  const classes = useStyles();

  const [state, setState] = useState({
    email: "",
    facebook: "",
    instagram: "",
    twitter: "",
    telegram: "",
    other: "",
  });
  const { email, facebook, instagram, telegram, twitter, other } = state;

  const handleInputChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  return (
    <Box sx={{ bgcolor: "#F5F5F5", minHeight: "100%", borderRadius: 10 }}>
      <Box component="form" className={classes.form}>
        <div className={classes.header}>
          <Typography variant="h2">Contact Info:</Typography>
          <div>
            <Close />
          </div>
        </div>
        <div className={classes.input}>
          <Input
            labelText="E-mail:"
            type="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Facebook:"
            type="text"
            value={facebook}
            onChange={(e) => handleInputChange("facebook", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Instagram:"
            type="text"
            value={instagram}
            onChange={(e) => handleInputChange("instagram", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Twitter:"
            type="text"
            value={twitter}
            onChange={(e) => handleInputChange("twitter", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Telegram:"
            type="text"
            value={telegram}
            onChange={(e) => handleInputChange("telegram", e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <Input
            labelText="Other:"
            type="text"
            value={other}
            onChange={(e) => handleInputChange("other", e.target.value)}
          />
        </div>

        <Button className={classes.btn}>Update Info</Button>
      </Box>
    </Box>
  );
}

export default ContactInfo;
