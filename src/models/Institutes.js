import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  imageUrl: String,
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
  image_url: String,
  lattitude: String,
  longitude: String,
  gallery: {
    type: String,
  },
});

const Institute =
  mongoose.models.Institute || mongoose.model("Institute", instituteSchema);

export default Institute;
