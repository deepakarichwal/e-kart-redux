import { useSelector } from "react-redux";

function NumCart() {
  const { cartItems } = useSelector((store) => store.cart);

  return <span>Cart: {cartItems.length}</span>;
}

export default NumCart;
