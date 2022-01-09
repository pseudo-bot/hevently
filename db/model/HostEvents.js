import { Schema, model, models } from "mongoose";

const HostEventSchema = new Schema({
  uid: {
    type: String,
    required: [true, "UID required"],
    unique: true,
  },
  pending: {
    type: Schema.Types.Mixed,
    default: [],
  },
  approved: {
    type: Schema.Types.Mixed,
    default: [],
  },
});

export default models.host_events || model("host_events", HostEventSchema);
