import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  topics: [topicSchema],
});

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [categorySchema],
});

const Subject = mongoose.models.Subject || mongoose.model("Subject", subjectSchema);

export default Subject;
