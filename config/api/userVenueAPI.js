import { auth } from '../firebase/firebase';

export async function addUserVenue(venue) {
	try {
		const newVenue = await fetch(
			`/api/user/${auth.currentUser.uid}/uservenue`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ venue, uid: auth.currentUser.uid }),
			}
		);
		const res = await newVenue.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
}

