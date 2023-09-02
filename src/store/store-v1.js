import { combineReducers, createStore } from "redux";

const initialStateCart = {
  total: 0,
  cartItems: [],
};

function cartReducer(state = initialStateCart, action) {
  switch (action.type) {
    case "cart/add":
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case "cart/remove":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    // default:
    //   throw new Error("Unknown action");

    default:
      return state;
  }
}

// For Multiple Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

// const store = createStore(cartReducer);

// store.dispatch({
//   type: "cart/add",
//   payload: { id: 1, name: "boat", price: 20 },
// });
// console.log(store.getState());

function addToCart(product) {
  return { type: "cart/add", payload: product };
}

function removeFromCart(product) {
  return { type: "cart/remove", payload: product };
}

store.dispatch(addToCart({ id: 1, name: "boat", price: 20 }));

console.log(store.getState());
