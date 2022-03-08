import React, { useState } from "react";

import { Box } from "@mui/material";

import Footer from "../../../components/footer";
import Header from "../../../components/header";

import Updates from "./updates";
import FriendRequest from "./friendRequest";
import NotificationLink from "../../../components/notificationLinks";

const Notifications = () => {
  const [state, setState] = useState({
    updates: true,
    friendRequest: false,
  });

  const { updates, friendRequest } = state;

  return (
    <Box sx={{ backgroundColor: "#E5E5E5", height: "100%" }}>
      <Header />

      <div>
        <NotificationLink state={state} setState={setState} />
      </div>

      {updates ? (
        <Updates state={state} setState={setState} />
      ) : (
        <FriendRequest state={state} setState={setState} />
      )}

      <Footer />
    </Box>
  );
};

export default Notifications;
