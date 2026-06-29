import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero3 from "../components/Ecommerce/Hero3";
import Services3 from "../components/Ecommerce/Services3";
import Platform from "../components/Ecommerce/Platform";
import Recent3 from "../components/Ecommerce/Recent3";
import Client3 from "../components/Ecommerce/Client3";

const Ecommerce = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero3 />
      </div>

      <div id="process" data-aos="fade-right">
        <Services3 />
      </div>

      <div data-aos="fade-left">
        <Platform />
      </div>

      <div id="work" data-aos="fade-right">
        <Recent3 />
      </div>

      <div data-aos="fade-left">
        <Client3 />
      </div>

      <Footer />
    </>
  );
};

export default Ecommerce;
