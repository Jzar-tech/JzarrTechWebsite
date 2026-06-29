import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero6 from "../components/Api/Hero6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services6 from "../components/Api/Services6";
import Process6 from "../components/Api/Process6";
import Recent6 from "../components/Api/Recent6";
import Build6 from "../components/Api/Build6";

const Api = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero6 />
      </div>

      <div data-aos="fade-right">
        <Services6 />
      </div>

      <div id="process" data-aos="fade-left">
        <Process6 />
      </div>

      <div id="work" data-aos="fade-up">
        <Recent6 />
      </div>

      <div data-aos="zoom-in-up">
        <Build6 />
      </div>

      <Footer />
    </>
  );
};

export default Api;
