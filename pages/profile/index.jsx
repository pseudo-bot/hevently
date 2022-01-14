import Profile from '../../components/Profile/Profile';
import Head from 'next/head';
import { useContext } from 'react';
import { UserContext } from '../../context/Users';

const ProfilePage = () => {
	const user = useContext(UserContext);

	return (
		<>
			<Head>
				<title>hevently | Profile</title>
				<meta
					name="description"
					content="This is profile page of hevently where you can browse your profile and upcoming events you have booked"
				/>
			</Head>
			<Profile />
		</>
	);
};

export default ProfilePage;
