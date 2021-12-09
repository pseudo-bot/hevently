import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
export default function Modal({ showModal, setShowModal, title }) {
  return (
    <>
      <div
        className={` ${
          showModal ? "" : " pointer-events-none opacity-0 "
        } justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500 px-5`}
      >
        <div className="relative o myw-aut-6 mx-auto max-w-3xl bg-bgray-50 rounded-lg">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-center">
              <h3 className="uppercase font-semibold text-center text-xl tracking-wide z-10">
                {title}
              </h3>
              <button
                className="text-gray-900"
                onClick={() => setShowModal(false)}
              >
                <CancelIcon fontSize="large" />
              </button>
            </div>
            {/*footer*/}
            <div className="flex flex-col p-16 space-y-4">
              <button
                className="bg-blue-500 text-gray-50 hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Create New Event
              </button>
              <button
                className="bg-blue-500 text-gray-50 hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Browse Previous Event
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="opacity-40 fixed inset-0 z-40 bg-gray-800"></div>
      )}
    </>
  );
}
