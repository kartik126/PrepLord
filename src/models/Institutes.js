import mongoose from "mongoose";

const instituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: String,
  locality: String,
  class_Mode: String,
  language: String,
  price: Number,
  rating: Number,
  address: String,
  phone: String,
  logo: String,
});

const Institute = mongoose.models.Institute || mongoose.model('Institute', instituteSchema);

export default Institute;
