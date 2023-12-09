import mongoose, { Schema, model, SchemaTypes} from "mongoose";

let userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    unique: true,
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  cart: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
