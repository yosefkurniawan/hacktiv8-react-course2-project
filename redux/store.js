import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";

export const initStore = (initialState = {}) => {
    initialState = {
        catalog : [
            {
                id: 1,
                name: "Mi Note 10",
                image:
                    "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-note-10/specs-img01.png",
                desc:
                    "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
                price: 6199000,
                category: 'smartphone'
            },
            {
                id: 2,
                name: "Redmi Note 8 Pro",
                image:
                    "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-8-pro/g7_title_phone_p.png",
                desc:
                    "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
                price: 4399000,
                category: 'smartphone'
            },
            {
                id: 3,
                name: "Macbook Pro 2015",
                image:
                    "https://i2.wp.com/macoutlet.eu/wp-content/uploads/2019/08/macbook-pro-13-cali-front-z-ekranem.png?fit=1920%2C1288&ssl=1",
                desc:
                    "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
                price: 13399000,
                category: 'laptop'
            },
            {
                id: 4,
                name: "Mi Band 4",
                image:
                    "https://cf.shopee.co.id/file/e002d60bd79daa113fa1a634ab4e902b",
                desc:
                    "Tempor excepteur aute elit anim adipisicing culpa est. Lorem culpa laboris voluptate elit aliqua aliquip aute. Sint proident culpa aliquip do. Aliqua exercitation do quis culpa aute sit occaecat veniam. Commodo proident tempor voluptate cupidatat ut. Dolor minim amet consequat irure in voluptate amet exercitation elit. Laborum esse adipisicing dolor dolor consectetur est.",
                price: 449000,
                category: 'smartwatch'
            }
        ],
        cart: [],
        wishlist: [],
        catalogFilter: 'all'
    }
    // console.log(initialState);
    const middlewares = applyMiddleware(thunk);
    return createStore(rootReducer, initialState, composeWithDevTools(middlewares));
}