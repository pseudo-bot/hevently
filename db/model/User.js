import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  uid: {
    type: String, 
    required: [true, "UID of user required"],
    unique: true,
  }
});

export default models.User || model('User', UserSchema);
