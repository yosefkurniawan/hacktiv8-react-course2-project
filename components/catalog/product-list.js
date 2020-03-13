import AddToCart from "../buttons/addToCart";
import Button from "../buttons/default";
import AddToWishlist from "../buttons/addToWishlist";
import ViewProductLink from "../buttons/viewProductLink";

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Mi Note 10",
            image:
                "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-note-10/specs-img01.png",
            desc:
                "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
            price: "Rp 6.199.000"
        },
        {
            id: 2,
            name: "Redmi Note 8 Pro",
            image:
                "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_title_phone_p.png",
            desc:
                "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
            price: "Rp 4.399.000"
        }
    ];
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

export default ProductList;
