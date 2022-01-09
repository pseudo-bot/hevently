export const addHostEvent = async (event) => {
	const uid = event.venue.host;
	try {
		const newEvent = await fetch(`/api/host/${uid}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ event }),
		});
		const res = await newEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
};

export const deleteHostEvent = async (uid, eventId) => {
	try {
		const deleteEvent = await fetch(
			`/api/host/${uid}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ eventId }),
			}
		);
		const res = await deleteEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
};

export const rejectHostEvent = async (uid, eventId) => {
	try {
		const deleteEvent = await fetch(
			`/api/host/${uid}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ eventId }),
			}
		);
		const res = await deleteEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
}

export const approveHostEvent = async (uid, eventId) => {
	try {
		const deleteEvent = await fetch(
			`/api/host/${uid}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ eventId }),
			}
		);
		const res = await deleteEvent.json();
		return res.ok;
	} catch (err) {
		console.log(err);
		return false;
	}
}
