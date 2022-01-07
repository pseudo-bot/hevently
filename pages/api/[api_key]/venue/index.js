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
		let Venue;
		switch (type) {
			case 'wedding':
				Venue = WeddingVenue;
				break;
			case 'birthday':
				Venue = BirthdayVenue;
				break;
			case 'social':
				Venue = SocialVenue;
				break;
			case 'corporate':
				Venue = CorporateVenue;
				break;
		}
		try {
			switch (method) {
				case 'POST':
					const addVenue = await Venue.create(venue);
					addVenue.save();
					res.status(201).json({
						ok: true,
						message: 'Venue created',
					});
					break;

				case 'PUT':
					const updateVenue = await Venue.findOne({ id: _id });
					updateVenue.overwrite(venue);
					updateVenue.save();

					res.status(200).json({
						ok: true,
						message: 'Venue updated',
					});

				default:
					res.status(405).json({ error: 'Invalid request' });
					break;
			}
		} catch (error) {
			res.status(500).json({ error });
		}
	} else {
		res.status(403).json({ error: 'Forbidden' });
	}
}
