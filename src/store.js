import { createStore , combineReducers , applyMiddleware} from "redux";

import thunk from "redux-thunk";

import { productListReducer , productDetailsReducer } from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer
}) 

const cartItemsFromLocalStorage =  localStorage.getItem('cartItems') 
    ? JSON.stringify(localStorage.getItem('cartItems'))
    : []


const initialState = {
    cart : {cartItems : cartItemsFromLocalStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState , applyMiddleware(...middleware))

export default store