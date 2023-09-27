import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { config as cloudinaryConfig } from "../../../utils/cloudinary";
import streamifier from "streamifier";
import { UploadApiResponse } from "cloudinary";

cloudinary.config(cloudinaryConfig);

async function uploadImageToCloudinary(
  file: Buffer,
  folderName: string
): Promise<string> {
  return new Promise<string>((resolve: any, reject) => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(
      { folder: 'Home/images' }, // Use the provided folder name
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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as Blob | null;
    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }

    const mimeType = file.type;
    const fileExtension = mimeType.split("/")[1];

    const buffer = Buffer.from(await file.arrayBuffer());

    const imageUrl = await uploadImageToCloudinary(buffer, fileExtension);

    console.log("Uploaded image URL:", imageUrl);
    // const fileName = await uploadImageToCloudinary(
    //   buffer,
    //   fileExtension
    // );
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
