import { combineReducers } from 'redux';
import catalog from "./catalog";
import cart from "./cart";
import catalogFilter from "./catalogFilter";

export default combineReducers({
    catalog,
    cart,
    catalogFilter
})