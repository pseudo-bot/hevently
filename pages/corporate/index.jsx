import dbConnect from '../../db/utils/dbConnect.js';
import { CorporateVenue } from '../../db/model/Venue';
import { EventProvider } from '../../context/EventContext';
import { UserContext } from '../../context/Users';
import { useContext } from 'react';
import { CircularProgress } from '@mui/material';
import Event from '../../components/Events/Event';
import EventName from '../../components/Misc/EventName';
import { useState } from 'react';
import Head from 'next/head';

const CorporatePage = ({ venues }) => {
	const user = useContext(UserContext);
	const [showModal, setShowModal] = useState(true);
	return (
		<>
			<Head>
				<title>hevently | Corporate Events</title>
				<meta
					name="description"
					content="book your venue for corporate events like Seminars, conferences, Company milestone events, Product launch events, Charity events, etc."
				/>
			</Head>
			{user ? (
				<EventProvider>
					<div>
						<Event type={'corporate'} venues={venues} />
					</div>
				</EventProvider>
			) : (
				<div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
					<CircularProgress />
				</div>
			)}
			<EventName
				showModal={showModal}
				setShowModal={setShowModal}
				title="Enter Event Name"
			/>
		</>
	);
};

export default CorporatePage;

export async function getStaticProps() {
	dbConnect();

	let data = await CorporateVenue.find({});
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
