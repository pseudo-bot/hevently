import dbConnect from '../../../../db/utils/dbConnect';
import User from '../../../../db/model/User';

export default async function userHandler(req, res) {
	try {
		await dbConnect();

		const { method } = req;
		const { uid } = req.query;
		
		if (!method) method = 'GET';

		switch (method) {
			case 'GET':
				const user = await User.findOne({ uid }).clone();
				res.status(200).json({
					ok: true,
					message: `User ${method}`,
					user,
				});
				break;

			case 'PUT':
				const updateUser = await User.findOne({ uid }).clone();
				if (updateUser) {
					updateUser.overwrite(req.body);
					updateUser.save();

					res.status(200).json({
						ok: true,
						message: `User ${method}`,
						user: updateUser,
					});
				} else {
					res.status(404).json({
						ok: false,
						message: `User ${method} failed. User not found`,
					});
				}

				break;
		}
	} catch (err) {
		res.status(500).json({
			ok: false,
			message: `User ${method} failed. ${err}`,
		});
	}
}
