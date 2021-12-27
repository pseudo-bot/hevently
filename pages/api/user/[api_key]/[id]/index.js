import dbConnect from '../../../../../db/utils/dbConnect';
import User from '../../../../../db/model/User';

export default async function userHandler(req, res) {
	await dbConnect();

	const { method } = req;
	const { id, api_key } = req.query;

	if (method === 'GET' && api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		try {
			const user = await User.findOne({ id });

			res.status(200).json({
				ok: true,
				message: `User ${method}`,
				user,
			});
		} catch (err) {
			res.status(400).json({
				ok: false,
				message: `User ${method} failed. Error: ${err}`,
			});
		}
	} else {
    res.status(403).json({ error: 'ACCESS DENIED' });
  }
}
