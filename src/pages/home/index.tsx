import Container from "../../components/defaults/Container";
import ComingSoon from "../../components/home/ComingSoon";
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
      <ComingSoon />
    </Container>
  );
};

export default Home;
