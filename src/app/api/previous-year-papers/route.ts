import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import Papers from "../../../models/Papers";
import { connect } from "@/dbConfig/dbConfig";

connect();

const conn = mongoose.connection; // Get the Mongoose connection

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const files = data.getAll("file");
  const examName = data.get("examName");

  if (!files || !examName) {
    return NextResponse.json({
      success: false,
      message: "Files or examName missing",
    });
  }

  try {
    const papersDocs = [];

    for (const file of files) {
      if (file instanceof File) {
        const paper: {
          name: string;
          type: string;
          size: number;
          mongoId?: any; // Make mongoId optional by adding '?'
        } = {
          name: file.name,
          type: file.type,
          size: file.size,
        };

        // Read the file content and save it to MongoDB as a GridFS file
        const paperId = await saveFileToMongoDB(file);

        if (!paperId) {
          return NextResponse.json({
            success: false,
            message: "Error saving file to MongoDB",
          });
        }

        paper.mongoId = paperId;
        papersDocs.push(paper);
      }
    }

    const papersDoc = new Papers({
      exam_name: examName,
      papers: papersDocs,
    });

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

async function saveFileToMongoDB(file:any) {
  return new Promise((resolve, reject) => {
    const bucket = new GridFSBucket(conn.db, {
      bucketName: "exam-papers", // Replace with your bucket name
    });

    const uploadStream = bucket.openUploadStream(file.name);

    // Read the file content and pipe it to the upload stream
    const reader = file.stream().getReader();

    reader.read().then(function process({ done, value }:any) {
      if (done) {
        // Done reading the file
        uploadStream.end();

        // Resolve with the MongoDB ObjectId for the saved GridFS file
        resolve(uploadStream.id);
        return;
      }

      // Write the file content to the GridFS upload stream
      uploadStream.write(value);

      return reader.read().then(process);
    });
  });
}

