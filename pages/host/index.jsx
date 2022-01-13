import Profile from '../../components/Profile/HostProfile';
import Head from 'next/head';

const HostPage = () => {
	return (
		<>
			<Head>
				<title>hevently | Profile</title>
				<meta
					name="description"
					content="This is profile page of hevently where you can register your venues."
				/>
			</Head>
			<Profile />
		</>
	);
};

export default HostPage;
