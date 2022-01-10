import dbConnect from '../../../../db/utils/dbConnect';
import UserEvents from '../../../../db/model/UserEvents';

export default async function eventHandler(req, res) {
	dbConnect();

	const { method, body } = req;
	const { uid } = req.query;

	try {
		switch (method) {
			case 'POST':
				let user;
				if (body.pending) {
					user = await UserEvents.updateOne(
						{ uid },
						{
							$push: {
								pending: body.event,
							},
						}
					).clone();
				} else {
					user = await UserEvents.updateOne(
						{ uid },
						{
							$push: {
								[body.type]: body.event,
							},
						}
					).clone();
				}

				if (!user) {
					return res.status(500).json({
						ok: false,
						message: 'Event not created',
					});
				} else {
					return res.status(200).json({
						ok: true,
						message: 'Event list updated',
					});
				}

				break;

			case 'GET':
				const event = await UserEvents.findOne({ uid }).clone();

				if (event) {
					return res.status(200).json({
						ok: true,
						message: 'Events retrieved',
						event,
					});
				} else {
					return res.status(404).json({
						ok: false,
						message: 'Events not found',
					});
				}

				break;

			case 'PUT':
				try {
					if (body.pending) {
						const event = await UserEvents.findOne({ uid }).clone();
						const el = event.pending.find((e) => e.uid === body.eventId);
						await UserEvents.updateOne(
							{ uid },
							{ $pull: { pending: el } }
						).clone();
						await UserEvents.updateOne(
							{ uid },
							{ $push: { [el.type]: el } }
						).clone();

						res.status(200).json({
							ok: true,
							message: 'Event updated',
						});
					} else {
						const query = `${body.type}.uid`;
						const updateQuery = `${body.type}.$.userRatings`;
						const ratingUpdate = await UserEvents.updateOne(
							{ [query]: body.uid },
							{ $set: { [updateQuery]: body.ratings } }
						).clone();

						if (!ratingUpdate) {
							return res.status(500).json({
								ok: false,
								message: 'Ratings not updated',
							});
						} else {
							return res.status(200).json({
								ok: true,
								message: 'Ratings updated',
							});
						}
					}
				} catch (error) {
					return res.status(500).json({
						ok: false,
						message: 'Error',
					});
				}

				break;

			case 'DELETE':
				let deleteEvent;
				if (body.pending) {
					deleteEvent = await UserEvents.updateOne(
						{ uid, 'pending.uid': body.eventId },
						{ $set: { 'pending.$.status': 'rejected' } }
					).clone();
				} else {
					deleteEvent = await UserEvents.updateOne(
						{ uid },
						{
							$pull: {
								[body.type]: {
									uid: body.uid,
								},
							},
						}
					).clone();
				}

				if (!deleteEvent) {
					return res.status(500).json({
						ok: false,
						message: 'Event not deleted',
					});
				} else {
					return res.status(200).json({
						ok: true,
						message: 'Event deleted',
					});
				}

				break;

			default:
				res.status(400).json({
					ok: false,
					message: 'Bad request',
				});
				break;
		}
	} catch (error) {
		return res.status(500).json({
			ok: false,
			message: 'Internal server error',
		});
	}
}
