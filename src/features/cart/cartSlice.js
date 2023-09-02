// Initial States
const initialStateCart = {
  totalPrice: 0,
  cartItems: [],
};

// Reducer
export default function cartReducer(state = initialStateCart, action) {
  switch (action.type) {
    case "cart/add":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case "cart/remove":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        totalPrice: state.totalPrice - action.payload.price,
      };

    // default:
    // throw new Error("Unknown action");

    default:
      return state;
  }
}

// Actions
export function addToCart(product) {
  return { type: "cart/add", payload: product };
}

export function removeFromCart(product) {
  return { type: "cart/remove", payload: product };
}
