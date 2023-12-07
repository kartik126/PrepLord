import { connect } from "@/dbConfig/dbConfig";
import { Cart } from "@/models/Cart";
import { NextResponse } from "next/server";

connect();

export async function GET(request: Request) {
  try {
    const cart = await Cart.findOne()
    return NextResponse.json(cart);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}