import Button from "./default";
import { connect } from "react-redux";
import { addToWishlist } from "../../redux/actions/wishlistAction";
import { NotificationManager } from "react-notifications";

const AddToWishlist = ({ product, wishlist, _addToWishlist }) => {
    const handleOnCLick = () => {
        _addToWishlist(product);
        NotificationManager.success(
            `${product.name} is successfully added into your wishlist!`
        );
    };

    const getQty = productid => {
        const item = wishlist.find(item => item.id === productid);
        return item ? item.qty : 0;
    };
    return (
        <Button
            className="add-to-wishlist"
            title="Add to Wishlist"
            handleOnCLick={handleOnCLick}
            qty={getQty(product.id)}
        />
    );
};

const mapStateToProps = state => ({
    wishlist: state.wishlist
});

const mapDispatchToProps = dispatch => ({
    _addToWishlist: (item) => dispatch(addToWishlist(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddToWishlist);
