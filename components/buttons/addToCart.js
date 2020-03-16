import Button from "./default";
import styles from "./addToCart.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { NotificationManager } from "react-notifications";

const AddToCart = ({product, cart, _addToCart}) => {
    const handleOnCLick = () => {
        _addToCart(product);
        NotificationManager.success(
            `${product.name} is successfully added into your cart!`
        );
    }
    
    const getQty = (productid) => {
        const item = cart.find(item => item.id === productid);
        return item ? item.qty : 0;
    }
    
    const createNotification = (type, message, title = "") => {
        NotificationManager.success(message, title);
    };

    return (
        <>
            <Button
                className={`add-to-cart ${styles.addToCart}`}
                title="Add to Cart"
                handleOnCLick={handleOnCLick}
                qty={getQty(product.id)}
            />
        </>
    );
};

const mapStateToProps = state => ({
    cart: state.cart
});
const mapDispatchToProps = dispatch => ({
    _addToCart: product => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
