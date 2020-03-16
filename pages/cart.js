import Layout from "../components/layout/1column";
import CartItem from "../components/cart/item";
import { connect } from "react-redux";
import Button from "../components/buttons/default";
import Link from "next/link";

const Cart = ({cart}) => {
    let content = '';
    if(cart.length) {
        content = (
            <>
                <table className="table-items">
                    <thead>
                        <tr>
                            <th className="detail" colsPan="2">
                                Product Detail
                            </th>
                            <th className="price">Price</th>
                            <th className="qty">Qty</th>
                            <th className="sub-total">Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <CartItem item={item} />
                        ))}
                    </tbody>
                </table>
                <div className="items-actions">
                    <Button href="/" type="link" title="Continue Shopping" />
                </div>
            </>
        );
    }else{
        content = (
            <>
                <div class="noresult">There is no item in your cart...</div>
                <div className="cart-actions">
                    <Button href="/" type="link" title="Continue Shopping" />
                </div>
            </>
        );
    }

    return (
        <div class="page-cart">
            <h1>Shopping Cart</h1>
            {content}
        </div>
    )
}

const MapStateToProps = state => ({
    cart: state.cart
});

export default Layout(connect(MapStateToProps, null)(Cart));
