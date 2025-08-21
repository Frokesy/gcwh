import Container from "../../components/defaults/Container";
import Features from "../../components/home/Features";
import Hero from "../../components/home/Hero";
import Pricing from "../../components/home/Pricing";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <Pricing />
    </Container>
  );
};

export default Home;
