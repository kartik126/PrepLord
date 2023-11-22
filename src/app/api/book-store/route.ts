import { connect } from "@/dbConfig/dbConfig";
import Book from "@/models/BookStore";
import { NextResponse } from "next/server";

connect();

export async function POST(request: Request) {
  try {
    const requestBody = await request.formData();
    const title = requestBody.get("title");
    const author = requestBody.get("author");
    const price = requestBody.get("price");
    const examType = requestBody.get("examType");
    const image = requestBody.get("image");

    if (
      title === null ||
      author === null ||
      price === null ||
      examType === null ||
      image === null
    ) {
      throw new Error("Provided title, author and price");
    }

    console.log("request-------------------->", requestBody);

    const newBook = new Book({
      title,
      author,
      price,
      examType,
      image,
    });

    await newBook.save();

    return NextResponse.json({
      message: "success",
      newBook,
    });
  } catch (err) {
    console.error("Error in sending your request", err);
    return NextResponse.json({
      message: "Failed",
    });
  }
}

export async function GET(request: Request) {
  try {
  
    const examType = request.body;
    
    const books = await Book.find({ examType });

    return NextResponse.json({
      message: "success",
      books,
    });
  } catch (err) {
    console.error("Error in sending your request", err);
    return NextResponse.json({
      message: "Failed",
      error:err
    });
  }
}


