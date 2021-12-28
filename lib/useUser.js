import useSWR from 'swr';
import { useContext } from 'react';
import { UserContext } from '../context/Users';

const fetcher = (url) =>
	fetch(url, { method: 'GET' }).then((res) => res.json());

export function useUser() {
	const user = useContext(UserContext);

	const { data, error } = useSWR(
		user && user.uid
			? `/api/user/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/${user.uid}`
			: null,
		fetcher
	);

	const { data: eventData, error: eventError } = useSWR(
		user && user.uid
			? `/api/user/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/${user.uid}/event`
			: null,
		fetcher
	);

	return {
		user: data && data.user,
		ok: data && data.ok,
		loading: !error && !data,
		error: error,
		events: eventData && eventData.events,
		eventOk: eventData && eventData.ok,
		eventLoading: !eventError && !eventData,
		eventError: eventError,
	};
}
