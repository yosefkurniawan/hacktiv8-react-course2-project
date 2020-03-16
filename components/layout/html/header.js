import Link from "next/link";
import styles from "./header.module.css";
import { connect } from "react-redux";

function Header({cart}) {
    let qty = 0;
    cart.map(function(item) {
        qty += item.qty;
    });
    return (
        <header className={styles.header}>
            <div className={`logo ${styles.logo}`}>
                <Link href="/">
                    <a>NEXT MARKET</a>
                </Link>
            </div>
            <nav className={styles.pushRight}>
                <Link href="/cart">
                    <a className={styles.navLink}>{`Cart(${qty})`}</a>
                </Link>
                <Link href="/wishlist">
                    <a className={styles.navLink}>Wishlist(0)</a>
                </Link>
            </nav>
        </header>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(Header);