import UserRequestCard from "./UserRequestCard"
import useEvent from '../../../../hooks/useEvent';
import { Divider } from '@mui/material';
import Loader from "../../../Misc/Loader";

const UserRequests = () => {
    const { event } = useEvent();

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
					<UserRequestCard
						title="Pending Request"
						eventsData={event}
					/>
				</div>
			)}
			<Divider/>
		</div>
    )
}

export default UserRequests
