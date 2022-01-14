import { LoadingButton } from "@mui/lab";
import VenueTypeDropdown from "./VenueTypeDropdown";
import { useState } from "react";
import addVenue from "../../../config/api/venueAPI";
import { addUserVenue } from "../../../config/api/userVenueAPI";
import Alert from "../../Misc/Alert";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../../context/Users";
import { useContext } from "react";
import Divider from "@mui/material/Divider";
import {
  validateName,
  validateNumber,
  validatePhone,
} from "../../../utils/validation";
import refetchData from "../../../utils/refetchData";
import Button from "@mui/material/Button";
import { PhotoCamera } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import Image from "next/image";

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

const DualInput = ({ label, phStart, phEnd, value, setValue, type }) => {
  return (
    <div>
      <label className="leading-7 capitalize text-sm text-gray-600">
        {label}
      </label>
      <div className="flex gap-4">
        <CssTextField
          type={type}
          autoComplete="off"
          required
          fullWidth
          size="small"
          placeholder={phStart}
          value={value.start}
          onChange={(e) => {
            setValue({
              start: e.target.value < 0 ? 0 : e.target.value,
              end: value.end,
            });
          }}
        />
        <CssTextField
          type={type}
          autoComplete="off"
          required
          size="small"
          fullWidth
          placeholder={phEnd}
          value={value.end}
          onChange={(e) => {
            setValue({
              start: value.start,
              end: e.target.value < 0 ? 0 : e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

const SingleInput = ({ label, value, setValue, isImage, type }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <label className="leading-7 capitalize text-sm text-gray-600">
        {label}
      </label>
      <div>
        <CssTextField
          value={value}
          type={type}
          onChange={(e) => setValue(e.target.value)}
          required
          size="small"
          fullWidth
          autoComplete="off"
          InputProps={{
            endAdornment: isImage && (
              <InputAdornment onClick={handleClick} position="end">
                <div className="hover:cursor-pointer">
                  <PhotoCamera />
                </div>
              </InputAdornment>
            ),
          }}
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
  const [venueImageUrl, setVenueImageUrl] = useState("");
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

  const uploadImage = async () => {
    if (!venueImage) return;
    const formData = new FormData();
    formData.append("file", venueImage);
    formData.append("upload_preset", "kbsnvy1o");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/hevently-sarang/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data);
      setVenueImageUrl(data.secure_url);
    } catch (err) {
      alert("Error uploading image");
    }
    setVenueImage("");
  };
  const handleConfirm = async () => {
    const venue = {
      value: venueName,
      address: venueAddress,
      city: venueCity,
      capacity: `${Math.min(capacity.start, capacity.end)}-${Math.max(
        capacity.start,
        capacity.end
      )}`,
      display: venueImageUrl,
      veg: venuePrice.start,
      nonveg: venuePrice.end,
    };
    console.log(venue);
    if (!validateName(venueName)) {
      setSuccess(false);
      setMsg("Please enter a valid venue name");
      setOpenAlert(true);
      return;
    } else if (!validateName(venueCity)) {
      setSuccess(false);
      setMsg("Please enter a valid venue city");
      setOpenAlert(true);
      return;
    } else if (!validatePhone(venueMobile)) {
      setSuccess(false);
      setMsg("Please enter a valid mobile number");
      setOpenAlert(true);
      return;
    }  else {
      setLoading(true);
      const id = uuidv4();
      res = await addVenue(venue, venueType.toLowerCase(), id, user.uid);
      res2 = await addUserVenue(venue, venueType.toLowerCase(), id);
      refetchData(user.uid);
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
  const handleClear = () => {
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
    setVenueImage("");
  };

  return (
    <>
      <div className="px-6 py-4">
        <div
          className="px-4 border pt-4 pb-4 font-semibold tracking-wider text-gray-600 text-3xl text-center relative"
          id="alert-dialog-title"
        >
          {"Register Venue"}
        </div>
        <div className="bg-[#fff] shadow-lg py-4 border mt-8 rounded max-w-2xl w-full mx-auto">
          <div className="px-4 py-2 flex flex-col gap-4">
            <VenueTypeDropdown handleChange={setVenueType} value={venueType} />
            <SingleInput
              type="text"
              value={venueName}
              setValue={setVenueName}
              label="venue name"
              isImage={false}
            />
            <SingleInput
              type="text"
              value={venueAddress}
              setValue={setVenueAddress}
              label="address"
              isImage={false}
            />
            <SingleInput
              type={"text"}
              value={venueCity}
              setValue={setVenueCity}
              label="city"
              isImage={false}
            />
            <SingleInput
              value={venueMobile}
              setValue={setVenueMobile}
              label="Mobile No"
              isImage={false}
            />
            <DualInput
              type={"number"}
              value={capacity}
              setValue={setCapacity}
              phStart={"Min"}
              phEnd={"Max"}
              label="capacity"
            />
            <DualInput
              type={"number"}
              value={venuePrice}
              setValue={setVenuePrice}
              phStart={"veg"}
              phEnd={"non-veg"}
              label="price per plate"
            />
            <div className="py-4">
              <label className="block pb-2 text-sm text-gray-600">
                Venue Image
              </label>
              <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                onDragOver={(e) => {
                  e.preventDefault();
                  console.log("dragging");
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  console.log("dropped");
                  if (e.dataTransfer.files.length > 1) {
                    alert("Select only one image");
                    return;
                  }
                  setVenueImage(e.dataTransfer.files[0]);
                  console.log(venueImage);
                }}
              >
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                    >
                      {venueImage === "" ? (
                        <span>Upload a file</span>
                      ) : (
                        <span className="text-green-700 bg-green-200 px-3 py-1 border-2 border-green-600 rounded-md">
                          Image Uploaded Successfully
                        </span>
                      )}
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={(e) => {
                          if (e.target.files.length > 1) {
                            alert("Select only one image");
                            return;
                          }
                          setVenueImage(e.target.files[0]);
                        }}
                      />
                    </label>
                    {venueImage === "" ? (
                      <p className="pl-1">or drag and drop</p>
                    ) : null}
                  </div>
                  {venueImage === "" ? (
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  ) : null}
                </div>
              </div>
              <Button onClick={uploadImage}>Uplaod</Button>
            </div>
          </div>
          <div className="flex justify-center gap-3 py-8">
            <Button
              sx={{
                ":hover": {
                  backgroundColor: "rgb(244, 244, 245)",
                },
              }}
              onClick={handleClear}
            >
              <div className=" capitalize text-gray-500">Clear</div>
            </Button>
            <LoadingButton
              variant="contained"
              onClick={handleConfirm}
              loading={loading}
            >
              <div className="capitalize text-gray-50">
                {loading ? "" : "Confirm"}
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
