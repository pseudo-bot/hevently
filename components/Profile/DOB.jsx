import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { styled } from "@mui/material/styles";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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

export default function MaterialUIPickers({ edit }) {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-700 font-semibold tracking-wider "> <span className="mr-1">< CalendarTodayIcon/></span> DOB</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          readOnly={edit?false:true}
          renderInput={(params) => (
            <CssTextField
            focused={edit}
            className="w-72 bg-bgray-50"
            {...params}
           
              
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
