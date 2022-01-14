import { Schema, model, models } from 'mongoose';

const VenueSchema = new Schema({
	// 11 - keys
	id: {
		type: String,
		unique: true,
	},
	host: {
		type: String,
	},
	value: {
		type: String,
		required: [true, 'No value'],
		default: '',
	},
	address: {
		type: String,
		required: [true, 'No address'],
		default: '',

	},
	city: {
		type: String,
		required: [true, 'No city'],
		default: '',

	},
	ratings: {
		type: Number,
		required: [true, 'No ratings'],
		default: 0,
	},
	capacity: {
		type: String,
		required: [true, 'No capacity'],
		default: '',

	},
	veg: {
		type: Number,
		required: [true, 'No veg'],
		default: 0,

	},
	nonveg: {
		type: Number,
		required: [true, 'No nonveg'],
		default: 0,

	},
	display: {
		type: String,
		required: [true, 'No display'],
		default: '',

	},
	bookings: {
		type: Schema.Types.Mixed,
		required: [true, 'No bookings'],
		default: [],
	},
});

export let WeddingVenue =
	models.Wedding_Venue || model('Wedding_Venue', VenueSchema);
export let SocialVenue =
	models.Social_Venue || model('Social_Venue', VenueSchema);
export let BirthdayVenue =
	models.Birthday_Venue || model('Birthday_Venue', VenueSchema);
export let CorporateVenue =
	models.Corporate_Venue || model('Corporate_Venue', VenueSchema);
