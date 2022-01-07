import { auth } from '../firebase/firebase';

export default async function sendMail(userEmail) {
	const contentType = 'application/json';
	try {
		const confirm = await fetch(
			`/api/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}/user/${auth.currentUser.uid}/confirmation`,
			{
				method: 'POST',
				headers: {
					'Content-Type': contentType,
				},
				body: JSON.stringify({ userEmail }),
			}
		);
		const res = await confirm.json();
		return res.ok;
	} catch (e) {
		console.log(e);
		return false;
	}
}
