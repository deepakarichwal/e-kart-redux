import { combineReducers, createStore } from "redux";
import cartReducer from "../features/cart/cartSlice";

// For Multiple Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
