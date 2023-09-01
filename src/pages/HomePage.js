import HomeLayout from "../features/home/HomeLayout";
import useTitle from "../hooks/useTitle";

function HomePage() {
  useTitle("Home");

  return (
    <div>
      <HomeLayout />
    </div>
  );
}

export default HomePage;
