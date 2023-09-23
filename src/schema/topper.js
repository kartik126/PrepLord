import mongoose from "mongoose";

const toppersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  exam_year: {
    type: String,
    required: true,
  },
  telegram_channel: {
    type: String,
  },
});

export default toppersSchema;