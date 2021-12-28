import Profile from '../../components/Profile/Profile';
import { CircularProgress } from '@mui/material';
import { useUser } from '../../lib/useUser';

const Loading = () => {
	return (
		<div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
			<CircularProgress />
		</div>
	);
};

const ProfilePage = () => {
	const { user, ok, error, events, eventError, eventOk } = useUser();

	if (user && !error && ok && events && !eventError && eventOk) {
		return <Profile user={user} events={events} />;
	} else {
		return <Loading />;
	}
};

export default ProfilePage;
