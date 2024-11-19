import styles from './layout.module.css';

export default function ProductsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>  
            <h1>제폼 소개 페이지!</h1>
            <section className={styles.product}>
                {children}
            </section>
        </>
    );
}