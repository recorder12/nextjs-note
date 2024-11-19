import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ 
  weight: "700",
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <Link href="/">
            <h1 className={gothic.className}>Demo Note</h1>
          </Link>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          </header>
        {children}
      </body>
    </html>
  );
}
