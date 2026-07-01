import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Herop from "../components/Landingpage/Herop";

import Footer from "../components/Footer";
import Navbarp from "../components/Landingpage/Navbarp";
import Portfoliop from "../components/Landingpage/Portfoliop";
import Servicesp from "../components/Landingpage/Servicesp";
import Ratingsp from "../components/Landingpage/Ratingsp";
import Pricingp from "../components/Landingpage/Pricingp";

const Landingpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbarp />

      <div data-aos="fade-up">
        <Herop />
      </div>

      <div data-aos="fade-right">
        <Portfoliop />
      </div>

      <div data-aos="fade-left">
        <Pricingp />
      </div>

      <div data-aos="zoom-in">
        <Servicesp />
      </div>

      <div data-aos="fade-up">
        <Ratingsp />
      </div>

    

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Landingpage;
