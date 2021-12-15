import Wedding from '../../components/Wedding/Wedding';

export default ({ venues }) => {
	console.log(venues);
	return (
		<div>
			<Wedding venues={venues} />
		</div>
	);
};

export async function getServerSideProps() {
	let data;
	let venues;
	try {
		data = await fetch('http://localhost:3000/api/wedding/venues');
		venues = await data.json();
		if (!venues.status) {
			console.log('Error fetching venues for wedding');
		}
	} catch (e) {
		console.log(e);
		console.log('Error fetching venues for wedding');
	}
	return {
		props: {
			venues: venues.data,
		},
	};
}
