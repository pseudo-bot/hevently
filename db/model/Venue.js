const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model.Venue || mongoose.model('Venue', VenueSchema);
