import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  uid: {
    type: String, 
    required: [true, "UID required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
  }
});

export default models.User || model('User', UserSchema);
