import Container from "../../components/defaults/Container";
import Features from "../../components/home/Features";
import Hero from "../../components/home/Hero";
import Merit from "../../components/home/Merit";
import Pricing from "../../components/home/Pricing";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <Pricing />
      <Merit />
    </Container>
  );
};

export default Home;
