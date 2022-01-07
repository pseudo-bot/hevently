import dbConnect from '../../../../db/utils/dbConnect';
import {
	WeddingVenue,
	BirthdayVenue,
	SocialVenue,
	CorporateVenue,
} from '../../../../db/model/Venue';

export default async function createVenue(req, res) {
	await dbConnect();

	const { method } = req;
	const { api_key } = req.query;
	const { venue, type } = req.body;

	if (api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		switch (method) {
			case 'POST':
				let Venue;
				switch (type) {
					case 'Wedding':
						Venue = WeddingVenue;
						break;
					case 'Birthday':
						Venue = BirthdayVenue;
						break;
					case 'Social':
						Venue = SocialVenue;
						break;
					case 'Corporate':
						Venue = CorporateVenue;
						break;
				}

				const addVenue = await Venue.create(venue);
				addVenue.save();

			default:
				res.status(405).json({ error: 'Invalid request' });
				break;
		}
	} else {
		res.status(403).json({ error: 'Forbidden' });
	}
}
