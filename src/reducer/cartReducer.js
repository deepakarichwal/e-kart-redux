function cartReducer(state, action) {
  switch (action.type) {
    case "cart/add":
      return { ...state, cartList: [...state.cartList, action.payload] };

    case "cart/remove":
      return {};

    default:
      throw new Error("Unknown action");
  }
}

export { cartReducer };
