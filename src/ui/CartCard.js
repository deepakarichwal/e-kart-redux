import { styled } from "styled-components";
import Button from "./Button";
import { useCart } from "../context/CartContext";

const StyledCartCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid var(--color-grey-300);
  overflow: hidden;
  padding: 10px;
`;

const Img = styled.img`
  width: 120px;
  border: 1px solid var(--color-grey-300);
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

const Price = styled.span`
  font-weight: 500;
`;

function CartCard({ product }) {
  const { name, price, image } = product;
  const { removeFromCart } = useCart();

  return (
    <StyledCartCard>
      <Img src={image} alt="product" />
      <Title>{name}</Title>
      <Price>${price}</Price>
      <Button variation="danger" onClick={() => removeFromCart(product)}>
        Remove
      </Button>
    </StyledCartCard>
  );
}

export default CartCard;
