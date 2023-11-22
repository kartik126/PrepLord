import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  examType: {
    type: String,
    required: true,
  },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
