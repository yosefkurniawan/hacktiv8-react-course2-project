import Link from "next/link";
import styles from "./header.module.css";
import { connect } from "react-redux";
import WishlistPopup from "../../wishlist";

function Header({cart, wishlist}) {
    let qtyCart = 0;
    let qtyWishlist = 0;
    cart.map(function(item) {
        qtyCart += item.qty;
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
                    <a className={styles.navLink}>{`Cart(${qtyCart})`}</a>
                </Link>
                <WishlistPopup />
            </nav>
        </header>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    wishlist: state.wishlist
})

export default connect(mapStateToProps, null)(Header);