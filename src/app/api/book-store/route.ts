import { connect } from "@/dbConfig/dbConfig";
import Book from "@/models/BookStore";
import uploadImageToCloudinary from "@/utils/uploadToCloud";
import { NextResponse } from "next/server";

connect();



export async function POST(request: Request) {
  try {
    const requestBody = await request.formData();
    const title = requestBody.get("title");
    const author = requestBody.get("author");
    const price = requestBody.get("price");
    const examType = requestBody.get("examType");

    if (
      title === null ||
      author === null ||
      price === null ||
      examType === null
    ) {
      throw new Error("Provided title, author, price, examType and image");
    }

    console.log("request-------------------->", requestBody);

    const imageBuffer: any = requestBody.get("image");

    if (!imageBuffer) {
      return NextResponse.json({ message: "please provide an profile image" });
    }

    if (typeof imageBuffer === "object" && "arrayBuffer" in imageBuffer) {
      const file = imageBuffer as unknown as Blob;
      const mimeType = file.type;
      const fileExtension = mimeType.split("/")[1];
      const buffer = Buffer.from(await file.arrayBuffer());

      const response = await uploadImageToCloudinary(buffer, fileExtension);

      const newBook = new Book({
        title,
        author,
        image: response,
        price,
        examType,
      });

      await newBook.save();
      return NextResponse.json({
        message: "success",
        newBook,
      });
    }
  } catch (err) {
    console.error("Error in sending your request", err);
    return NextResponse.json({
      message: "Failed",
    });
  }
}


