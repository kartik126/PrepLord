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
      { folder: "Home/images" },
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
    const courses: string = requestBody.get("courses") as string;
    const class_mode: string = requestBody.get("class_mode") as string;
    const language: string = requestBody.get("language") as string;
    const price: string = requestBody.get("price") as string;
    const rating: string = requestBody.get("rating") as string;
    const address: string = requestBody.get("address") as string;
    const phone: string = requestBody.get("phone") as string;
    const lattitude: string = requestBody.get("lattitude") as string;
    const longitude: string = requestBody.get("longitude") as string;
    // const galleryImages = requestBody.getAll("gallery");

    // const formDataEntryValues = Array.from(galleryImages.values());

    // console.log("*******************************", formDataEntryValues);

    const galleryImagesArray = [];
    const cloudinaryImageResponse = [];

    for (let i = 0; ; i++) {
      const galleryImage = requestBody.get(`gallery[${i}].url`);

      if (!galleryImage) {
        // If 'text' is not present, exit the loop
        break;
      }

      galleryImagesArray.push(galleryImage);
    }

    for (const formDataEntryValue of galleryImagesArray) {
      if (
        typeof formDataEntryValue === "object" &&
        "arrayBuffer" in formDataEntryValue
      ) {
        const file = formDataEntryValue as unknown as Blob;
        const mimeType = file.type;
        const fileExtension = mimeType.split("/")[1];
        const buffer = Buffer.from(await file.arrayBuffer());

        const response = await uploadImageToCloudinary(buffer, fileExtension);

        cloudinaryImageResponse.push({key:'feayured', url:response});
      }
    }

    console.log(
      "GALLERY IMAGE URLLLL *******************************>>>>>>>>>",
      cloudinaryImageResponse
    );

    const file = requestBody.get("image_url") as Blob | null;
    if (!file) {
      return NextResponse.json(
        { error: "image_url is required." },
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
      courses,
      class_mode,
      language,
      price,
      rating,
      address,
      phone,
      image_url:image,
      lattitude,
      longitude,
      gallery: cloudinaryImageResponse,
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
