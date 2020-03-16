import AddToCart from "../buttons/addToCart";
import Button from "../buttons/default";
import AddToWishlist from "../buttons/addToWishlist";
import ViewProductLink from "../buttons/viewProductLink";
import { VisibilityFilters, getFilter } from "../../redux/actions/catalogFilterAction";
import { connect } from "react-redux";
import Link from "next/link";
import Price from "./price";

const ProductList = ({ catalog, _getFilter,keyword }) => {

    const products = catalog.filter(function(product) {
        if (keyword !== "") {
            const result = product.name
                .toLowerCase()
                .indexOf(keyword.toLowerCase());
            if (result > -1) {
                return product;
            }
        } else {
            return product;
        }
    });

    if (!products.length) {
        return <div className="noresult">Product not found...</div>;
    }

    return (
        <>
            {products.map(product => (
                <div className="item" key={product.id}>
                    <div className="inner-wrapper">
                        <div className="product-image">
                            <img src={product.image} title={product.name} />
                        </div>
                        <div className="product-name">
                            <span>{product.name}</span>
                        </div>
                        <div className="product-price">
                            <Price price={product.price} />
                        </div>
                        <div className="product-desc">
                            <p>{product.desc}</p>
                        </div>
                        <div className="product-actions">
                            <AddToCart product={product} />
                            <AddToWishlist product={product} />
                            <ViewProductLink productid={product.id} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

const getVisibleProducts = (catalog, filter) => {
    // console.log(catalog);
    // console.log(filter);
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return catalog;
        case VisibilityFilters.SHOW_SMARTPHONE:
            return catalog.filter(product => product.category === filter);
        case VisibilityFilters.SHOW_SMARTWATCH:
            return catalog.filter(product => product.category === filter);
        case VisibilityFilters.SHOW_LAPTOP:
            return catalog.filter(product => product.category === filter);
        case VisibilityFilters.SHOW_ACCESSORIES:
            return catalog.filter(product => product.category === filter);
        default:
            throw new Error('Unknown filter: '+filter)
    }
}

const mapStateToProps = state => ({
    catalog: getVisibleProducts(state.catalog, state.catalogFilter)
})

export default connect(
    mapStateToProps,
    null
)(ProductList);
