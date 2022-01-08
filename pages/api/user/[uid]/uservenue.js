import dbConnect from '../../../../db/utils/dbConnect';
import UserVenue from '../../../../db/model/UserVenue';

export default async function handleVenue(req, res) {
	await dbConnect();

	const { method } = req;
	const { uid } = req.query;
	const { venue } = req.body;

	try {
		switch (method) {
			case 'GET':
				const venues = await UserVenue.findOne({ uid }).clone();
				res.status(200).json({
					ok: true,
					message: 'Successfully fetched all venues',
					venues,
				});
				break;

			case 'POST':
				const user = await UserVenue.findOne({ uid }).clone();

				if (!user) {
					const newUserVenue = await UserVenue.create({
						uid,
						venues: [venue],
					});
					newUserVenue.save();
				} else {
					user.venues.push(venue);
					user.save();
				}
				res.status(201).json({
					ok: true,
					message: 'Venue created',
				});
				break;

			case 'PUT':
				await UserVenue.updateOne(
					{ [`venues.id`] : body.uid },
					{ $set: { [`venues.id.$`]: venue } }
				).clone();

				res.status(200).json({
					ok: true,
					message: 'Venue updated',
				});
				break;

			default:
				res.status(405).json({ error: 'Invalid request' });
				break;
		}
	} catch (error) {
		res.status(500).json({ error });
	}
}
