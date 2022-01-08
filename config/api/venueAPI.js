export default async function addVenue(venue, type) {
	try {
		const newVenue = await fetch(
			`/api/venue/${type}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ venue }),
			}
		);
		const res = await newVenue.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
}
