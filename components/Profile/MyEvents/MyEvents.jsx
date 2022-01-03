import { useState } from 'react';
import EventCard from './EventCard';
import { useUser } from '../../../hooks/useUser';
import { CircularProgress } from '@mui/material';

const MyEvents = () => {
	const { events, eventLoading } = useUser();

	return (
		<>
			{eventLoading ? (
				<div className="flex h-[40vh] w-full relative justify-center items-center ">
					<CircularProgress />
				</div>
			) : (
				<div>
					<h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 py-6">
						My Events
					</h3>
					<EventCard
						title="Upcoming Events"
						id="upcoming"
						eventsData={events}
					/>
					<EventCard
						title="Completed Events"
						id="completed"
						eventsData={events}
					/>
				</div>
			)}
		</>
	);
};

export default MyEvents;
