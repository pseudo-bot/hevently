import { auth } from '../firebase/firebase';

const createEvent = async (event, type, pending) => {
	const contentType = 'application/json';
	try {
		const create = await fetch(`/api/user/${auth.currentUser.uid}/event`, {
			method: 'POST',
			headers: {
				'Content-Type': contentType,
			},
			body: JSON.stringify({ event, type, pending }),
		});
		const res = await create.json();
		return res.ok;
	} catch (e) {
		console.log(e);
		return false;
	}
};

const updateUserRatings = async (ratings, uid, type) => {
	try {
		const updateEvent = await fetch(`/api/user/${auth.currentUser.uid}/event`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ratings, uid, type }),
		});
		const res = await updateEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
};

const deleteEvent = async (uid, type) => {
	try {
		const deleteEvent = await fetch(`/api/user/${auth.currentUser.uid}/event`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ uid, type }),
		});
		const res = await deleteEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
};

const updateEventRating = async (id, type, rating) => {
	try {
		const eventRatings = await fetch(
			`/api/user/${auth.currentUser.uid}/event`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id, type, rating }),
			}
		);
		const res = await eventRatings.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
};

const rejectUserEvent = async (eventId) => {
	try {
		const rejectEvent = await fetch(`/api/user/${auth.currentUser.uid}/event`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ eventId, pending: true }),
		});
		const res = await rejectEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
};

const approveUserEvent = async (eventId) => {
	try {
		const approveEvent = await fetch(
			`/api/user/${auth.currentUser.uid}/event`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ eventId, pending: true }),
			}
		);
		const res = await approveEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
};

export {
	createEvent,
	rejectUserEvent,
	approveUserEvent,
	updateUserRatings,
	deleteEvent,
	updateEventRating,
};
