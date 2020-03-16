import React from 'react';
import Link from 'next/link';
import AddToCart from '../../components/buttons/addToCart';
import AddToWishlist from '../../components/buttons/addToWishlist';
import Layout from "../../components/layout/1column";
import { useRouter } from "next/router";
import { connect } from 'react-redux';
import Price from '../../components/catalog/price';

function ProductContent({catalog}) {
    const router = useRouter();
    const id = router.query.id;
    const product = catalog.filter((product) => product.id === parseInt(id))[0];

    // console.log('product');
    // console.log(catalog);
    // console.log(id);
    // console.log(product);

    // product = {
    //     id: 1,
    //     name: "Mi Note 10",
    //     image:
    //         "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-note-10/specs-img01.png",
    //     desc:
    //         "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
    //     price: "Rp 6.199.000"
    // };
    
    return (
        <div className="page-product">
            <div className="product-top">
                <div className="gallery">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="shop">
                    <h1>{product.name}</h1>
                    <p className="price">
                        <Price price={product.price} />
                    </p>
                    <div className="actions">
                        <AddToCart product={product} />
                        <AddToWishlist product={product} />
                    </div>
                </div>
            </div>
            <div className="info">
                <h2>Description</h2>
                <p>{product.desc}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    catalog: state.catalog
})

// export default ProductContent;
export default Layout(
    connect(
        mapStateToProps,
        null
    )(ProductContent)
);