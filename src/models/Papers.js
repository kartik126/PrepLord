import mongoose from "mongoose";

const papersSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  exam_name: {
    type: String,
    required: true,
  },
  year:{
    type:String,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  file: {
    type: String,
    required: true,
  },
});

const Papers = mongoose.models.papers || mongoose.model("papers", papersSchema);

export default Papers;
