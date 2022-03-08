import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

import Logo from "../../assets/images/pyrateHeaderLogo.png";
import Menu from "../../assets/images/menu.png";
import Backdrop from "../backdrop";
import SideDrawer from "../sideDrawer";

const useStyles = makeStyles(() => ({
  headerBox: {
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    position: "fixed",
    width: "100%",
    zIndex: "300",
    top: 0,
  },
}));

const Header = ({ search }) => {
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  const drawerToggle = () => {
    setToggle(!toggle);
  };

  let backdrop;

  if (toggle) {
    backdrop = <Backdrop drawerToggle={drawerToggle} />;
  }

  return (
    <>
      <SideDrawer show={toggle} drawerToggle={drawerToggle} />
      {backdrop}
      <Box
        className={classes.headerBox}
        style={{
          paddingTop: search ? "19px" : "5px",
          paddingBottom: search && "22px",
        }}
      >
        <div style={{ marginRight: "17px" }}>
          <img src={Menu} alt="" onClick={drawerToggle} />
        </div>
        {!search && (
          <div>
            <img src={Logo} alt="" />
          </div>
        )}
      </Box>
    </>
  );
};

export default Header;
