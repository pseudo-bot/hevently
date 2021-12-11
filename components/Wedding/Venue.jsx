import TextField from '@mui/material/TextField';
import ItemList from './ItemList';
import { useState } from 'react';

let venues = [
	{
		venue: 'Mangalam',
		city: 'Ranchi',
		ratings: 4.8,
		capacity: 1000,
	},
	{
		venue: 'Shiaoa',
		city: 'Mumbai',
		ratings: 4,
		capacity: 1000,
	},
	{
		venue: 'Destination',
		city: 'Ranchi',
		ratings: 3,
		capacity: 190,
	},
	{
		venue: 'Mangalam',
		city: 'Ranchi',
		ratings: 5,
		capacity: 900,
	},
];

const Venue = () => {
	const [venue, setVenue] = useState('');

	const handleVenueChange = (e) => {
		setVenue(e.target.value.toLowerCase());
	};

	return (
		<div className="flex flex-col gap-10 px-10 w-full sm:w-[36rem]">
			<div className="text-3xl relative montserrat font-semibold text-center text-gradient capitalize md:text-4xl">
				wedding venue
			</div>
			<TextField label="Venue" variant="filled" onChange={handleVenueChange} />
			<ItemList list={venues} venue={venue}/>
		</div>
	);
};

export default Venue;
