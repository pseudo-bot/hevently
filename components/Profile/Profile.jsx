import * as React from "react";
import { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { ProfileContext } from "../../context/Profile";
import MyProfile from "./MyProfile/MyProfile";
import MyEvents from "./MyEvents/MyEvents";
import MyDrawer from "./MyDrawer";
import NavBar from "./NavBar/NavBar";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { displayName, photoURL } = props.userData;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className="h-screen w-screen fixed profile-bg opacity-30"></div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          displayName={displayName}
        />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <MyDrawer photoURL={photoURL} displayName={displayName} />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <MyDrawer photoURL={photoURL} displayName={displayName} />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <MyProfile props={props} />
          <Divider />
          <MyEvents eventsData={props.eventsData} />
        </Box>
      </Box>
    </>
  );
}

const Loading = () => {
  return (
    <div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
      <CircularProgress />
    </div>
  );
};

const Profile = ({ events }) => {
  const { profileData: user, setProfileData } = useContext(ProfileContext);
  console.log(events);

  if (!user) {
    return <Loading />;
  }
  return (
    <div>
      <ResponsiveDrawer
        setData={setProfileData}
        userData={user}
        eventsData={events}
      />
    </div>
  );
};

export default Profile;
