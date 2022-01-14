import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { EventContext } from "../../context/EventContext";
import "animate.css";
import Alert from "../Misc/Alert";
import Dialog from "@mui/material/Dialog";
import Link from "next/link";
import Image from "next/image";
import eventName from "../../public/modal/eventname.png";

export default function AlertDialog({ showModal, setShowModal }) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const { setEventName } = useContext(EventContext);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length < 3 || value.length > 20) {
      setOpen(true);
    } else {
      setEventName(value);
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="opacity-20 fixed inset-0 z-50 bg-gray-900"></div>
      )}
      <div>
        <Dialog
          open={showModal}
          sx={{
            zIndex: 50,
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="poppins text-center text-xl pt-4 font-medium">
            Name Your Event
          </div>
          <div className="flex justify-center pt-8 pb-4">
            <Image
              src={eventName}
              height={108}
              width={108}
              alt="event name png"
            />
          </div>
          <div className="flex flex-col gap-2 px-10 pb-4">
            <div className="text-gray-600 pt-4 text-sm italic font-medium">
              A name can give the vibe of your whole celebration
            </div>
            <div>
              <div className="">
                <input
                  type="text"
                  name="text"
                  required
                  value={value}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-2 pb-4 px-6 gap-4">
            <Link href="/" passHref>
              <Button size="normal" variant="outlined">
                <div className="capitalize">Home</div>
              </Button>
            </Link>
            <Button
              onClick={handleClick}
              variant="contained"
              size="normal"
            >
              <div className="capitalize">Confirm</div>
            </Button>
          </div>
        </Dialog>
      </div>
      <Alert
        open={open}
        severity={"warning"}
        setOpen={setOpen}
        msg={"Event name must be between 3-20 characters"}
      />
    </>
  );
}
