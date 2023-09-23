import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Papers from "../../../models/Papers";
import { connect } from "@/dbConfig/dbConfig";
import { GridFsStorage } from "multer-gridfs-storage";

connect();

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const files = data.getAll("file");
  const examName = data.get("examName");

}


