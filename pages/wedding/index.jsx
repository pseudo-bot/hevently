import Wedding from '../../components/Wedding/Wedding';

export default ({ venues }) => {
	return (
		<div>
			<Wedding venues={venues} />
		</div>
	);
};

export async function getStaticProps(context) {
	let venues = await fetch('/')
	return {
		props: {
			venues
		},
	};
}
