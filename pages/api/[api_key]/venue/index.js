import dbConnect from '../../../../db/utils/dbConnect';
import {
	WeddingVenue,
	BirthdayVenue,
	SocialVenue,
	CorporateVenue,
} from '../../../../db/model/Venue';

export default async function createUserHandler(req, res) {
	await dbConnect();

	const { method } = req;
	const { api_key } = req.query;

	if (api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		switch (method) {
			case 'DELETE':
        

			default:
				res.status(405).json({ error: 'Invalid request' });
				break;
		}
	} else {
		res.status(403).json({ error: 'Forbidden' });
	}
}
