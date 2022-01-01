import dbConnect from '../../../../db/utils/dbConnect';
import User from '../../../../db/model/User';
import UserEvents from '../../../../db/model/UserEvents';

export default async function createUserHandler(req, res) {
	await dbConnect();

	const { method } = req;
	const { api_key } = req.query;
	const { uid, email, displayName, phoneNumber, photoURL } = req.body;

	if (api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		switch (method) {
			case 'POST':
				try {
					// Check if user already exists
					const user = await User.findOne({ uid });

					if (user) {
						res.status(200).json({
							ok: true,
							message: 'User already exists',
						});
					} else {
						// Create user
						const newUser = await User.create({
							uid,
							email,
							displayName: displayName || null,
							phoneNumber: phoneNumber || null,
							photoURL: photoURL || null,
							gender: null,
							city: null,
							state: null,
							dob: null,
						});
						const newEvent = await UserEvents.create({
							uid,
							wedding: [],
							corporate: [],
							birthday: [],
							social: [],
						});

						await newUser.save();
						await newEvent.save();

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
	} else {
		res.status(403).json({ error: 'ACCESS DENIED' });
	}
}
