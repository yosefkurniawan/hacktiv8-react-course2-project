export const setFilter = (filter) => ({
    type: "SET_FILTER",
    filter
});
export const getFilter = () => ({
    type: "GET_FILTER"
});

export const VisibilityFilters = {
    SHOW_ALL: "all",
    SHOW_SMARTPHONE: "smartphone",
    SHOW_SMARTWATCH: "smartwatch",
    SHOW_LAPTOP: "laptop",
    SHOW_ACCESSORIES: "accessories"
};

export const categories = [
    {
        value: 'smartphone',
        name: 'Smart Phone',
    },
    {
        value: 'laptop',
        name: 'Laptop',
    },
    {
        value: 'smartwatch',
        name: 'Smart Watch',
    },
    {
        value: 'accessories',
        name: 'Accessories',
    }
];