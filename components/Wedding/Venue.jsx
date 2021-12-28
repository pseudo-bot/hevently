import Question from '../Misc/Question/Question';
import { Fab } from '@mui/material';
import { FilterIcon } from '@mui/icons-material';

const Venue = ({ venues }) => {
	return (
		<>
			<Question
				search={true}
				list={venues}
				heading="Wedding venue"
				label="Venue"
				weddingVenue={true}
			/>
		</>
	);
};

export default Venue;
