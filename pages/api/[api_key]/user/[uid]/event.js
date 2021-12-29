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
				);

				if (user) {
					res.status(200).json({
						ok: true,
						message: 'Event list updated',
					});
				} else {
					res.status(500).json({
						ok: false,
						message: 'Event not created',
					});
				}

				break;

			case 'GET':
				const events = await UserEvents.findOne({ uid });

				if (events) {
					res.status(200).json({
						ok: true,
						message: 'Events retrieved',
						events,
					});
				} else {
					res.status(404).json({
						ok: false,
						message: 'Events not found',
					});
				}
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
