import Question from '../Misc/Question/Question';
import venues from '../../db/venues';

const Venue = () => {
	return <Question list={venues} heading="Wedding venue" label="Venue"/>;
};

export default Venue;
