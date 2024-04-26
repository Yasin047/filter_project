import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const data = await req.json();
    const newProduct = await prisma.products.create({
      data: {
        id: data.id,
        name: data.name,
        color: data.color,
        availability: data.availability,
        type: data.type,
        interface: data.interface,
        specialFeature: data.specialFeature,
        price: data.price,
        frequency: data.frequency,
        sensitivity: data.sensitivity,
        cableLength: data.cableLength,
        src: data.src,
      },
    });
    if (newProduct) {
      return NextResponse.json({
        success: true,
        message: "Product created successfully!",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
