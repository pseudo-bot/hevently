import React, { useState } from "react";
import {
  Person,
  Event,
  Logout,
  HowToReg,
  PendingActions
} from "@mui/icons-material/";
import Image from "next/image";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import logOut from "../../config/firebase/signOut";
import { useRouter } from "next/router";
import Link from 'next/link'

const SidebarOption = ({
  title,
  icon,
  divider = true,
  register = false,
  setRegister,
  bookmark = "",
}) => {
  const router = useRouter();
  return (
    <>
      <Link href={`#${bookmark}`} passHref>
        <div
          onClick={() => {
            setRegister(register);
          }}
          className="cursor-pointer flex py-2 px-4 gap-2 items-center  hover:text-blue-700 transition-all duration-200 m-2"
        >
          {icon} <span>{title}</span>
        </div>
      </Link>
      <div className="w-4/5 mx-auto">
        {divider && <Divider variant="middle" />}
      </div>
    </>
  );
};

const SidebarHeading = ({ title }) => {
  return (
    <div className="py-6">
      <Divider variant="middle">
        <div className="text-gray-500 capitalize">{title}</div>
      </Divider>
    </div>
  );
};

const MyDrawer = ({ photoURL, displayName, register, setRegister }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const router = useRouter();

  const signOut = async () => {
    await logOut();
    router.push("/");
  };

  return (
    <>
      <div className="bg-[#fff] shadow-lg border-r fixed w-[240px] h-screen"></div>
      <div className="relative z-50 h-full">
        <div className="pt-8 pb-4">
          <div className="w-full flex justify-center">
            <Image
              src={photoURL || "/profile/user.png"}
              alt="Profile picture"
              className="rounded-full"
              width={64}
              height={64}
            />
          </div>
          <div className="text-center py-2 capitalize">
            {displayName === "" ? "User" : displayName}
          </div>
        </div>
        <nav>
          <SidebarHeading title="profile" />

          <SidebarOption
            setRegister={setRegister}
            title="Profile"
            icon={<Person />}
          />
          <SidebarOption
            setRegister={setRegister}
            title="Events"
            icon={<Event />}
            bookmark="events"
          />
          <SidebarOption
            setRegister={setRegister}
            title="Approval"
            icon={<PendingActions />}
            divider={false}
            bookmark="requests"
          />

          <SidebarHeading title="registration" />

          <SidebarOption
            setRegister={setRegister}
            register={true}
            title="Register"
            icon={<HowToReg />} 
          />
          <SidebarOption
            setRegister={setRegister}
            register={true}
            title="Registrations"
            icon={<Event />}
            bookmark="registrations"
          />
          <SidebarOption
            setRegister={setRegister}
            register={true}
            title="Requests"
            icon={<PendingActions />}
            divider={false}
            bookmark="requests"
          />

          <div className="fixed bottom-0 py-8 w-[240px] p-4 bg-[#fff] ">
            <Button
              variant="contained"
              color="error"
              className="flex py-2 hover:cursor-pointer px-6  gap-2 items-center  transition-all duration-200 hover:bg-red-500 left-1/2 -translate-x-1/2  hover:text-[#fff] justify-center"
              onClick={signOut}
            >
              <Logout /> <span>Logout</span>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MyDrawer;
