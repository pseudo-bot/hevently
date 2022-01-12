import { Schema, model, models } from "mongoose";

const BadgeScheme = new Schema({
  uid: {
    type: String,
    required: [true, "UID required"],
    unique: true,
  },
  approval: {
    type: Boolean,
    default: false,
  },
  request: {
    type: Boolean,
    default: false,
  },
});

export default models.badge || model("badge", BadgeScheme);
