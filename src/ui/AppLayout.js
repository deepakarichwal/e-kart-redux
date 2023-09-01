import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

const Main = styled.main`
  padding: 40px 20px;
  width: 100%;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <CartProvider>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </CartProvider>
  );
}

export default AppLayout;
