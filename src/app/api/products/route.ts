import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const products = await getProducts();
  return NextResponse.json(products);
}