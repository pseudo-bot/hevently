import { auth } from './firebase/firebase';

const createEvent = async (event, type) => {
	const contentType = 'application/json';
	try {
		const create = await fetch(
			`/api/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/user/${auth.currentUser.uid}/event`,
			{
				method: 'POST',
				headers: {
					'Content-Type': contentType,
				},
				body: JSON.stringify({event, type}),
			}
		);
		const res = await create.json();
		return res.ok;
	} catch (e) {
		console.log(e);
		return false
	}
};

export default createEvent;
