import Wedding from '../../components/Wedding/Wedding';

export default ({ venues }) => {
	return (
		<div>
			<Wedding venues={venues} />
		</div>
	);
};

export async function getStaticProps(context) {
	const url =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3000/api/wedding/venues'
			: 'https://hevently.vercel.app/api/wedding/venues';

	let data = await fetch(url);
	let venues = await data.json();

	if (!venues) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			venues: venues.data,
		},
	};
}
