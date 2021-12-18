import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import googleAuth from "../../lib/firebase/googleAuth";

export default function Modal({ showLogin, setShowLogin }) {
  const [passVis, setPassVis] = useState(false);
  const [visIcon, setVisIcon] = useState(true);
  const handleVisibilty = () => {
    setPassVis((prev) => !prev);
    setVisIcon((prev) => !prev);
  };
  return (
    <>
      <div
        className={` ${
          showLogin ? "" : " pointer-events-none opacity-0 "
        } justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500 px-5`}
      >
        <div className="relative o myw-aut-6 mx-auto max-w-3x bg-bgray-50 bg-gra rounded-lg">
          <div className="border-0 rounded-lg shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between pt-5 pb-4 rounded-t ">
              <h3 className=" capitalize font-semibold text-xl  tracking-wide z-10 mx-auto">
                Login
              </h3>
              <button
                className="text-gray-900 absolute right-6"
                onClick={() => setShowLogin(false)}
              >
                <CloseIcon fontSize="large" className="text-gray-700" />
              </button>
            </div>
            <hr className="border-t-2" />
            <div className="flex flex-col px-16 py-4 space-y-6">
              <div>
                <div class="relative mb-4">
                  <label
                    for="email"
                    class="leading-7 text-md font-semibold text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-50 rounded border-2 border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  />
                </div>
                <div class="relative mb-4">
                  <label
                    for="password"
                    class="leading-7 text-md font-semibold text-gray-600"
                  >
                    password
                  </label>
                  <div className="flex justify-between items-center w-full rounded border-2 border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <input
                      type={passVis ? "text" : "password"}
                      id="password"
                      name="password"
                      className=" outline-none border-none bg-bgray-50 "
                    />
                    <a
                      onClick={handleVisibilty}
                      className=" hover:cursor-pointer "
                    >
                      {" "}
                      {visIcon ? (
                        <VisibilityIcon className=" text-gray-600 " />
                      ) : (
                        <VisibilityOffIcon className=" text-gray-600 " />
                      )}
                    </a>
                  </div>
                </div>
                <button class=" w-full text-gray-50 bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                  Submit
                </button>
              </div>
              <hr className=" border-t-2" />
              <button
                className="bg-gray-50 active:bg-gray-100 text-gray-700 px-8 py-2 rounded outline-none focus:outline-none capitalize  shadow hover:shadow-md inline-flex items-center font-semibold text-md transition-all duration-500 "
                type="button"
                onClick={async () => {
                  await googleAuth();
                  setShowLogin(false);
                }}
              >
                <FcGoogle className=" text-3xl mr-2" />
                <p>sign in with Google</p>
              </button>
              <button
                className="bg-blue-600 active:bg-gray-100 text-gray-50 px-8 py-2 rounded outline-none focus:outline-none capitalize shadow hover:shadow-md inline-flex items-center font-semibold text-md transition-all duration-500  "
                type="button"
                onClick={() => setShowLogin(false)}
              >
                <AiFillFacebook className=" text-3xl text-gray-50 mr-2" />
                <p>sign in with facebook</p>
              </button>
            </div>
            <p className="text-center text-gray-600 text-xs mb-4">
              By siging in you agree to our{" "}
              <a href="" className="text-blue-600 underline">
                terms and conditions
              </a>
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
