import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero5 from "../components/Seo/Hero5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Process5 from "../components/Seo/Process5";
import Recent5 from "../components/Seo/Recent5";
import Business5 from "../components/Seo/Business5";
import Services5 from "../components/Seo/Services5";

const Seo = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero5 />
      </div>
      
      <div data-aos="fade-up">
        <Services5 />
      </div>

      <div id="process" data-aos="fade-right">
        <Process5 />
      </div>

      <div id="work" data-aos="fade-left">
        <Recent5 />
      </div>

      <div data-aos="zoom-in-up">
        <Business5 />
      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Seo;
