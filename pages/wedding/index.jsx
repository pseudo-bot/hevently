import Wedding from '../../components/Wedding/Wedding';
import dbConnect from '../../db/utils/dbConnect.js';
import { WeddingVenue } from '../../db/model/Venue';
import { WeddingProvider } from '../../context/Wedding';
import { auth } from '../../lib/firebase/firebase';

export default ({ venues }) => {
	return (
		<>
			{auth.currentUser ? (
				<WeddingProvider>
					<div>
						<Wedding venues={venues} />
					</div>
				</WeddingProvider>
			) : <div className='flex h-screen w-screen fixed justify-center items-center text-xl text-center'>Please login to access site</div>}
		</>
	);
};

export async function getStaticProps() {
	dbConnect();

	let data = await WeddingVenue.find({});
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
