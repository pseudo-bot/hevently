import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default async () => {
	const contentType = 'application/json';
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			try {
				const res = await fetch(`/api/createuser/${process.env.NEXT_PUBLIC_CREATE_USER_KEY}`, {
					method: 'POST',
					headers: {
						Accept: contentType,
						'Content-Type': contentType,
					},
					body: JSON.stringify(user),
				});
				const status = await res.json();
				console.log(status.message);
			} catch (error) {
				console.log('Authentication failed. Cannot add user to database');
			}
		}
	});
};
