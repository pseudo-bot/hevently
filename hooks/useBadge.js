import useSWR from 'swr';
import { getFetcher } from '../utils/fetcher';
import { useContext } from 'react';
import { UserContext } from '../context/Users';

const useBadge = () => {
	const user = useContext(UserContext);

	const { data, error } = useSWR(user && user.uid
		? `/api/user/${user.uid}/badge`
		: null,
	getFetcher);

	return {
		data: data && data.data,
		loading: !data && !error,
		uid: user && user.uid,
	};
};

export default useBadge;
