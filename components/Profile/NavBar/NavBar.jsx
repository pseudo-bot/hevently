import React from "react";
import Link from "next/link";

const Navbar = ({ displayName, setOpen }) => {
  return (
    <>
      <div className="flex items-center">
        <div
          className="-left-6 relative"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Menubar />
        </div>
        <Link passHref href="/">
          <div className="text-[2.25rem] font-bold text-gray-100 tracking-wider dancing cursor-pointer logo">
            hevently
          </div>
        </Link>
      </div>
      <div className="text-gray-50 cursor-pointer">
        <Link passHref href="/">
          <span className="hover:underline">Home</span>
        </Link>{" "}
        / <span className="hover:underline">{displayName || "User"}</span>
      </div>
    </>
  );
};

export default Navbar;

const Line = () => {
  return (
    <div
      className={`
		h-0.5 w-3/5 bg-[#eee] rounded-full group-hover:bg-[#fff] transition-all duration-300`}
    ></div>
  );
};

const Menubar = ({ click }) => {
  return (
    <div
      className="md:hidden w-10 h-10  rounded-full flex flex-col items-center justify-evenly py-1.5 cursor-pointer group right-5"
      onClick={click}
    >
      <Line />
      <Line />
      <Line />
    </div>
  );
};
