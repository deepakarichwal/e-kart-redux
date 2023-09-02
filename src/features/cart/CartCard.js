import { styled } from "styled-components";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

const StyledCartCard = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  /* width: fit-content; */
  display: grid;
  grid-template-columns: 10rem 30rem 10rem 1fr;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--color-grey-300);
  overflow: hidden;
  padding: 10px;
  margin: 0 auto;
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

  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeFromCart(product));
  }

  return (
    <StyledCartCard>
      <Img src={image} alt="product" />
      <Title>{name}</Title>
      <Price>${price}</Price>
      <Button onClick={handleRemove} variation="danger">
        Remove
      </Button>
    </StyledCartCard>
  );
}

export default CartCard;
