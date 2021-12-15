import Wedding from '../../components/Wedding/Wedding';

export default ({ venues }) => {
	return (
		<div>
			<Wedding venues={venues} />
		</div>
	);
};

export async function getStaticProps(context) {
	let data = await fetch('http://localhost:3000/api/wedding/venues')
	let venues = await data.json()
	
	if (!venues) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			venues: venues.data
		},
	};
}
