import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Users";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import logOut from "../../lib/firebase/signOut";
import Divider from '@mui/material/Divider';
import BreadCrumbs from './BreadCrumbs'


export default function SwipeableTemporaryDrawer() {
  const user = useContext(UserContext);
  console.log(user);
  const { email, uid, displayName, photoURL } = user;
  const [state, setState] = React.useState({
    left: false,
  });
  const signOut = () => {
    logOut();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
       <div className="py-4">
            <img
              src={photoURL}
              alt="..."
              className="rounded-full mx-auto w-16"
            />
            <p className="text-center py-2">{displayName}</p>
          </div>
          <Divider/>
          <nav>
            <a
              href="#"
              className="flex py-4 px-4 gap-2 items-center hover:bg-blue-500 hover:text-gray-50 transition-all duration-200"
            >
              <PersonIcon /> <span>Profile</span>
            </a>
            <a
              href="#events"
              className="flex py-4 px-4 gap-2 items-center hover:bg-blue-500 hover:text-gray-50 transition-all duration-200"
            >
              <EventIcon /> <span>My Events</span>
            </a>
            <a
              href="/"
              className="flex py-4 px-4 gap-2 items-center hover:bg-blue-500 hover:text-gray-50 transition-all duration-200"
              onClick={signOut}
            >
              <LogoutIcon /> <span>Logout</span>
            </a>
          </nav>
    </Box>
  );

  return (
    <div className="mt-16 py-6 px-12 items-center flex justify-between bg-gray-100">
      <React.Fragment key={"left"}>
        <Button
          onClick={toggleDrawer("left", true)}
          className=" bg-gray-200 text-gray-600 rounded-full hover:bg-blue-500 hover:text-gray-50"
        >
          <ChevronRightIcon fontSize="large" />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
      <BreadCrumbs/>

    </div>
  );
}
