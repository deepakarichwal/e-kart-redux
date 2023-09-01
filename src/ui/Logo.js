import { styled } from "styled-components";
import BrandLogo from "../assets/logo.svg";

const StyledLogo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Span = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const Img = styled.img`
  width: 50px;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={BrandLogo} alt="logo" />
      <Span>E-kart</Span>
    </StyledLogo>
  );
}

export default Logo;
