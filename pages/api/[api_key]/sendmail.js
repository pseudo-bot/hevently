const nodemailer = require('nodemailer');

export default async function sendMail(req, res) {
	const { method, body } = req;
	const { api_key } = req.query;

	const emails = body.email

	if (api_key === process.env.NEXT_PUBLIC_CREATE_USER_KEY) {
		switch (method) {
			case 'POST':
				let transporter = nodemailer.createTransport({
					service: 'gmail',
					auth: {
						user: process.env.NEXT_PUBLIC_EMAIL,
						pass: process.env.NEXT_PUBLIC_PASSWORD,
					},
				});

				let mailOptions = {
					from: process.env.NEXT_PUBLIC_EMAIL,
					to: emails,
					subject: 'Invite to attend the event',
					text: `You have been invited to wedding.`,
				};

				transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						res.status(500).json({
							ok: false,
							message: 'Error sending mail',
							error,
						});
					} else {
						res.status(200).json({
							ok: true,
							message: 'Mail sent',
						});
					}
				});
				break;

			default:
				res.status(400).json({
					ok: false,
					message: 'Bad request',
				});
				break;
		}
	} else {
		res.status(403).json({
			ok: false,
			message: 'Forbidden',
		});
	}
}
