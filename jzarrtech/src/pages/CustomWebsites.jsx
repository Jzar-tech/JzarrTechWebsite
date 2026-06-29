import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/CustomWebsites/Hero";
import WhyChoose from "../components/CustomWebsites/WhyChoose";
import WhatWeBuild from "../components/CustomWebsites/WhatWeBuild";
import Process from "../components/CustomWebsites/Process";
import StatsBar from "../components/CustomWebsites/StatsBar";
import RecentProjects from "../components/CustomWebsites/RecentProjects";
import FAQConsultation from "../components/CustomWebsites/FAQConsultation";

import AOS from "aos";
import "aos/dist/aos.css";

const CustomWebsites = () => {
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
        <Hero />
      </div>

      <div data-aos="fade-right">
        <WhyChoose />
      </div>

      <div data-aos="fade-left">
        <WhatWeBuild />
      </div>

      <div id="process" data-aos="fade-up">
        <Process />
      </div>

      <div data-aos="zoom-in">
        <StatsBar />
      </div>

      <div id="work" data-aos="fade-up">
        <RecentProjects />
      </div>

      <div data-aos="fade-up">
        <FAQConsultation />
      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default CustomWebsites;
