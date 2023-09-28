import { Schema, model, SchemaTypes,mongoose } from "mongoose";

let userSchema = new Schema({
  name: {
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
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
