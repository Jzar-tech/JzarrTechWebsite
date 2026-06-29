import React, { useEffect } from "react";
import Hero8 from "../components/Aboutus/Hero8";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Story8 from "../components/Aboutus/Story8";
import Stats8 from "../components/Aboutus/Stats8";
import Build8 from "../components/Aboutus/Build8";

import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero8 />
      </div>

      <div data-aos="fade-right">
        <Story8 />
      </div>

      <div data-aos="fade-up">
        <Stats8 />
      </div>

      <div data-aos="fade-left">
        <Build8 />
      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;