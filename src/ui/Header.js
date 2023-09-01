import { styled } from "styled-components";
import NavBar from "./NavBar";
import Logo from "../ui/Logo";
import NumCart from "./NumCart";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid var(--color-grey-300);
  max-width: 80rem;
  margin: 0 auto;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
      <NumCart />
    </StyledHeader>
  );
}

export default Header;
