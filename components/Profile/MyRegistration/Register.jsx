import { LoadingButton } from "@mui/lab";
import VenueTypeDropdown from "./VenueTypeDropdown";
import { useState } from "react";
import addVenue from "../../../config/api/venueAPI";
import { addUserVenue } from "../../../config/api/userVenueAPI";
import Alert from "../../Misc/Alert";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import { mutate } from "swr";
import { UserContext } from "../../../context/Users";
import { useContext } from "react";
import Divider from "@mui/material/Divider";
import {
  validateName,
  validateNumber,
  validatePhone,
} from "../../../utils/validation";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(212, 212, 216)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(212, 212, 216)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(99, 102, 241)",
    },
  },
});

const DualInput = ({ label, phStart, phEnd, value, setValue }) => {
  return (
    <div>
      <label className="leading-7 capitalize text-sm text-gray-600">
        {label}
      </label>
      <div className="flex gap-4">
        <CssTextField
          type="text"
          autoComplete="off"
          required
          fullWidth
          size="small"
          placeholder={phStart}
          value={value.start}
          onChange={(e) => {
            setValue({
              start: e.target.value,
              end: value.end,
            });
          }}
        />
        <CssTextField
          type="text"
          autoComplete="off"
          required
          size="small"
          fullWidth
          placeholder={phEnd}
          value={value.end}
          onChange={(e) => {
            setValue({
              start: value.start,
              end: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

const SingleInput = ({ label, value, setValue }) => {
  return (
    <div>
      <label className="leading-7 capitalize text-sm text-gray-600">
        {label}
      </label>
      <div>
        <CssTextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          size="small"
          fullWidth
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default function Register() {
  let res = null;
  let res2 = null;
  const [openAlert, setOpenAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const [venueType, setVenueType] = useState("");
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");

  const [venueCity, setVenueCity] = useState("");
  const [venueMobile, setVenueMobile] = useState("");
  const [capacity, setCapacity] = useState({
    start: "",
    end: "",
  });
  const [venueImage, setVenueImage] = useState("");
  const [venuePrice, setVenuePrice] = useState({
    start: "",
    end: "",
  });

  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);

  const handleConfirm = async () => {
    setLoading(true);

    const venue = {
      value: venueName,
      address: venueAddress,
      city: venueCity,
      capacity: `${Math.min(capacity.start, capacity.end)}-${Math.max(
        capacity.start,
        capacity.end
      )}`,
      display: "https://via.placeholder.com/300x200",
      veg: venuePrice.start,
      nonveg: venuePrice.end,
    };
    if (!validateName(venueName)) {
      setSuccess(false);
      setMsg("Please enter a valid venue name");
      setOpenAlert(true);
      setLoading(false);
    } else if (!validateName(venueCity)) {
      setSuccess(false);
      setMsg("Please enter a valid venue city");
      setOpenAlert(true);
      setLoading(false);
    } else if (!validatePhone(venueMobile)) {
      setSuccess(false);
      setMsg("Please enter a valid mobile number");
      setOpenAlert(true);
      setLoading(false);
    } else if (!validateNumber(capacity.start) && !validateNumber(capacity.end)) {
      setSuccess(false);
      setMsg("Please enter a valid capacity");
      setOpenAlert(true);
      setLoading(false);
    } else if (
      !validateNumber(venuePrice.start) &&
      !validateNumber(venuePrice.end)
    ) {
      setSuccess(false);
      setMsg("Please enter a valid price");
      setOpenAlert(true);
      setLoading(false);
    } else {
      const id = uuidv4();
      res = await addVenue(venue, venueType.toLowerCase(), id, user.uid);
      res2 = await addUserVenue(venue, venueType.toLowerCase(), id);
      mutate(`/api/user/${user.uid}/uservenue`);

      setLoading(false);
    }

    if (res && res2) {
      setSuccess(true);
      setOpenAlert(true);

      setVenueName("");
      setVenueAddress("");
      setVenueCity("");
      setVenueMobile("");
      setCapacity({
        start: "",
        end: "",
      });
      setVenueImage("");
      setVenuePrice({
        start: "",
        end: "",
      });
      setVenueType("");
    } else {
      setSuccess(false);
      setMsg("Something went wrong");
      setOpenAlert(true);
    }
  };

  return (
    <>
      <div className="px-6">
        <div className="bg-[#fff] shadow-lg border mt-8 rounded max-w-2xl w-full mx-auto">
          <div
            className="px-4 pt-4 pb-4 font-semibold tracking-wider text-gray-600 text-3xl text-center"
            id="alert-dialog-title"
          >
            {"Register Venue"}
          </div>
          <div className="px-4 py-2">
            <VenueTypeDropdown handleChange={setVenueType} value={venueType} />
            <SingleInput
              value={venueName}
              setValue={setVenueName}
              label="venue name"
            />
            <SingleInput
              value={venueAddress}
              setValue={setVenueAddress}
              label="address"
            />
            <SingleInput
              value={venueCity}
              setValue={setVenueCity}
              label="city"
            />
            <SingleInput
              value={venueMobile}
              setValue={setVenueMobile}
              label="Mobile No"
            />
            <DualInput
              value={capacity}
              setValue={setCapacity}
              phStart={"Min"}
              phEnd={"Max"}
              label="capacity"
            />
            <SingleInput
              value={venueImage}
              setValue={setVenueImage}
              label="image url"
            />
            <DualInput
              value={venuePrice}
              setValue={setVenuePrice}
              phStart={"veg"}
              phEnd={"non-veg"}
              label="price per plate"
            />
          </div>
          <div className="flex justify-center gap-3 py-8">
            <LoadingButton
              variant="contained"
              onClick={handleConfirm}
              loading={loading}
            >
              <div className="capitalize text-gray-50">
                {loading ? "Loading" : "Confirm"}
              </div>
            </LoadingButton>
          </div>
        </div>
      </div>
      {success ? (
        <Alert
          open={openAlert}
          severity={"success"}
          setOpen={setOpenAlert}
          msg={"Venue added successfully"}
        />
      ) : (
        <Alert
          open={openAlert}
          severity={"warning"}
          setOpen={setOpenAlert}
          msg={msg}
        />
      )}
      <div className="py-16">
        <Divider />
      </div>
    </>
  );
}
