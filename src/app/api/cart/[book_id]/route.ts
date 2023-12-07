import Book from "@/models/BookStore";
import { Cart, CartItem } from "@/models/Cart";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: any) {
  const { book_id } = params;

  const requestBody = await request.json();

  const quantity = requestBody.quantity;

  try {
    const book = await Book.findById(book_id);

    if (!book) {
      return NextResponse.json({ error: "Book not found" });
    }

    const totalPrice = book.price * quantity;

    const cartItem = new CartItem({
      book: book._id,
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
    );

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


export async function GET(request: Request) {
  try {
    const cart = await Cart.findOne();
    return NextResponse.json(cart);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
