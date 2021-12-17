import { useState } from 'react';
import { TextField } from '@mui/material';
import ItemList from './ItemList';

const Question = ({ list, heading, label, search, weddingVenue }) => {
	const [value, setValue] = useState('');

	const handleVenueChange = (e) => {
		setValue(e.target.value.toLowerCase());
	};

	return (
		<div className="flex flex-col gap-10 px-10 w-full max-w-96">
			<div className="text-3xl relative montserrat font-semibold text-center text-gradient capitalize md:text-4xl">
				{heading}
			</div>
			{search ? (
				<>
					<TextField
						label={label}
						variant="filled"
						onChange={handleVenueChange}
					/>
					<ItemList list={list} value={value} weddingVenue={weddingVenue}/>
				</>
			) : null}
		</div>
	);
};

export default Question;
