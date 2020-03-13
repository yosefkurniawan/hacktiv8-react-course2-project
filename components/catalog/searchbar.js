import Button from "../buttons/default";

const Searchbar = () => {
    return (
        <div className='searchbar'>
            <form>
                <input 
                    name="search" 
                    placeholder="Search product here..."
                />
                <Button type="submit" title="Search" />
            </form>
        </div>
    );
}

export default Searchbar;
