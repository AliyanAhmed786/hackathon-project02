import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Ensure this path is correct

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse request body

    console.log("Received order data:", body);

    // Create a new order in Sanity
    const newOrder = await client.create({
      _type: "order",
      firstName: body.firstName,
      lastName: body.lastName,
      address: body.address,
      city: body.city,
      zipCode: body.zipCode,
      phone: body.phone,
      email: body.email,
      cartItems: body.cartItems, // Reference to product items
      total: body.total,
      discount: body.discount,
      orderDate: body.orderDate,
      status: "pending", // Default status
    });

    console.log("Order saved to Sanity:", newOrder);

    return NextResponse.json({ message: "Order placed successfully!", order: newOrder }, { status: 200 });
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}
