import Question from '../Misc/Question/Question';

let venues = [
	{
		value: 'Mangalam',
		city: 'Ranchi',
		ratings: 4.4,
		capacity: 1000,
	},
	{
		value: 'Shiaoa',
		city: 'Mumbai',
		ratings: 4.7,
		capacity: 1000,
	},
	{
		value: 'Destination',
		city: 'Ranchi',
		ratings: 3,
		capacity: 190,
	},
	{
		value: 'Mangalam',
		city: 'Ranchi',
		ratings: 5,
		capacity: 900,
	},
];

const Venue = () => {
	return <Question list={venues} heading="Wedding venue" label="Venue"/>;
};

export default Venue;
