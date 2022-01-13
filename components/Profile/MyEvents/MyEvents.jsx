import EventCard from './EventCard';
import useEvent from '../../../hooks/useEvent';
import { Divider } from '@mui/material';
import Loader from '../../Misc/Loader';

const MyEvents = () => {
	const { event } = useEvent();
	
	return (
		<div id="events">
			{!event ? (
				<div className="flex h-[40vh] w-full relative justify-center items-center ">
					<Loader />
				</div>
			) : (
				<div className='pb-8'>
					<h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 py-6">
						Events
					</h3>
					<EventCard
						title="Upcoming Events"
						eventsData={event}
					/>
					<EventCard
						title="Completed Events"
						eventsData={event}
					/>
				</div>
			)}
			<Divider variant='middle'/>
		</div>
	);
};

export default MyEvents;
