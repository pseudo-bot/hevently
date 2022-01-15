import HostRequestCard from "./HostRequestCard"
import useHost from '../../../../hooks/useHost';
import { Divider } from '@mui/material';
import Loader from '../../../Misc/Loader';

const HostRequests = () => {
    const { host:event } = useHost();

    return (
        <div id="requests">
			{!event ? (
				<div className="flex h-[40vh] w-full relative justify-center items-center ">
					<Loader />
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
			<Divider variant="middle"/>
		</div>
    )
}

export default HostRequests
