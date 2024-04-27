import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req) => {
  try {
    const url = new URL(req.url);

    const searchParams = new URLSearchParams(url.searchParams);

    const availability = searchParams.get("availability");
    const type = searchParams.get("type");
    const inter = searchParams.get("inter");
    const color = searchParams.get("color");
    const specialFeature = searchParams.get("specialFeature");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const sortBy = searchParams.get("sortBy");

    let products;

    if (
      availability ||
      type ||
      inter ||
      color ||
      specialFeature ||
      minPrice ||
      maxPrice ||
      sortBy
    ) {
      products = await prisma.products.findMany({
        where: {
          AND: [
            { OR: type?.split(",").map((t) => ({ type: { equals: t } })) },
            {
              OR: inter?.split(",").map((i) => ({ interface: { equals: i } })),
            },
            {
              OR: color?.split(",").map((c) => ({ color: { equals: c } })),
            },
            {
              OR: specialFeature?.split(",").map((sf) => ({
                specialFeature: { equals: sf },
              })),
            },
            {
              AND: {
                price: {
                  gte: parseInt(minPrice) || 0,
                  lte: parseInt(maxPrice) || 100000,
                },
              },
            },
            {
              OR: availability
                ?.split(",")
                .map((a) => ({ availability: { equals: a } })),
            },
          ],
        },
        orderBy: {
          price: sortBy || "asc",
        },
      });
    } else {
      products = await prisma.products.findMany();
    }
    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
