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
	const { user, ok, error } = useUser();

	if (user && !error && ok) {
		return <Profile user={user} />;
	} else {
		return <Loading />;
	}
};

export default ProfilePage;
