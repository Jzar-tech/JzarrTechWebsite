import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/AIAgents/Hero";
import TrustedTech from "../components/AIAgents/TrustedTech";
import AISolutions from "../components/AIAgents/AISolutions";
import WhyChooseUs from "../components/AIAgents/WhyChooseUs";
import Process from "../components/AIAgents/Process1";
import ImpactSection from "../components/AIAgents/ImpactSection";
import PortfolioShowcase from "../components/AIAgents/PortfolioShowcase";

import AOS from "aos";
import "aos/dist/aos.css";

const AIAgents = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    AOS.refreshHard();
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-right">
        <TrustedTech />
      </div>

      <div data-aos="fade-left">
        <AISolutions />
      </div>

      <div data-aos="fade-up">
        <WhyChooseUs />
      </div>

      <div id="process" data-aos="zoom-in">
        <Process />
      </div>

      <div data-aos="fade-right">
        <ImpactSection />
      </div>

      <div id="work" data-aos="fade-up">
        <PortfolioShowcase />
      </div>

      

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default AIAgents;
