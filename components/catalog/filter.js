import { setFilter } from "../../redux/actions/catalogFilterAction";
import { connect } from "react-redux";

const Filter = ({filter, setFilter}) => {
    const _handleChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }
    return (
        <div className="filter">
            <form>
                <select name="category" onChange={_handleChange} value={filter}>
                    <option value="all">--All--</option>
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

const mapStateToProps = state => ({
    filter: state.catalogFilter
});

const mapDispatchToProps = dispatch => ({
    setFilter: (filter) => dispatch(setFilter(filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
