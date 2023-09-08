import mongoose from "mongoose";

const papersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  data: {
    type: Buffer, // Use the Buffer data type for binary data
    required: true,
  },
});

const fileSchema = new mongoose.Schema({
  exam_name: {
    type: String,
    required: true,
  },
  papers: [papersSchema],
});

const Papers = mongoose.models.papers || mongoose.model("papers", fileSchema);

export default Papers;
