import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { EventContext } from "../../context/EventContext";
import "animate.css";
import Alert from "../Misc/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ showModal, setShowModal }) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const { setEventName } = useContext(EventContext);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length <= 2) {
      setOpen(true);
    } else {
      setEventName(value);
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="opacity-40 fixed inset-0 z-40 bg-gray-800"></div>
      )}
      <div>
        <Dialog
          open={showModal}
          sx={
			  {
				  zIndex: 40,
			  }
		  }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle className="poppins text-center" id="alert-dialog-title">
            {"Enter Event Name"}
          </DialogTitle>
          <DialogContent>
            <div className="">
              <div className="pt-2 pb-4 text-gray-600 text-sm italic font-medium">A name can give the vibe of your whole shindig</div>
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
          </DialogContent>
          <DialogActions className="flex justify-center pt-2 pb-4">
            <Button
              onClick={handleClick}
              className="border-none outline-none hover:bg-[#fff]"
            >
              <div className=" bg-green-500 text-[#fff] px-4 py-2 rounded  hover:bg-green-600 poppins capitalize transition-all duration-300">Confirm</div>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Alert
        open={open}
        severity={"warning"}
        setOpen={setOpen}
        msg={"Please enter atleast 3 characters"}
      />
    </>
  );
}
