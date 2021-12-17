import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
export default function Modal({ showLogin, setShowLogin }) {
  return (
    <>
      <div
        className={` ${
          showLogin ? "" : " pointer-events-none opacity-0 "
        } justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500 px-5`}
      >
        <div className="relative o myw-aut-6 mx-auto max-w-3xl bg-bgray-50 rounded-lg">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between px-5 py-6  rounded-t text-center bg-gradient-to-r from-blue-500 to-indigo-500">
              <h3 className=" uppercase font-semibold text-xl text-gray-50  tracking-wider z-10 mx-auto">
                Login
              </h3>
              <button
                className="text-gray-900 absolute right-6"
                onClick={() => setShowLogin(false)}
              >
                <CloseIcon fontSize="large" className="text-gray-50" />
              </button>
            </div>
            <div className="flex flex-col px-16 py-10 space-y-6">
              <button
                className="bg-gray-50 active:bg-gray-100 text-gray-700 px-8 py-2 rounded outline-none focus:outline-none capitalize shadow hover:shadow-lg inline-flex items-center font-semibold text-md transition-all duration-500 "
                type="button"
                onClick={() => setShowLogin(false)}
              >
                <FcGoogle className=" text-3xl mr-2" />
                <p className="hidden sm:flex">sign in with Google</p>
                <p className="inline sm:hidden">google</p>
              </button>
              <button
                className="text-gray-50 active:bg-blue-900 bg-blue-800 px-8 py-2 rounded outline-none focus:outline-none capitalize shadow hover:shadow-lg inline-flex items-center font-semibold text-md transition-all duration-500  "
                type="button"
                onClick={() => setShowLogin(false)}
              >
                <AiFillFacebook className=" text-3xl text-gray-50 mr-2" />
                <p className="hidden sm:inline">sign in with facebook</p>
                <p className="inline sm:hidden">facebook</p>
              </button>
            </div>
            <div
              className={`rounded m-4 p-4 text-[12px] text-gray-600 dark:text-gray-300`}
            >
              By signing in, you accept our{" "}
              <span className="dark:text-blue-400 text-blue-700 cursor-pointer">
                Terms of Services
              </span>{" "}
              &{" "}
              <span className="dark:text-blue-400 text-blue-700 cursor-pointer">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
      {showLogin && (
        <div className="opacity-40 fixed inset-0 z-40 bg-gray-800"></div>
      )}
    </>
  );
}
