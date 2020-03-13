import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`logo ${styles.logo}`}>
                <Link href="/">
                    <a>NEXT MARKET</a>
                </Link>
            </div>
            <nav className={styles.pushRight}>
                <Link href="/cart">
                    <a className={styles.navLink}>Cart(0)</a>
                </Link>
                <Link href="/wishlist">
                    <a className={styles.navLink}>Wishlist(0)</a>
                </Link>
            </nav>
        </header>
    );
}