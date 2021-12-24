import { TextField, Divider } from '@mui/material';
import { useState } from 'react';

const Input = ({ label, helper }) => {
	return <TextField helperText={helper} required={true} label={label} sx={{
    maxWidth: '30rem',
    width: '100%',
  }} />;
};

const Guests = () => {
	const [guestList, setGuestList] = useState();

	return (
		<div className="flex flex-col gap-10 w-full px-10 items-center">
      
			<div className="text-3xl relative montserrat font-semibold text-center text-gradient capitalize md:text-4xl">
				Guest List
			</div>
      <Divider sx={{
        width:'100%'
      }}/>
			<div className="flex flex-col gap-6 w-full items-center">
				<Input label={'Name'} helper={'Enter guest name'} />
				<Input label={'Email'} helper={'Enter valid guest email'} />
			</div>

			<Divider sx={{
        width:'100%'
      }}/>
		</div>
	);
};

export default Guests;
