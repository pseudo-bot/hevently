import dbConnect from '../../../db/utils/dbConnect';
import User from '../../../db/model/User';

export default async function createUserHandler(req, res) {
	await dbConnect();

	const { method } = req;
	const { uid } = req.body;

	switch (req) {
		case 'POST':
			try {
				const user = await User.updateOne(
					{ uid },
					{
						$set: {
							uid,
						},
					},
					{ upsert: true }
				);

				res.status(201).json({ ok: true, msg: 'New user created' });
			} catch (err) {
				res.status(400).json({ ok: false, msg: 'User cannot be added' });
			}
			break;

		default:
			res.status(403).json({ ok: false, msg: 'Access denied' });
			break;
	}
}
