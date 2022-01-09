import { Schema, model, models } from "mongoose";

const UserEventSchema = new Schema({
  uid: {
    type: String,
    required: [true, "UID required"],
    unique: true,
  },
  wedding: {
    type: Schema.Types.Mixed,
    default: [],
  },
  corporate: {
    type: Schema.Types.Mixed,
    default: [],
  },
  birthday: {
    type: Schema.Types.Mixed,
    default: [],
  },
  social: {
    type: Schema.Types.Mixed,
    default: [],
  },
  pending: {
    type: Schema.Types.Mixed,
    default: [],
  },
});

export default models.User_Events || model("User_Events", UserEventSchema);
