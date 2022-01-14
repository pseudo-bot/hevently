import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
	uid: {
		type: String,
		required: [true, 'UID required'],
		unique: true,
	},
	email: {
		type: String,
		required: [true, 'Email required'],
		unique: true,
	},
	accountType: {
		type: String,
		default: 'user',
	},
	displayName: {
		type: String,
		default: '',
	},
	phoneNumber: {
		type: String,
		default: '',
	},
	gender: {
		type: String,
		default: '',
	},
	city: {
		type: String,
		default: '',
	},
	state: {
		type: String,
		default: '',
	},
	dob: {
		type: Date,
		default: '',
	},
	photoURL: {
		type: String,
		default: '',
	},
});

export default models.User || model('User', UserSchema);
