import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import Stats from "../components/Stats";
import Capabilities from "../components/Capabilities";
import Comparison from "../components/Comparison";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import WorldwideReach from "../components/WorldwideReach";
import GlobalMap from "../components/GlobalMap";
import StatsBar from "../components/StatsBar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
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

      {/* Top Contact Section */}
      <div className="contact-top" data-aos="fade-left">
        <ContactSection />
      </div>

      <div data-aos="fade-up">
        <Trusted />
      </div>

      <div data-aos="zoom-in">
        <Stats />
      </div>

      <div data-aos="fade-up">
        <Capabilities />
      </div>

      <div data-aos="fade-right">
        <Comparison />
      </div>

      <div data-aos="fade-up">
        <Process />
      </div>

      <div data-aos="zoom-in">
        <Portfolio />
      </div>

      <div data-aos="fade-up">
        <Testimonials />
      </div>

      <div data-aos="fade-up">
        <Pricing />
      </div>

      <div data-aos="fade-up">
        <WorldwideReach />
      </div>

      <div data-aos="zoom-in">
        <GlobalMap />
      </div>

      <div data-aos="fade-up">
        <StatsBar />
      </div>

      {/* Bottom Contact Section */}
      <div className="contact-bottom" data-aos="fade-left">
        <ContactSection id="pricing-contact" />
      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Home;
