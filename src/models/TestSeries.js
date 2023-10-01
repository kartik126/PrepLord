import mongoose, { Schema, model } from "mongoose";

// Define the schema for questions
const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  options: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

// Define the schema for exams
const testSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question", // Reference to the Question model
    },
  ],
  durationInMinutes: {
    type: Number,
    required: true,
  },
});

// Create models for questions and exams based on the schemas
const Question = mongoose.models.Question || mongoose.model("Question", questionSchema);
const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export { questionSchema, testSchema, Question, Test };
