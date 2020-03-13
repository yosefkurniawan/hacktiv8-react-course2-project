import Header from "./html/header"

const layoutStyle = {
    padding: 20
};

const Layout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <main><Page /></main>
        </div>
    );
}

export default Layout;
