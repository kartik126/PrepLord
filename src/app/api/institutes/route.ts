import { connect } from "@/dbConfig/dbConfig";
import Institutes from "../../../models/Institutes";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { config as cloudinaryConfig } from "../../../utils/cloudinary";
import streamifier from "streamifier";

cloudinary.config(cloudinaryConfig);

connect();

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

export async function POST(request: Request) {
  try {
    const requestBody = await request.formData();
    const name: string = requestBody.get("name") as string;
    const city: string = requestBody.get("city") as string;
    const locality: string = requestBody.get("locality") as string;
    const class_mode: string = requestBody.get("class_mode") as string;
    const language: string = requestBody.get("language") as string;
    const price: string = requestBody.get("price") as string;
    const rating: string = requestBody.get("rating") as string;
    const address: string = requestBody.get("address") as string;
    const phone: string = requestBody.get("phone") as string;

    const file = requestBody.get("image_url") as Blob | null;
    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }

    const mimeType = file.type;
    const fileExtension = mimeType.split("/")[1];

    const buffer = Buffer.from(await file.arrayBuffer());

    const image = await uploadImageToCloudinary(buffer, fileExtension);

    console.log("Uploaded image URL:", typeof image, image);

    const setInstitutes = new Institutes({
      name,
      city,
      locality,
      class_mode,
      language,
      price,
      rating,
      address,
      phone,
      image_url: image,
    });

    console.log("setInstitutes:", setInstitutes);

    await setInstitutes.save();

    return NextResponse.json({
      message: "success",
      institute: setInstitutes,
    });
  } catch (error) {
    console.error("Error while saving institute data:", error);
    return NextResponse.json({
      message: "false",
    });
  }
}
function sharp(file: Blob) {
  throw new Error("Function not implemented.");
}
