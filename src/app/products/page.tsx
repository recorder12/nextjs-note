import { getProducts } from "@/service/products";
import { Metadata } from "next";
import Link from "next/link";
import MeowArticle from "../components/MeowArticle";
import clothesImage from '../../../public/images/clothes.jpg';
import Image from "next/image";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 제품 확인",
  description: "멋진 제품을 확인하세요.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
   <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="clothes" />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
   </>
  );
}
