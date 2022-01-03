import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Image from 'next/image';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import logOut from "../../config/firebase/signOut";
import { useRouter } from "next/router";


const MyDrawer = ({photoURL,displayName}) => {
  const router = useRouter();
   
    const signOut = async () => {
        await logOut();
        router.push("/");
      };
    
    return (
        <>
        <div className="bg-gray-100 fixed w-[240px] h-screen"></div>
        <div className="relative z-50 h-full">
          <div className="py-8 ">
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
  
            <div className="fixed bottom-0 py-8 w-[240px] p-4 bg-bgray-100 ">
              <Button
                variant="contained"
                color="error"
                className="flex py-2 hover:cursor-pointer px-6  gap-2 items-center  transition-all duration-200 hover:bg-red-500 left-1/2 -translate-x-1/2  hover:text-[#fff] justify-center"
                onClick={signOut}
              >
                <LogoutIcon /> <span>Logout</span>
              </Button>
            </div>
          </nav>
        </div>
      </>
    )
}

export default MyDrawer
