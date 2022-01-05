import * as React from 'react';
import Rating from '@mui/material/Rating';
import { updateRatings } from '../../../config/api/eventAPI';

export default function BasicRating({ uid, rating, setRating, type }) {
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
						onChange={async (event, newValue) => {
							setRating(newValue);
							const res = await updateRatings(newValue, uid, type);
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
