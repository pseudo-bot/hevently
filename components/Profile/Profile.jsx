import * as React from "react";
import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import logOut from "../../lib/firebase/signOut";
import BreadCrumbs from "./BreadCrumbs";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import DOB from "./DOB";
import Button from "@mui/material/Button";
import Gender from "./Gender";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HouseIcon from "@mui/icons-material/House";
import { useRouter } from "next/router";
import Image from "next/image";
import EventCard from "./EventCard";
import { ProfileContext } from "../../context/Profile";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import updateUser from "../../lib/updateUser.js";
import { LoadingButton } from '@mui/lab'

const drawerWidth = 240;

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "blue",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#444",
    },
    "&:hover fieldset": {
      borderColor: "#444",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0384fc",
    },
  },
});
const UserData = ({ icon, title, edit, handleChange,value }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-800 font-semibold tracking-wider  ">
        {" "}
        <span className="mr-1">{icon}</span> {title}
      </div>
      <CssTextField
        id="outlined-basic"
        value={value}
        InputProps={{
          readOnly: edit ? false : true,
          autoComplete: "off",
        }}
        variant="outlined"
        className="w-72 bg-bgray-50"
        onChange={(e) => handleChange(e.target.value)}
        focused={edit}
        size="small"
        type="email"
      />
    </div>
  );
};

function ResponsiveDrawer(props) {
  const router = useRouter();
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    uid,
    city,
    dob,
    gender,
    state,
    phoneNumber,
    email,
    displayName,
    photoURL,
  } = props.userData;
  const [userCity, setUserCity] = useState(city);
  const [userDob, setUserDob] = useState(new Date());
  const [userGender, setUserGender] = useState(gender);
  const [userState, setUserState] = useState(state);
  const [userPhoneNumber, setUserPhoneNumber] = useState(phoneNumber);

  const onEdit = () => {
    setDisabledBtn(!disabledBtn);
    setEdit(!edit);
  };

  const onSave = async () => {
    setLoading(true)
    const ob = {
      uid,
      city: userCity,
      dob: userDob,
      gender: userGender,
      state: userState,
      phoneNumber: userPhoneNumber,
      email,
      displayName,
      photoURL,
    };
    props.setData(ob);
    setDisabledBtn(!disabledBtn);
    setEdit(!edit);

    const res = await updateUser(ob);
    if (res) {
      console.log('User updated succefully');
    } else {
      console.log('User not updated');
    }
    setLoading(false)
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const signOut = async () => {
    await logOut();
    router.push("/");
  };

  const drawer = (
    <div className="bg-gray-100 h-full">
      <div className="py-8">
        <div className="w-full flex justify-center">
          <Image
            src={photoURL || "/profile/user.png"}
            alt="Profile picture"
            className="rounded-full"
            width={64}
            height={64}
          />
        </div>
        <p className="text-center py-2">{displayName}</p>
      </div>
      <Divider variant="middle" />
      <nav>
        <a
          href="#"
          className="flex py-4 px-4 gap-2 items-center hover:bg-[#fff] hover:text-blue-700 transition-all duration-200 m-2 rounded-full hover:shadow-sm"
        >
          <PersonIcon /> <span>Profile</span>
        </a>

        <a
          href="#events"
          className="flex py-4 px-4 gap-2 items-center hover:bg-[#fff] hover:text-blue-700 transition-all duration-200 m-2 rounded-full hover:shadow-sm"
        >
          <EventIcon /> <span>My Events</span>
        </a>
        <a
          href="#upcoming"
          className="flex py-4 px-4 gap-2 items-center hover:bg-[#fff] hover:text-blue-700 transition-all duration-200 m-2 rounded-full hover:shadow-sm"
        >
          <EventAvailableIcon /> <span>Upcoming Events</span>
        </a>
        <a
          href="#completed"
          className="flex py-4 px-4 gap-2 items-center hover:bg-[#fff] hover:text-blue-700 transition-all duration-200 m-2 rounded-full hover:shadow-sm"
        >
          <EventBusyIcon /> <span>Completed Events</span>
        </a>

        <Button
        variant="contained"
          color="error"
          className="flex py-3 absolute bottom-4 hover:cursor-pointer px-6  gap-2 items-center  transition-all duration-200 hover:bg-red-500 left-1/2 -translate-x-1/2 rounded-full hover:text-[#fff] justify-center hover:shadow-md"
          onClick={signOut}
        >
          <LogoutIcon /> <span>Logout</span>
        </Button>
      </nav>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className="h-screen w-screen fixed profile-bg opacity-30"></div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          className="bg-blue-500 shadow-none"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <div className="flex items-center justify-between w-full">
              <div className="text-[2.25rem] font-bold text-gray-200 tracking-wider dancing cursor-pointer">
                hevently
              </div>
              <BreadCrumbs name={displayName} />
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
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
            {drawer}
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
          <div className="">
            <div className=" min-h-screen ">
              <div className="  p-6 mb-8">
                <h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 pb-12">
                  Profile
                </h3>
                <div>
                  <div className="flex justify-center gap-12 md:gap-20 flex-wrap">
                    <div className="flex flex-col space-y-6 text-gray-600 text-md md:text-lg tracking-wider w-[26rem]">
                      <UserData
                        icon={<EmailIcon />}
                        value={email}
                        title="Email"
                        edit={false}
                      />
                      <UserData
                        icon={<CallIcon />}
                        title="Mobile"
                        edit={edit}
                        handleChange={setUserPhoneNumber}
                        value={userPhoneNumber}
                      />
                      <Gender value={userGender} handleChange={setUserGender} edit={edit} />
                    </div>
                    <div className="flex flex-col space-y-6 text-gray-600 text-md md:text-lg tracking-wider w-[26rem] ">
                      <UserData
                        icon={<HouseIcon />}
                        title="City"
                        edit={edit}
                        handleChange={setUserCity}
                        value={userCity}
                      />
                      <UserData
                        icon={<LocationCityIcon />}
                        title="State"
                        edit={edit}
                        handleChange={setUserState}
                        value={userState}
                      />
                      <DOB value={userDob} handleChange={setUserDob} edit={edit} />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 pt-12 pb-4">
                    <Button
                      className="bg-blue-500 hover:bg-blue-700 capitalize text-md poppins"
                      variant="contained"
                      size="small"
                      onClick={onEdit}
                      disabled={disabledBtn ? false : true}
                    >
                      Edit
                    </Button>
                    <LoadingButton
                      onClick={onSave}
                      loading={loading}
                      variant="contained"
                      className="poppins capitalize text-md bg-blue-500 hover:bg-blue-700"
                      size="small"
                      disabled={disabledBtn ? true : false}
                    >
                      Save
                    </LoadingButton>
                  </div>
                </div>
              </div>
              <Divider />
              <h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 py-6">
                My Events
              </h3>
              <EventCard
                title="Upcoming Events"
                id="upcoming"
                eventsData={props.eventsData}
              />
              <EventCard
                title="Completed Events"
                id="completed"
                eventsData={props.eventsData}
              />
            </div>
          </div>
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
