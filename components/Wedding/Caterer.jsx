import Question from '../Misc/Question/Question'

let caterer = [
	{
		value: 'Ram caterer',
		city: 'Ranchi',
		ratings: 4.8,
		capacity: 1000,
	},
	{
		value: 'Himadiro',
		city: 'Mumbai',
		ratings: 4,
		capacity: 1000,
	},
	{
		value: 'Huafd careter',
		city: 'Ranchi',
		ratings: 3,
		capacity: 190,
	},
	{
		value: 'Hlkjalsdf',
		city: 'Ranchi',
		ratings: 5,
		capacity: 900,
	},
];

const Caterer = () => {
	return (
		<Question list={caterer} label="Caterer" heading="Catering Service"/>
	)
};

export default Caterer;
