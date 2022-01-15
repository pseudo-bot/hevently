import * as React from 'react';
import Rating from '@mui/material/Rating';
import { updateUserRatings } from '../../../config/api/ratingsAPI';

export default function BasicRating({ event, uid, rating, setRating, type }) {
	return (
		<>
			{rating ? (
				<div>
					<Rating name="read-only" value={rating} readOnly />
				</div>
			) : (
				<div>
					<div className='mb-2'>Rate your experience</div>
					<Rating
						name="simple-controlled"
						value={rating}
						onChange={async (e, newValue) => {
							setRating(newValue);
							const res = await updateUserRatings(uid, event.venue.id, type, newValue);
							if (res) {
								console.log('Ratings updated');
							} else {
								console.log('Ratings not updated');
							}
						}}
					/>
				</div>
			)}
		</>
	);
}
