import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Person, MailOutline } from "@mui/icons-material";

export default function Modal({ showModal, setShowModal, title, guests }) {
  return (
    <>
      <div className="fixed h-screen w-screen inset-0 flex justify-center items-center z-50">
        <div
          className={`justify-center items-center flex overflow-x-hidden z-50 outline-none focus:outline-none px-4 h-screen w-screen inset-0`}
        >
          <div className="relative mx-auto bg-bgray-50 rounded-lg">
            <div className="border-0 rounded-lg shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between pt-3 pb-3 rounded-t ">
                <h3 className=" capitalize font-semibold text-lg text-gray-900 tracking-wide z-10 mx-auto">
                  {title}
                </h3>
                <button
                  className="text-gray-900 absolute right-6"
                  onClick={() => setShowModal(false)}
                >
                  <CloseIcon fontSize="medium" className="text-gray-700" />
                </button>
              </div>
              <hr className="border-t" />
              <div className="">
                <div className="px-4 py-6">
                  <div className="flex flex-wrap max-w-3xl gap-4 justify-center px-8 ">
                    {guests.map((row, index) => (
                      <div
                        key={index + 1}
                        className="cursor-pointer py-4 px-6 border border-gray-300 shadow-sm rounded-xl hover:border-blue-500"
                      >
                        <div className=" flex justify-center gap-2 items-center py-2">
                          <Person color="primary" />
                          <span>{row.guest}</span>
                        </div>
                        <div className="flex justify-center gap-2 items-center py-2">
                          <MailOutline color="error" />
                          <span>{row.email}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-40 fixed inset-0 h-screen w-screen z-40 bg-gray-800"></div>
      </div>
    </>
  );
}
