import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
   <div className='flex items-center justify-between'>
       <div className="text-gray-700 font-semibold tracking-wider ">DOB</div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
    
        <DesktopDatePicker
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField  className="w-72 bg-bgray-50" {...params} />}
         
        />

    </LocalizationProvider>
   </div>
  );
}
