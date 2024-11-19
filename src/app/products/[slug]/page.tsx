import GoProductsButton from "@/app/components/GoProductsButton";
import NotFound from "@/app/not-found";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({params}: Props) {
  return {
    title: `제품 디테일 - ${params.slug}`,
  };
}

// export const revalidate = 3;

export default async function ProductPage({params: {slug}}: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    return <NotFound />;
  }
  return <>
    <h1>{product.name} - 제품 디테일 페이지</h1>
    <Image 
      src={`/images/${product.image}`} 
      alt={product.name} 
      width="300" 
      height="300" 
    />
    <GoProductsButton />
  </>;
}

// pre-rendering
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id
  }))
}

// SSR, CSR

// CSR은 CSR이 필요한 component에서만 사용