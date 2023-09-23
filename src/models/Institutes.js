import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
  type: String,
  image: String,
});

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
  images: [imagesSchema],
});

const Institute =
  mongoose.models.Institute || mongoose.model("Institute", instituteSchema);

export default Institute;
