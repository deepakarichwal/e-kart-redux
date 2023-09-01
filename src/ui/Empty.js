import { styled } from "styled-components";

const StyledEmpty = styled.p`
  text-align: center;
  width: 30rem;
  border: 1px solid var(--color-grey-300);
  padding: 2rem 3rem;
  border-radius: 1rem;
  margin: 0 auto;
`;

function Empty({ children }) {
  return <StyledEmpty>{children}</StyledEmpty>;
}

export default Empty;
