import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  /* gap: 0.5rem; */
`;

const StyledNavLink = styled(NavLink)`
  font-size: 17px;
  font-weight: 500;
  color: var(--color-brand-500);
  padding: 5px 15px;

  &.active {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <StyledNavLink to="home">Home</StyledNavLink>
      <StyledNavLink to="cart">Cart</StyledNavLink>
    </StyledNavBar>
  );
}

export default NavBar;
