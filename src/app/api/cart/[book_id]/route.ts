import { connect } from "@/dbConfig/dbConfig";
import Book from "@/models/BookStore";
import { Cart, CartItem } from "@/models/Cart";
import { NextResponse } from "next/server";

connect();

export async function POST(request: Request, { params }: any) {

  try {

    const { book_id } = params;

    const requestBody = await request.formData();
  
    const quantity:any = requestBody.get("quantity");

    const book = await Book.findById(book_id);

    if (!book) {
      return NextResponse.json({ error: "Book not found" });
    }

    const totalPrice = book.price * quantity;

    const cartItem = new CartItem({
      book: {
        _id: book._id,
        title: book.title,
        author: book.author,
        image: book.image,
        price: book.price,
        examType: book.examType,
      },
      quantity,
      totalPrice,
    });

    const cart = await Cart.findOneAndUpdate(
      {},
      {
        $push: { items: cartItem },
        $inc: { totalPrice },
      },
      { upsert: true, new: true }
    )

    return NextResponse.json({
      message: "Item updated successfully",
      cart,
    });
  } catch (error) {
    console.error("Error adding Item:", error);
    return NextResponse.json({
      message: "Failed to add Item",
    });
  }
}
