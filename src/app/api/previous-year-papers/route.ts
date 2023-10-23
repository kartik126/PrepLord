import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { config as cloudinaryConfig } from "../../../utils/cloudinary";
import streamifier from "streamifier";
import { connect } from "@/dbConfig/dbConfig";
import Papers from "@/models/Papers";

connect();

cloudinary.config(cloudinaryConfig);

async function uploadImageToCloudinary(
  file: Buffer,
  folderName: string
): Promise<string> {
  return new Promise<string>((resolve: any, reject) => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(
      { folder: "Home/documents", resource_type: "raw" , format:"pdf"},
      function (error, result) {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          reject(error);
        } else {
          console.log("Upload successful:", result);
          resolve(result?.secure_url);
        }
      }
    );
    streamifier.createReadStream(file).pipe(cld_upload_stream);
  });
}

export async function POST(request: Request) {
  try {
    const requestBody = await request.formData();

    const title = requestBody.get("title") as string;
    const exam_name = requestBody.get("exam_name") as string;
    const year = requestBody.get("year") as string;

    const file = requestBody.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "file is required." }, { status: 400 });
    }
    const mimeType = file.type;
    const fileExtension = mimeType.split("/")[1];

    const buffer = Buffer.from(await file.arrayBuffer());

    const response_url = await uploadImageToCloudinary(buffer, fileExtension);

    console.log("Uploaded file URL:", response_url);

    const paper = new Papers({
      title: title,
      exam_name: exam_name,
      year: year,
      file: response_url,
    });

    await paper.save();

    return NextResponse.json({ success: true, paper: paper });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
