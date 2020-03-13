const catalogFilter = (state = '', action) => {
    switch (action.type) {
        case "SET_FILTER":
            return 'all'
        default:
            return state;
    }
};

export default catalogFilter;
