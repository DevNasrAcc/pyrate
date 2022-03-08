import React from "react";

import { Box } from "@mui/material";

import Footer from "../../../components/footer";
import Header from "../../../components/header";
import MessageLinks from "../../../components/messageLinks";
import AllMessages from "./all";

const Messages = () => {
  return (
    <Box>
      <Header />

      <Box sx={{ position: "relative", top: "65px", bgcolor: "#E5E5E5" }}>
        <div style={{ backgroundColor: "#fff" }}>
          <MessageLinks />
        </div>

        <Box>
          <AllMessages />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Messages;
