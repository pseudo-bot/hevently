import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { EventContext } from "../../context/EventContext";
import "animate.css";
import Alert from "../Misc/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";


const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
	  color: "blue",
	},
	"& .MuiInput-underline:after": {
	  borderBottomColor: "blue",
	},
	"& .MuiOutlinedInput-root": {
	  "& fieldset": {
		borderColor: "#444",
	  },
	  "&:hover fieldset": {
		borderColor: "#444",
	  },
	  "&.Mui-focused fieldset": {
		borderColor: "#0384fc",
	  },
	},
  });

export default function AlertDialog({ showModal, setShowModal, title }) {
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
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle className="poppins" id="alert-dialog-title">
            {"Enter Event Name"}
          </DialogTitle>
          <DialogContent>
            <CssTextField
              required
              id="outlined-required"
              value={value}
              onChange={handleChange}
              size="small"
              InputProps={{
                autoComplete: "off",
              }}
			  className="border-none outline-none"
            />
          </DialogContent>
          <DialogActions className="flex justify-end p-4">
            <Button
              className="bg-green-500 hover:bg-green-600 poppins capitalize"
              variant="contained"
              onClick={handleClick}
              autoFocus
            >
              Confirm
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
