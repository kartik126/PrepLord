import { connect } from "@/dbConfig/dbConfig";
import Institutes from "../../../models/Institutes";
import { NextResponse } from "next/server";

connect();

export async function POST(request: Request) {
  try {
    const requestBody = await request.formData();
    const name: any = requestBody.get("name");
    const city: any = requestBody.get("city");
    const locality: any = requestBody.get("locality");
    const class_mode: any = requestBody.get("class_mode");
    const language: any = requestBody.get("language");
    const price: any = requestBody.get("price");
    const rating: any = requestBody.get("rating");
    const address: any = requestBody.get("address");
    const phone: any = requestBody.get("phone");
    const logo: any = requestBody.getAll("logo");

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
      logo,
    });

    await setInstitutes.save();

    return NextResponse.json({
      message: "success",
      institute: setInstitutes,
    });
  } catch (error) {
    console.error("Error while saving institute data:", error);
    return NextResponse.json({
      message: "success false",
    });
  }
}
