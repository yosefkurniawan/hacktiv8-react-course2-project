import Filter from "../components/catalog/filter";
import Searchbar from "../components/catalog/searchbar";
import Layout from "../components/layout/1column";
import ProductList from "../components/catalog/product-list";

const Catalog = () => (
    <div className="page-catalog">
        <div className="toolbar">
            <Searchbar />
            <Filter />
        </div>
        <div className="product-list">
            <ProductList />
        </div>
        <style jsx>{`
            .toolbar {
                display: flex;
                border-bottom 1px solid #eee;
                padding: 0 0 20px;
                margin-bottom: 20px;
            }
        `}</style>
    </div>
);

export default Layout(Catalog);