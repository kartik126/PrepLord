import { connect } from "@/dbConfig/dbConfig";
import Institutes from "../../../models/Institutes";
import { NextResponse } from "next/server";

connect();

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
    
    // Get an array of logo files
    const logos: Blob[] = requestBody.getAll("logo") as Blob[];

    // Create an array of image objects from the logos
    const images = await Promise.all(logos.map(async (logo: Blob) => ({
      type: "image/jpeg", // Set the type accordingly
      image: await blobToBase64(logo) // Convert the image to base64
    })));

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
      images, // Assign the images array
    });

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

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error("Failed to convert Blob to base64."));
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}
