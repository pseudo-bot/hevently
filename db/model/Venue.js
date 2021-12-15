import { Schema, model, models } from 'mongoose';

const VenueSchema = new Schema({
	value: {
		type: String,
		required: [true, 'No value'],
	},
	address: {
		type: String,
		required: [true, 'No address'],
	},
	city: {
		type: String,
		required: [true, 'No city'],
	},
	ratings: {
		type: Number,
		required: [true, 'No ratings'],
	},
	capacity: {
		type: String,
		required: [true, 'No capacity'],
	},
	veg: {
		type: Number,
		required: [true, 'No veg'],
	},
	nonveg: {
		type: Number,
		required: [true, 'No nonveg'],
	},
	display: {
		type: String,
		required: [true, 'No display'],
	},
	bookings: {
		type: Schema.Types.Mixed,
		required: [true, 'No bookings'],
	},
});

let Venue;

if (models.Venue) {
	Venue = model('Venue');
} else {
	Venue = model('Venue', VenueSchema);
}

export default Venue;
