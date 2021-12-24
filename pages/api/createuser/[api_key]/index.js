import dbConnect from '../../../../db/utils/dbConnect';
import User from '../../../../db/model/User';

export default async function createUserHandler(req, res) {
	await dbConnect();

	const { method } = req;
	const { api_key } = req.query;
	const { uid, email } = req.body;

	if (api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		switch (method) {
			case 'POST':
				try {
					const user = await User.updateOne(
						{ uid },
						{
							uid,
							email,
						},
						{ upsert: true }
					);

					res.status(201).json({ ok: true, msg: 'User database updated' });
				} catch (err) {
					res.status(400).json({ ok: false, msg: 'User cannot be added' });
				}
				break;

			default:
				res.status(403).json({ error: 'ACCESS DENIED' });
				break;
		}
	} else {
		res.status(403).json({ error: 'ACCESS DENIED' });
	}
}
