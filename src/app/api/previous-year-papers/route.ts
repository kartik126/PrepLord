import mongoose from "mongoose";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import Papers from "../../../models/Papers";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const files = data.getAll("file");
  const examName = data.get("examName"); // Assuming you have an input field named 'examName' in your form

  if (!files || !examName) {
    return NextResponse.json({
      success: false,
      message: "Files or examName missing",
    });
  }

  try {
    // Create an array to store the documents for each file
    const papersDocs = [];

    for (const file of files) {
      if (file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const paper = {
          name: file.name, // Assuming the file name should be saved as 'name'
          type: file.type, // Assuming the file type should be saved as 'type'
          size: file.size, // Assuming the file size should be saved as 'size'
          data: buffer,
        };
        papersDocs.push(paper);
      }
    }

    // Create a new Papers document with all the papers
    const papersDoc = new Papers({
      exam_name: examName,
      papers: papersDocs,
    });

    // Save the document to MongoDB
    await papersDoc.save();

    return NextResponse.json({
      success: true,
      message: "Papers saved successfully",
    });
  } catch (error) {
    console.error("Error saving papers:", error);
    return NextResponse.json({
      success: false,
      message: "Error saving papers",
    });
  }
}
