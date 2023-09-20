import { Schema, model, SchemaTypes } from "mongoose";

let userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
