import TextField from '@mui/material/TextField';
import ItemList from './ItemList';
import { useState } from 'react';

let venues = [
	{
		venue: 'Mangalam',
		city: 'Ranchi',
		ratings: '4.6',
		capacity: 1000,
	},
	{
		venue: 'Shiaoa',
		city: 'Mumbai',
		ratings: '4.2',
		capacity: 1000,
	},
	{
		venue: 'Destination',
		city: 'Ranchi',
		ratings: '4.0',
		capacity: 190,
	},
	{
		venue: 'Mangalam',
		city: 'Ranchi',
		ratings: '4.4',
		capacity: 900,
	},
];

const Venue = () => {
	const [city, setCity] = useState('');
	const [venue, setVenue] = useState('');

	const handleCityChange = (e) => {
		setCity(e.target.value.toLowerCase());
	};

	const handleVenueChange = (e) => {
		setVenue(e.target.value.toLowerCase());
	};

	return (
		<div className="flex flex-col gap-10 px-8">
			<div className="text-xl md:text-3xl relative italic text-gray-700">
				Pick a wedding venue
			</div>
			<TextField label="City" variant="filled" onChange={handleCityChange} />
			<TextField label="Venue" variant="filled" onChange={handleVenueChange} />
			<ItemList list={venues} city={city} venue={venue}/>
		</div>
	);
};

export default Venue;
