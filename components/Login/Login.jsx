import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
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
            <div className="flex items-center justify-between p-5  rounded-t text-center">
              <h3 className=" capitalize font-semibold text-[18px] tracking-wide z-10 mx-auto">
                Login
              </h3>
              <button
                className="text-gray-900 absolute right-6"
                onClick={() => setShowLogin(false)}
              >
                <CancelIcon fontSize="medium" />
              </button>
            </div>
            <div className="flex flex-col px-16 py-10 space-y-6">
              <button
                className="bg-gray-50 active:bg-gray-100 text-gray-800 px-8 py-2 rounded outline-none focus:outline-none capitalize  shadow hover:shadow-lg inline-flex items-center font-semibold text-md transition-all duration-500 "
                type="button"
                onClick={() => setShowLogin(false)}
              >
                <FcGoogle className=" text-3xl mr-2" />
                <p className="hidden sm:flex">sign in with Google</p>
                <p className="inline sm:hidden">google</p>
              </button>
              <button
                className="bg-gray-50 active:bg-gray-100 text-gray-800 px-8 py-2 rounded outline-none focus:outline-none capitalize  shadow hover:shadow-lg inline-flex items-center font-semibold text-md transition-all duration-500  "
                type="button"
                onClick={() => setShowLogin(false)}
              >
                <AiFillFacebook className=" text-3xl text-blue-800 mr-2" />
                <p className="hidden sm:inline">sign in with facebook</p>
                <p className="inline sm:hidden">facebook</p>
              </button>
            </div>
            <p className="text-center text-gray-600 text-sm mb-4 -mt-4">
              <a href="" className="text-blue-600 underline">
                click here
              </a>{" "}
              to read terms and conditions
            </p>
          </div>
        </div>
      </div>
      {showLogin && (
        <div className="opacity-40 fixed inset-0 z-40 bg-gray-800"></div>
      )}
    </>
  );
}
