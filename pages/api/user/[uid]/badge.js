import Badge from '../../../../db/model/Badge';
import dbConnect from '../../../../db/utils/dbConnect';

export default async function badgeHandler(req, res) {
	try {
		await dbConnect();
		const { uid } = req.query;
		const { method } = req;
		
		switch (method) {
			case 'GET':
				const badge = await Badge.findOne({ uid });
				return res.status(200).json({
					ok: true,
					message: 'Badge retrieved',
					data: badge || {},
				});

			case 'PUT':
				const { approval, request } = req.body;
				const updateBadge = await Badge.updateOne(
					{ uid },
					{
						$set: {
							approval,
							request,
						},
					}
				);
				if (updateBadge) {
					res.status(200).json({
						ok: true,
						message: 'Badge updated',
					});
				} else {
					res.status(404).json({
						ok: false,
						message: 'Badge not updated',
					});
				}

				break;
		}
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: 'Server error',
			error,
		});
	}
}
