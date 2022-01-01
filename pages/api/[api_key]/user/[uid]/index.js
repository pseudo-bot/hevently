import dbConnect from '../../../../../db/utils/dbConnect';
import User from '../../../../../db/model/User';

export default async function userHandler(req, res) {
	await dbConnect();

	const { method } = req;
	const { uid, api_key } = req.query;

	if (api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		switch (method) {
			case 'GET':
				try {
					const user = await User.findOne({ uid });

					if (user) {
						res.status(200).json({
							ok: true,
							message: `User ${method}`,
							user,
						});
					} else {
						res.status(404).json({
							ok: false,
							message: `User ${method} failed. User not found`,
						});
					}
				} catch (err) {
					res.status(400).json({
						ok: false,
						message: `User ${method} failed. Error: ${err}`,
					});
				}

			case 'PUT':
				try {
					const user = await User.findOne({ uid });

					if (user) {
						user.overwrite(req.body);
						await user.save();

						res.status(200).json({
							ok: true,
							message: `User ${method}`,
						});
					} else {
						res.status(404).json({
							ok: false,
							message: `User ${method} failed. User not found`,
						});
					}
				} catch (err) {
					res.status(400).json({
						ok: false,
						message: `User ${method} failed. Error: ${err}`,
					});
				}

			default:
				res.status(405).json({ error: 'Method not allowed' });
				break;
		}
	} else {
		res.status(403).json({ ok: false, message: 'ACCESS DENIED' });
	}
}
