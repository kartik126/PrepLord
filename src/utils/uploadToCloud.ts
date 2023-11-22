 
import { v2 as cloudinary } from "cloudinary";
import { config as cloudinaryConfig } from "./cloudinary";
import streamifier from "streamifier";

cloudinary.config(cloudinaryConfig);

export default async function uploadImageToCloudinary(
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