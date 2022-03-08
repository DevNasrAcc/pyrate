import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

import Setting from "../../../components/settingLinks";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import General from "./general";
import Privacy from "./privacy";

const useStyles = makeStyles(() => ({}));

const Settings = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    general: true,
    privacy: false,
  });
  const { general, privacy } = state;
  return (
    <Box>
      <Header />

      <div>
        <Setting state={state} setState={setState} />
      </div>

      {general ? <General /> : privacy ? <Privacy /> : null}

      <Footer />
    </Box>
  );
};

export default Settings;
