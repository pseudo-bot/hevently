import Question from '../Misc/Question/Question';

const Venue = ({ venues }) => {
	return (
		<Question
			search={true}
			list={venues}
			heading="Wedding venue"
			label="Venue"
			weddingVenue={true}
		/>
	);
};

export default Venue;
