import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default async () => {
	const contentType = 'application/json';
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			try {
				const res = await fetch(`/api/createuser`, {
					method: 'POST',
					headers: {
						Accept: contentType,
						'Content-Type': contentType,
					},
					body: JSON.stringify(user),
				});
				const status = await res.json();
				console.log(status.msg);
			} catch (error) {
				console.log('Failed to add user to database');
			}
		}
	});
};
