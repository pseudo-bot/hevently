import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

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

const genders = [
  {
    value: "Wedding Venue",
    label: "Wedding Venue",
  },
  {
    value: "Birthday Venue",
    label: "Birthday Venue",
  },
  {
    value: "Social Gathering Venue",
    label: "Social Gathering Venue",
  },
  {
    value: "Corporate Event Venue",
    label: "Corporate Event Venue",
  }
];

export default function SelectTextFields({handleChange,value}) {
  return (
    <div>
      <label className="leading-7 capitalize text-sm text-gray-600">
        Venue Type
        </label>
      <div className="w-full">
          <CssTextField
            id="outlined-select-gender"
            select
            value={value}
            onChange={(e)=>handleChange(e.target.value)}
            InputProps={{
              sx: {
                backgroundColor: "white",
                color: "rgb(63, 63, 70)",
              }
            }}
            size="small"
            fullWidth
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CssTextField>
        </div>
    </div>
  );
}
