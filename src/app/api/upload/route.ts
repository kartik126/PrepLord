import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { config as cloudinaryConfig } from "../../../utils/cloudinary";
import streamifier from "streamifier";
import { UploadApiResponse } from "cloudinary";
import fs from "fs";

cloudinary.config(cloudinaryConfig);

async function uploadImageToCloudinary(
  file: Buffer,
  folderName: string
): Promise<string> {
  return new Promise<string>((resolve: any, reject) => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(
      { folder: "Home/images" }, // Use the provided folder name
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

export async function POST(req: Request) {
  const formData = await req.formData();

  const image = formData.getAll("images");
  const formDataEntryValues = Array.from(image.values());

  for (const formDataEntryValue of formDataEntryValues) {
    if (
      typeof formDataEntryValue === "object" &&
      "arrayBuffer" in formDataEntryValue
    ) {
      const file = formDataEntryValue as unknown as Blob;
      const buffer = Buffer.from(await file.arrayBuffer());
      console.log("*******************************", buffer);
    }
  }
  return NextResponse.json({ success: true });
}
