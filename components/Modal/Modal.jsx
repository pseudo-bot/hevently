import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { UserContext } from "../../context/Users";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import editIcon from "../../public/modal/edit.png"
import browseIcon from "../../public/modal/browsing.png"
import Image from 'next/image';

export default function Modal({
  showModal,
  setShowModal,
  title,
  href,
  setOpen,
}) {
  const router = useRouter();
  const user = useContext(UserContext);
  const browseHandler = () => {
    if (user) {
      setShowModal(false);
      router.push("/profile#events");
    } else {
      setShowModal(false);
      setOpen(true);
    }
  };
  const newHandler = () => {
    if (user) {
      setShowModal(false);
      router.push(href);
    } else {
      setShowModal(false);
      setOpen(true);
    }
  };
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
            <div className="px-16 flex flex-col gap-6 py-12">
              <SelectionOption
                onClick={()=>newHandler()}
                value="Create New Event"
                src={editIcon}
              />
              <SelectionOption
                onClick={()=>browseHandler()}
                value="Browse Previous Event"
                src={browseIcon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 h-screen w-screen z-40 bg-gray-800"></div>
    </div>
    </>
  );
}

const SelectionOption = ({ value, src, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="shadow-sm hover:shadow-md border rounded-xl cursor-pointer p-6 flex justify-between items-center text-lg text-gray-600 gap-6 transition-all duration-200 hover:border-blue-400"
    >
      <div>
        <Image src={src} width={56} height={56} alt="user icon" />
      </div>
      <div className="flex gap-4 items-center">{value}</div>
      <div>
        <ArrowRightAltIcon fontSize="large" />
      </div>
    </div>
  );
};