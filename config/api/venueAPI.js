export default async function addVenue(venue, type) {
	try {
		const newVenue = await fetch(
			`/api/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/venue`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ venue, type }),
			}
		);
		const res = await newVenue.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
}
