import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

import LandingPage from "../../../components/landingPage";

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: "#3A3A3A",
  },
  mainSection: {
    backgroundColor: "#F5F5F5",
    borderRadius: "15px 15px 0px 0px",
    padding: "13px 34px 25px",
    "& h1": {
      fontFamily: "Amarante",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#000",
      fontWeight: "400",
      textAlign: "center",
      paddingBottom: "24px",
    },
    "& ol": {
      counterReset: "list",
      "& li": {
        listStyle: "none",
        position: "relative",
        fontSize: "16px",
        "&::before": {
          content: " counter(list) ') '",
          counterIncrement: "list",
          left: "-40px",
          paddingRight: "10px",
          position: "absolute",
          textAlign: "right",
          width: "40px",
        },
      },
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <LandingPage />
      <div className={classes.mainSection}>
        <Typography variant="h1">Getting the App:</Typography>
        <div>
          <ol>
            <li>
              <p style={{ paddingLeft: "5px" }}>
                You don’t need to download Pyrate. Instead, just click “add to
                homescreen.” The app icon will be instantly added to your
                homescreen, without consuming any of your data.
              </p>
            </li>
            <br />
            <li>
              <p style={{ paddingLeft: "5px" }}>
                You can also enable Web Push Notifications and it will work just
                like any other app would.
              </p>
            </li>
            <br />
            <li>
              <p style={{ paddingLeft: "5px" }}>
                The App and Play stores have certain rules which apps have to
                follow. But with this approach, we are free to add any features
                or content that we want, without any restrictions.
              </p>
              <br />
              <p>
                This approach was chosen because it provides the maximum
                freedom, to the maximum number of people, with minimum
                limitations.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
