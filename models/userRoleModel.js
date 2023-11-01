import mongoose, { Schema } from "mongoose";

const userRoleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Role = mongoose.model("role", userRoleSchema);
export default Role;
