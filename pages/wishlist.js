import Layout from "../components/layout/1column"
import { connect } from "react-redux";
import WishlistItem from "../components/wishlist/item";
import Button from "../components/buttons/default";

const Wishlist = ({wishlist}) => {
    let content = "";
    if (wishlist.length) {
        content = (
            <>
                <table className="table-items">
                    <thead>
                        <tr>
                            <th className="detail" colSpan="2">
                                Product Detail
                            </th>
                            <th className="price">Price</th>
                            <th className="qty">Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map(item => (
                            <WishlistItem item={item} key={item.id} />
                        ))}
                    </tbody>
                </table>
                <div className="items-actions">
                    <Button href="/" type="link" title="Continue Shopping" />
                </div>
            </>
        );
    } else {
        content = (
            <>
                <div className="noresult">You have no wishlist at the moment...</div>
                <div className="items-actions">
                    <Button href="/" type="link" title="Continue Shopping" />
                </div>
            </>
        );
    }   
    
    return (
        <div className="page-wishlist">
            <h1>Wishlist</h1>
            {content}
        </div>
    );
};

const mapStateToProps = state => ({
    wishlist: state.wishlist
})

export default Layout(connect(mapStateToProps, null)(Wishlist));
