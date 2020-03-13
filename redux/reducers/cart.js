const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [
                ...state,
                action.item
            ]
        default:
            return state
    }
}

export default cart;