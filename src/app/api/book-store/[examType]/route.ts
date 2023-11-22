import { connect } from "@/dbConfig/dbConfig";
import Book from "@/models/BookStore";
import { NextResponse } from "next/server";

connect();

export async function GET(request: Request, { params }: any) {
  try {
    const { examType } = params;

    const books = await Book.find({ examType: { $regex: new RegExp(examType, 'i') } });

    return NextResponse.json({
      message: "success",
      books,
    });
  } catch (err) {
    console.error("Error in sending your request", err);
    return NextResponse.json({
      message: "Failed",
      error: err,
    });
  }
}
