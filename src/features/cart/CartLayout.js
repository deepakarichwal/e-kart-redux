import { styled } from "styled-components";
import CartCard from "../../ui/CartCard";
import { useCart } from "../../context/CartContext";
import Empty from "../../ui/Empty";

const StyledCartLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// const cartProducts = [
//   {
//     id: 1,
//     name: "boAt Rockerz 400 Bluetooth",
//     price: 25,
//     image: "assets/2.jpg",
//   },
//   {
//     id: 2,
//     name: "ZEBRONICS Zeb-Thunder",
//     price: 15,
//     image: "assets/3.jpg",
//   },
// ];

function CartLayout() {
  const { cartList, total } = useCart();

  return (
    <StyledCartLayout>
      {cartList.length === 0 ? (
        <Empty>Your cart is empty 😟</Empty>
      ) : (
        <>
          <h2>
            Cart: {cartList.length} / ${total}
          </h2>

          {cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </>
      )}
    </StyledCartLayout>
  );
}

export default CartLayout;
