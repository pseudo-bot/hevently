import Question from '../Misc/Question/Question';

const Venue = ({ venues }) => {
	return <Question list={venues} heading="Wedding venue" label="Venue" />;
};

export default Venue;
