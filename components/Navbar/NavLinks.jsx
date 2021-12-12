import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import Image from "next/image";
import Login from "../Login/Login";

const NavItem = ({ children, services = 0, href = "" }) => {
  return (
    <Link href={href} scroll={false}>
      <div
        className={`p-3 lg:p-0 lg:py-2 border lg:border-none w-full text-gray-500 uppercase tracking-wider lg:text-gray-200 lg:text-center transition-all duration-150 hover:text-[blue] ${
          services ? "h-[3rem] flex items-center gap-4 lg:text-gray-600" : ""
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default function NavLinks({ hidden }) {
  const [services, setServices] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const openLogin = () => {
    setShowLogin((prev) => !prev);
  };
  return (
    <>
      <div
        className={`${
          hidden
            ? "opacity-0 lg:pointer-events-auto pointer-events-none lg:opacity-100"
            : ""
        } transition-all duration-300 absolute cursor-pointer bg-gray-50 top-16 right-0 shadow-lg flex flex-col w-56 items-center lg:relative lg:flex-row lg:w-[40rem] lg:gap-3 lg:top-0 lg:bg-transparent font-medium lg:shadow-none nav-links`}
      >
        <NavItem href="/">Home</NavItem>

        <NavItem href="/about">About</NavItem>
        <div
          onClick={() => setServices(!services)}
          className="w-full relative services-div"
        >
          <NavItem>Services</NavItem>
          <div className="absolute top-3 right-4 lg:hidden ">
            {services ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
          <div
            className={`${
              services ? "h-[12rem]" : "h-0"
            } lg:fixed lg:top-16 lg:w-56 lg:pl-4 overflow-hidden transition-all duration-500 w-full bg-gray-100 font-normal services text-sm`}
          >
            <NavItem services={1} href="/wedding/create">
              <Image height={20} width={20} src="/icons/wedding.png" />
              Weddings
            </NavItem>
            <NavItem services={1}>
              <Image height={20} width={20} src="/icons/gathering.png" />
              Social Gathering
            </NavItem>
            <NavItem services={1}>
              <Image height={20} width={20} src="/icons/cake.png" />
              Birthdays
            </NavItem>
            <NavItem services={1}>
              <Image height={20} width={20} src="/icons/corporate.png" />
              Corporate Events
            </NavItem>
          </div>
        </div>

        <NavItem>Contact</NavItem>
        <NavItem>
          <a onClick={openLogin}>Login</a>
        </NavItem>
      </div>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
    </>
  );
}
