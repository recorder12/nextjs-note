import Link from 'next/link';
import styles from './layout.module.css';

export default function ProductsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href="/products/women">여성 옷</Link>
                <Link href="/products/men">남성 옷</Link>
            </nav>
            <section className={styles.product}>
                {children}
            </section>
        </>
    );
}