export default async function sendMail(guestlist, userEmail) {
	const emails = guestlist.map((guest) => guest.email);
	const contentType = 'application/json';
	try {
		const invite = await fetch(
			`/api/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/sendmail`,
			{
				method: 'POST',
				headers: {
					'Content-Type': contentType,
				},
				body: JSON.stringify({ emails, userEmail }),
			}
		);
		const res = await invite.json();
		return res.ok;
	} catch (e) {
		console.log(e);
		return false;
	}
}
