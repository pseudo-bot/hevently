import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import VenueTypeDropdown from "./VenueTypeDropdown";

const DualInput = ({ label, phStart, phEnd }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="leading-7 capitalize text-sm text-gray-600"
      >
        {label}
      </label>
      <div className="flex gap-4">
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder={phStart}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder={phEnd}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

const SingleInput = ({ label }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="leading-7 capitalize text-sm text-gray-600"
      >
        {label}
      </label>
      <div>
        <input
          type="email"
          id="email"
          autoComplete="off"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default function AlertDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {

  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="h-screen"
      >
        <div className="px-4 pt-4 font-medium text-2xl" id="alert-dialog-title">
          {"Register Venue"}
        </div>
        <div className="px-4 py-2">
          <VenueTypeDropdown />
          <SingleInput label="venue name" />
          <SingleInput label="address" />
          <SingleInput label="city" />
          <DualInput phStart={"Min"} phEnd={"Max"} label="capacity" />
          <SingleInput label="image url" />
          <DualInput
            phStart={"veg"}
            phEnd={"non-veg"}
            label="price per plate"
          />
        </div>
        <div className="flex justify-end gap-3 p-4">
          <Button onClick={handleClose}>
            <div className=" capitalize text-gray-500">Cancel</div>
          </Button>
          <Button variant="contained" onClick={handleConfirm}>
            <div className="capitalize text-gray-50">Confirm</div>
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
