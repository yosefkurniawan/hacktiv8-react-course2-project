import AddToCart from "../buttons/addToCart";
import Button from "../buttons/default";
import AddToWishlist from "../buttons/addToWishlist";
import ViewProductLink from "../buttons/viewProductLink";
import { VisibilityFilters } from "../../redux/actions/catalogFilterAction";
import { getCatalog } from "../../redux/actions/catalogAction";
import { connect } from "react-redux";

const ProductList = ({catalog, getCatalog}) => {
    // console.log('this is product-list');
    // console.log(catalog);
    const products = catalog;
    return (
        <>
            {products.map(product => (
                <div className="item" key={product.id}>
                    <div className="inner-wrapper">
                        <div className="product-image">
                            <img src={product.image} title={product.name} />
                        </div>
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-desc">{product.desc}</div>
                        <div className="product-actions">
                            <AddToCart />
                            <AddToWishlist />
                            <ViewProductLink productid={product.id} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

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

const mapDispatchToProps = dispatch => ({
    getCatalog: filter => dispatch(getCatalog(filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
