import Wedding from '../../components/Wedding/Wedding';
import dbConnect from '../../db/utils/dbConnect.js';
import Venue from '../../db/model/Venue';
import { WeddingProvider } from '../../context/Wedding';

export default ({ venues }) => {
	return (
		<WeddingProvider>
			<div>
				<Wedding venues={venues} />
			</div>
		</WeddingProvider>
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
