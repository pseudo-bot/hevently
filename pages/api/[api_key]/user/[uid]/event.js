import dbConnect from '../../../../../db/utils/dbConnect';
import UserEvents from '../../../../../db/model/UserEvents';

export default async function eventHandler(req, res) {
	dbConnect();

	const { method, body } = req;
	const { uid, api_key } = req.query;

	if (api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		switch (method) {
			case 'POST':
				const user = await UserEvents.updateOne(
					{ uid },
					{
						$push: {
							[body.type]: body.event,
						},
					}
				).clone();

				if (user) {
					return res.status(200).json({
						ok: true,
						message: 'Event list updated',
					});
				} else {
					return res.status(500).json({
						ok: false,
						message: 'Event not created',
					});
				}

			case 'GET':
				const events = await UserEvents.findOne({ uid });

				if (events) {
					return res.status(200).json({
						ok: true,
						message: 'Events retrieved',
						events,
					});
				} else {
					return res.status(404).json({
						ok: false,
						message: 'Events not found',
					});
				}

			case 'PUT':
				const query = `${body.type}.uid`;
				const updateQuery = `${body.type}.$.userRatings`;
				await UserEvents.updateOne(
					{ [query]: body.uid },
					{ $set: { [updateQuery]: body.ratings } }, (err, user) => {
						if (err) {
							return res.status(500).json({
								ok: false,
								message: 'Event not updated',
							});
						} else {
							return res.status(200).json({
								ok: true,
								message: 'Event updated',
							});
						}
					}
				).clone();
				break;

			default:
				res.status(400).json({
					ok: false,
					message: 'Bad request',
				});
				break;
		}
	} else {
		res.status(400).json({
			ok: false,
			message: 'Invalid request',
		});
	}
}
