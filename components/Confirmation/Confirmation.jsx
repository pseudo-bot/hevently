import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
const Confirmation = ({ showConfirm, setShowConfirm }) => {
  const { width, height } = useWindowSize();
  return (
    <>
      <div
        className={` ${
          showConfirm ? " flex " : "hidden"
        } justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  px-5 `}
      >
        <div className="relative o myw-aut-6 mx-auto max-w-3xl bg-bgray-50 rounded-lg">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex flex-col tick">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
                className="pt-6 pb-4"
              >
                <circle
                  className="path circle"
                  fill="none"
                  stroke="#73AF55"
                  stroke-width="6"
                  stroke-miterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <polyline
                  className="path check"
                  fill="none"
                  stroke="#73AF55"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  points="100.2,40.2 51.5,88.8 29.8,67.5 "
                />
              </svg>
              <div className="flex items-center justify-between  rounded-t text-center">
                <h3 className="uppercase font-semibold text-[18px] tracking-wide z-10 mx-auto">
                  Congratulations
                </h3>
              </div>
              <div className="text-center text-sm text-gray-700 px-6 py-4">
                <p>your Booking has been confirmed</p>
                <p>check your email for details</p>
              </div>
              <div className="text-center pt-4 pb-6">
                <a
                  href="/"
                  class="text-gray-50 bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded-full transition-all duration-300 cursor-pointer"
                >
                  Back To Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showConfirm && (
        <div className="opacity-40 fixed inset-0 z-40 bg-gray-600">
          <Confetti numberOfPieces={100} width={width} height={height} />
        </div>
      )}
    </>
  );
};

export default Confirmation;
