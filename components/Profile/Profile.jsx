import { useContext, useState } from "react";
import { UserContext } from "../../context/Users";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import logOut from "../../lib/firebase/signOut";
import TextField from "@mui/material/TextField";

const Profile = () => {
  const user = useContext(UserContext);
  console.log(user);
  const { email, uid, displayName, photoURL } = user;
  const [sidenav, setSidenav] = useState(true);
  const handleClick = () => {
    setSidenav(!sidenav);
  };
  const signOut = () => {
    logOut();
  };
  return (
    <>
      <div className="relative min-h-screen lg:flex mt-16">
        <div className="text-gray-800 flex justify-end lg:hidden">
          <button className="p-4" onClick={handleClick}>
            <MenuIcon />
          </button>
        </div>
        <div
          className={`bg-gray-100 sidebar text-gray-50 w-64 absolute inset-y-0 left-0 transform ${
            sidenav ? "-translate-x-full" : ""
          }  transition duration-200 ease-in-out lg:relative lg:-translate-x-0 text-gray-600`}
        >
          <div className="py-4">
            <img
              src={photoURL}
              alt="..."
              className="rounded-full mx-auto w-16"
            />
            <p className="text-center py-2">{displayName}</p>
          </div>
          <nav>
            <a
              href="#"
              className="flex py-4 px-4 gap-2 items-center hover:bg-blue-500 hover:text-gray-50 transition-all duration-200"
            >
              <PersonIcon /> <span>Profile</span>
            </a>
            <a
              href="#"
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
        </div>
        <div className="flex-1">
          <div className="bg-gray-50 min-h-screen p-10">
            <div className="bg-gray-50  p-6 mb-8">
              <h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 pb-8">
                Profile
              </h3>
              <div className="md:flex  justify-around">
                <div className="flex flex-col space-y-6 text-gray-600 text-md md:text-lg tracking-wider">
                  <div className="flex gap-4 items-center">
                    <div>Email</div>
                    <TextField
                      id="filled-read-only-input"
                      defaultValue={email}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <p>
                    Phone : <span className="pl-4">7017145453</span>{" "}
                  </p>
                  <p>
                    Gender : <span className="pl-4">Male</span>{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-6 pt-6 md:pt-0 text-gray-600 text-md md:text-lg tracking-wider">
                  <p>
                    City : <span className="pl-4">Rishikesh</span>{" "}
                  </p>
                  <p>
                    State : <span className="pl-4">Uttarakhand</span>{" "}
                  </p>
                  <p>
                    DOB : <span className="pl-4">08/11/2001</span>{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-center pt-8 pb-2">
                <a
                  href="/"
                  class="text-gray-50 bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded-full transition-all duration-300 cursor-pointer tracking-wider text-lg"
                >
                  Edit Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
