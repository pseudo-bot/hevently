import dbConnect from '../../../../../db/utils/dbConnect';
import UserEvents from '../../../../../db/model/UserEvents';

export default async function eventHandler(req, res) {
	dbConnect();

	const { method, body } = req;
	const { uid, api_key } = req.query;

	if (
		method === 'POST' &&
		api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY
	) {
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
	} else {
		res.status(400).json({
			ok: false,
			message: 'Invalid request',
		});
	}
}
