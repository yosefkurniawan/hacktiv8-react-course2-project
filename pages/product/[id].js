import React from 'react';
import Link from 'next/link';
import AddToCart from '../../components/buttons/addToCart';
import AddToWishlist from '../../components/buttons/addToWishlist';
import Layout from "../../components/layout/1column";
import { useRouter } from "next/router";

function ProductContent() {
    const router = useRouter();
    const id = router.query.id;
    // const products = [
    //     {
    //         id: 1,
    //         name: "Mi Note 10",
    //         image:
    //             "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-note-10/specs-img01.png",
    //         desc:
    //             "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
    //         price: "Rp 6.199.000"
    //     },
    //     {
    //         id: 2,
    //         name: "Redmi Note 8 Pro",
    //         image:
    //             "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_title_phone_p.png",
    //         desc:
    //             "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
    //         price: "Rp 4.399.000"
    //     }
    // ];
    // const productIndex = products.findIndex(product => product.id === parseInt(id));
    // const product = products[productIndex];
    const product = {
        id: 1,
        name: "Mi Note 10",
        image:
            "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-note-10/specs-img01.png",
        desc:
            "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
        price: "Rp 6.199.000"
    };
    console.log(product);
    return (
        <div className="page-product">
            <div className="product-top">
                <div className="gallery">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="shop">
                    <h1>{product.name}</h1>
                    <p className="price">{product.price}</p>
                    <div className="actions">
                        <AddToCart />
                        <AddToWishlist />
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

export default Layout(ProductContent);