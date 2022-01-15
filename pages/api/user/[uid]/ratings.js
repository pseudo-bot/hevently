import dbConnect from '../../../../db/utils/dbConnect';
import UserEvents from '../../../../db/model/UserEvents';
import {
	WeddingVenue,
	BirthdayVenue,
	SocialVenue,
	CorporateVenue,
} from '../../../../db/model/Venue';

export default async function ratingsHandler(req, res) {
	try {
		await dbConnect();
		const { method, body } = req;
		const { uid } = req.query;

		let Venue;
		switch (body.type) {
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

		switch (method) {
			case 'PUT':
				// Update the ratings in the venue db
				const venue = await Venue.findOne({ id: body.venueId });

				if (venue.bookings > 0) {
					let total = venue.bookings + 1;
					venue.bookings = total;
					venue.ratings = (venue.ratings + body.ratings) / total;
				} else {
					venue.ratings = body.ratings;
					venue.bookings = 1;
				}

				await venue.save();

				// Update the rating of in user events

				const query = `${body.type}.uid`;
				const updateQuery = `${body.type}.$.userRatings`;
				await UserEvents.updateOne(
					{ [query]: body.uid },
					{ $set: { [updateQuery]: body.ratings } }
				).clone();

				return res.status(200).json({
					ok: true,
					message: 'Ratings updated',
				});

			default:
				res.status(405).json({ ok: false, error: 'Invalid request' });
		}
	} catch (error) {
		res.status(500).json({ ok: false, error: 'Internal server error' });
	}
}
