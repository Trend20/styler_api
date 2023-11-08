import mongoose, { Schema } from "mongoose";
import Role from "./userRoleModel";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: Role,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
