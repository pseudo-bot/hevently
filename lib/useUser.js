import useSWR from 'swr';

const fetcher = (url) =>
	fetch(url, { method: 'GET' }).then((res) => res.json());

export function useUser(id) {
	const { data, error } = useSWR(`/api/user/${id}`, fetcher);

	return {
		user: data,
		loading: !error && !data,
		error: error,
	};
}
