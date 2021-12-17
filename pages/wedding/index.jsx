import Wedding from '../../components/Wedding/Wedding';
import dbConnect from '../../db/utils/dbConnect.js';
import Venue from '../../db/model/Venue';

export default ({ venues }) => {
	return (
		<div>
			<Wedding venues={venues} />
		</div>
	);
};

export async function getStaticProps() {
	dbConnect();
	let data = await Venue.find({});
	let venues = JSON.parse(JSON.stringify(data));

	if (!venues) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			venues,
		},
	};
}
