import { NavLink } from "react-router-dom";
import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import ScrollFeatures from "../../components/defaults/ScrollFeatures";
import Testimonials from "../../components/home/Testimonials";

const BuildWebsite = () => {
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] py-20 bg-no-repeat lg:min-h-[80vh] min-h-[70vh] relative">
        <div className="flex flex-col items-center space-y-4 lg:w-[60%] pt-10 mx-auto text-center">
          <h2
            data-aos="fade-down"
            className="lg:text-[60px] text-[30px] font-semibold"
          >
            Get your website up and running with just a click!
          </h2>
          <p data-aos="fade-up" className="text-gray-900 lg:text-[24px] mt-6">
            Launch your website quickly and effortlessly. With our one-click
            setup, you can go from idea to live site in minutes.
          </p>

          <button
            data-aos="fade-up"
            className="bg-[#182A62] text-white px-6 py-2 text-[20px] font-semibold rounded-lg mt-10"
          >
            <NavLink to="/">Create website</NavLink>
          </button>
        </div>

        <div className="absolute bottom-0 w-[100%]">
          <ScrollFeatures />
        </div>
      </div>
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default BuildWebsite;
