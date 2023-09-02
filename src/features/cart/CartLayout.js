import { styled } from "styled-components";
import CartCard from "./CartCard";
import Empty from "../../ui/Empty";
import { useSelector } from "react-redux";

const StyledCartLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
`;

// const cartList = [
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
  const { cartItems, totalPrice } = useSelector((store) => store.cart);

  return (
    <StyledCartLayout>
      {cartItems.length === 0 ? (
        <Empty>Your cart is empty 😟</Empty>
      ) : (
        <>
          <h2>
            Cart: {cartItems.length} / ${totalPrice}
          </h2>

          {cartItems.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </>
      )}
    </StyledCartLayout>
  );
}

export default CartLayout;
