import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import ComingSoon from "../../components/home/ComingSoon";
import Features from "../../components/home/Features";
import Hero from "../../components/home/Hero";
import Merit from "../../components/home/Merit";
import Pricing from "../../components/home/Pricing";
import ServerLocation from "../../components/home/ServerLocation";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <Pricing />
      <Merit />
      <ComingSoon />
      <ServerLocation />
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default Home;
