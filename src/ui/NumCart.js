import { useCart } from "../context/CartContext";

function NumCart() {
  const { cartList } = useCart();

  return <span>Cart: {cartList.length}</span>;
}

export default NumCart;
