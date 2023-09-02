import { styled } from "styled-components";
import ProductCard from "./ProductCard";

const StyledHomeLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const products = [
  {
    id: 5,
    name: "Infinity - JBL Tranz",
    price: 20,
    image: "assets/1.jpg",
  },
  {
    id: 1,
    name: "boAt Rockerz 400 Bluetooth",
    price: 25,
    image: "assets/2.jpg",
  },
  {
    id: 2,
    name: "ZEBRONICS Zeb-Thunder",
    price: 15,
    image: "assets/3.jpg",
  },
  {
    id: 3,
    name: "Sony WH-CH520, Wireless",
    price: 30,
    image: "assets/4.jpg",
  },
  {
    id: 4,
    name: "Hammer Bash 2.0",
    price: 22,
    image: "assets/5.jpg",
  },
];

function HomeLayout() {
  return (
    <StyledHomeLayout>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledHomeLayout>
  );
}

export default HomeLayout;
