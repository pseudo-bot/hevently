import dbConnect from '../../../db/utils/dbConnect';
import User from '../../../db/model/User';
import UserEvents from '../../../db/model/UserEvents';
import HostEvents from '../../../db/model/HostEvents';

export default async function createUserHandler(req, res) {
	await dbConnect();

	const { method } = req;
	const { uid, email, displayName, phoneNumber, photoURL, accountType } =
		req.body.user;

	switch (method) {
		case 'POST':
			try {
				// Check if user already exists
				const user = await User.findOne({ uid });

				if (user) {
					if (user.accountType === 'user' && accountType === 'admin') {
						return res.status(200).json({
							ok: true,
							message: 'User is not a admin',
							account: false,
						});
					}
					res.status(200).json({
						ok: true,
						message: 'User already exists',
						account: true,
					});
				} else {
					// Create user
					const newUser = await User.create({
						uid,
						email,
						accountType,
						displayName: displayName || '',
						phoneNumber: phoneNumber || '',
						photoURL: photoURL || '',
					});
					const newEvent = await UserEvents.create({
						uid,
					});
					const newHost = await HostEvents.create({
						uid,
					});

					newUser.save();
					newEvent.save();
					newHost.save();

					res.status(201).json({
						ok: true,
						message: 'User created',
					});
				}
			} catch (err) {
				res.status(400).json({
					ok: false,
					message: `User could not be added. Error: ${err}`,
				});
			}
			break;

		default:
			res.status(403).json({ error: 'ACCESS DENIED' });
			break;
	}
}
