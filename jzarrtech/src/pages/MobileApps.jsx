import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero4 from "../components/MobileApps/Hero4";
import Services4 from "../components/MobileApps/Services4";
import Process4 from "../components/MobileApps/Process4";
import Recent4 from "../components/MobileApps/Recent4";
import Build4 from "../components/MobileApps/Build4";

const MobileApps = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero4 />
      </div>

      <div data-aos="fade-right">
        <Services4 />
      </div>

      <div id="process" data-aos="fade-left">
        <Process4 />
      </div>

      <div id="work" data-aos="fade-up">
        <Recent4 />
      </div>

      <div data-aos="zoom-in">
        <Build4 />
      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default MobileApps;
