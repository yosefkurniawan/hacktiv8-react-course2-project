import Button from "../buttons/default";

const Searchbar = ({ keyword, handleSearch }) => {
    const _handleSearch = e => {
        e.preventDefault();
        handleSearch(e.target.search.value);
    };
    const _onChange = e => {
        e.preventDefault();
        handleSearch(e.target.value);
    };
    return (
        <div className="searchbar">
            <form onSubmit={_handleSearch}>
                <input
                    name="search"
                    placeholder="Search product here..."
                    onChange={_onChange}
                />
                <Button type="submit" title="Search" />
            </form>
        </div>
    );
};

export default Searchbar;
