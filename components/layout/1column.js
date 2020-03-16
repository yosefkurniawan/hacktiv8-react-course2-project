import Header from "./html/header"
import AddProduct from "../catalog/add-product";
import { NotificationContainer } from "react-notifications";

const layoutStyle = {
    padding: 20
};

const Layout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <main>
                <Page />
            </main>
            <AddProduct />
            <NotificationContainer />
        </div>
    );
}

export default Layout;
