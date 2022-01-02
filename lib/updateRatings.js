import { auth } from './firebase/firebase';

export default async function updateRatings(ratings, uid) {
	try {
		const updateEvent = await fetch(
			`/api/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/user/${auth.currentUser.uid}/event`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ratings, uid}),
			}
		);
		const res = await updateEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
}
