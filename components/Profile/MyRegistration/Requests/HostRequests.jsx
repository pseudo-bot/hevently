import HostRequestCard from "./HostRequestCard"
import { CircularProgress } from '@mui/material';
import useHost from '../../../../hooks/useHost';
import { Divider } from '@mui/material';

const HostRequests = () => {
    const { host:event } = useHost();

    return (
        <div id="requests">
			{!event ? (
				<div className="flex h-[40vh] w-full relative justify-center items-center ">
					<CircularProgress />
				</div>
			) : (
				<div className='pb-8'>
					<h3 className="text-3xl text-center font-semibold tracking-wider text-gray-600 py-6">
						Requests
					</h3>
					<HostRequestCard
						title="Pending Request"
						eventsData={event}
					/>
					<HostRequestCard
						title="Approved Request"
						eventsData={event}
					/>
				</div>
			)}
			<Divider/>
		</div>
    )
}

export default HostRequests
