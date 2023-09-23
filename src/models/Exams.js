import mongoose from "mongoose";
import toppersSchema from "../schema/topper";

const subcategorySchema = new mongoose.Schema({
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
  subcategories: [subcategorySchema],
});

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  categories: [categorySchema],
  toppers: [toppersSchema],
  past_papers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "papers",
  },
});

const Exams = mongoose.models.exams || mongoose.model("exams", examSchema);

export default Exams;
