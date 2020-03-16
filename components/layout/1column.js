import Header from "./html/header"
import AddProduct from "../catalog/add-product";

const layoutStyle = {
    padding: 20
};

const Layout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <main><Page /></main>
            <AddProduct />
        </div>
    );
}

export default Layout;
