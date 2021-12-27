import Profile from '../../components/Profile/Profile';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/Users';
import { CircularProgress } from '@mui/material';
import useSWR from 'swr';

const fetcher = (url) =>
	fetch(url, { method: 'GET' }).then((res) => res.json());

const Loading = () => {
	return (
		<div className="flex h-screen w-screen fixed justify-center items-center text-xl text-center">
			<CircularProgress />
		</div>
	);
};

const profilePage = () => {
	const user = useContext(UserContext);

	const url = `/api/user/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/${
		user && user.uid
	}`;

	const { data, error } = useSWR(url, fetcher);

	if (data && !error) {
		return <Profile user={data.user} />;
	} else {
		return <Loading />;
	}
};

export default profilePage;
