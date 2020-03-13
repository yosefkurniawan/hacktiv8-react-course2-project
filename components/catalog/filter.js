const Filter = () => {
    return (
        <div className="filter">
            <form>
                <select name="category">
                    <option>--All--</option>
                    <option value="laptop">Laptop</option>
                    <option value="smartphone">Smart Phone</option>
                    <option value="smartwatch">Smart Watch</option>
                    <option value="accessories">Accessories</option>
                </select>
            </form>

            <style jsx>{`
                .filter {
                    margin-left: auto;
                }
            `}</style>
        </div>
    );
}

export default Filter;
