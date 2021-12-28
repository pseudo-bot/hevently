import dbConnect from '../../db/utils/dbConnect.js';
import { BirthdayVenue } from '../../db/model/Venue';
import { EventProvider } from '../../context/EventContext';
import { UserContext } from '../../context/Users';
import { useContext } from 'react';
import { CircularProgress } from '@mui/material';
import Event from '../../components/Events/Event';

const BirthdayPage = ({ venues }) => {
	const user = useContext(UserContext);
	return (
		<>
			{user ? (
				<EventProvider>
					<div>
						<Event type="birthday" venues={venues} />
					</div>
				</EventProvider>
			) : (
				<div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
					<CircularProgress />
				</div>
			)}
		</>
	);
};

export default BirthdayPage;

export async function getStaticProps() {
	dbConnect();

	let data = await BirthdayVenue.find({});
	let venues = JSON.parse(JSON.stringify(data));

	if (!venues) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			venues,
		},
	};
}
