import Profile from '../../components/Profile/Profile';
import { CircularProgress } from '@mui/material';
import { useUser } from '../../lib/useUser';
import Head from 'next/head';
import { ProfileContext } from '../../context/Profile';
import { useContext, useEffect } from 'react';

const Loading = () => {
	return (
		<div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
			<CircularProgress />
		</div>
	);
};

const ProfilePage = () => {
	const { user, ok, events, eventOk } = useUser();
	const { setProfileData } = useContext(ProfileContext);

	useEffect(() => {
		if (user) {
			setProfileData(user);
		}
	}, [user, setProfileData]);

	if (user && ok && events && eventOk) {
		return (
			<>
				<Head>
					<title>hevently | Profile</title>
					<meta
						name="description"
						content="This is profile page of hevently where you can browse your profile and upcoming events you have booked"
					/>
				</Head>
				<Profile events={events} />
			</>
		);
	} else {
		return (
			<>
				<Head>
					<title>hevently | Profile</title>
					<meta
						name="description"
						content="profile page of hevently where you can browse your profile and upcoming events you have booked"
					/>
				</Head>
				<Loading />;
			</>
		);
	}
};

export default ProfilePage;
