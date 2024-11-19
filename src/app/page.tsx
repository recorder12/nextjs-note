import { Metadata } from "next";
import Counter from './components/Counter';
import Image from "next/image";

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function Home() {
  console.log('Home');
  return (
    <div>
      <h1>Home - V2</h1>
      <Counter />
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="shop" width={400} height={400} priority/>
    </div>
  );
}
