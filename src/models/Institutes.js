import mongoose from "mongoose";

const instituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: String,
  locality: String,
  class_mode: String,
  language: String,
  price: String,
  rating: String,
  address: String,
  phone: String,
  image_url: String
});



const Institute =
  mongoose.models.Institute || mongoose.model("Institute", instituteSchema);

export default Institute;
