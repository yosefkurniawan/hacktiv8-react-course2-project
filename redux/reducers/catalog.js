const catalog = (state = [], action) => {
    switch (action.type) {
        case 'GET_CATALOG':
            return state.map(product => 
                (product.category === action.category)
                    ? {...product, category: product.category}
                    : product
            )
        default:
            return state
    }
}

export default catalog;