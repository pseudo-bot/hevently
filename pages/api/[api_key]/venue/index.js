import dbConnect from '../../../../../db/utils/dbConnect';
import {WeddingVenue, CorporateVenue, BirthdayVenue, SocialVenue} from '../../../../../db/model/Venue';

export default async function venueHandler(req, res) {
	await dbConnect();

	const { method } = req;
	const { api_key } = req.query;

	if (api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		try {
			switch (method) {
        case 'PUT':
          
          break
        default:
          break
      }
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        error: error.message
      });
    }
  } else {
    res.status(403).json({
      message: 'Forbidden'
    });
  }
}  
