import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import WcIcon from '@mui/icons-material/Wc';
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

const genders = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Others",
    label: "Others",
  },
];

export default function SelectTextFields({edit}) {
  const [gender, setGender] = React.useState("Select");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="flex items-center justify-between">
        <div className="text-gray-700 font-semibold tracking-wider "> <span className="mr-1"><WcIcon/></span> Gender</div>
        <CssTextField
          id="outlined-select-gender"
          select
          value={gender}
          onChange={handleChange}
          InputProps={{
            readOnly: edit ? false : true,
          }}
          focused={edit}
          className="w-72 bg-bgray-50"
          size="small"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CssTextField>
      </div>
  );
}
