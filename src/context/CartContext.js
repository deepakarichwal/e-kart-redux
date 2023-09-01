import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  total: 0,
  cartList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add":
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
        total: state.total + action.payload.price,
      };

    // case "cart/add":
    //   return { ...state, cartList: action.payload };

    case "cart/remove":
      return {
        ...state,
        cartList: state.cartList.filter(
          (current) => current.id !== action.payload.id
        ),
        total: state.total - action.payload.price,
      };

    default:
      throw new Error("Unknown action");
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(product) {
    dispatch({ type: "cart/add", payload: product });
  }

  // function addToCart(product) {
  //   dispatch({ type: "cart/add", payload: [...state.cartList, product] });
  // }

  function removeFromCart(product) {
    dispatch({ type: "cart/remove", payload: product });
  }

  // function removeFromCart(product) {
  //   dispatch({
  //     type: "cart/remove",
  //     payload: state.cartList.filter((current) => current.id !== product.id),
  //   });
  // }

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("Error");

  return context;
}

export { CartProvider, useCart };
