import React from "react";
import { Link } from "react-router-dom";
import "./Hero3.css";
import {
  FaArrowRight,
  FaShopify,
  FaAmazon,
  FaBriefcase,
  FaUsers,
  FaAward,
  FaHeadset,
} from "react-icons/fa";
import { SiEtsy, SiEbay } from "react-icons/si";
import EcommerceVideo from "./Assets/Ecommerce.mp4";

const Hero3 = () => {
  const scrollToServices = () => {
    const section = document.getElementById("ecommerce-services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero3">

        <video className="hero3-video" autoPlay loop muted playsInline > <source src={EcommerceVideo} type="video/mp4" /> </video> <div className="hero3-overlay"></div>
      <div className="hero3-container">

        {/* LEFT SIDE */}
        <div className="hero3-content">

          <div className="hero3-badge">
            🚀 E-Commerce Growth Partner
          </div>

          <h1 className="hero3-title">
            We Build, Scale & Grow Profitable
            <span> E-Commerce Brands</span>
          </h1>

          <p className="hero3-description">
            We create powerful Shopify stores, optimize Amazon
            listings, scale Etsy shops and grow eBay businesses
            through data-driven strategies and conversion-focused
            experiences.
          </p>

          <div className="hero3-buttons">
            <button
              type="button"
              className="hero3-primary-btn"
              onClick={scrollToServices}
            >
              Our Services
              <FaArrowRight />
            </button>

            <Link to="/contact-consultation" className="hero3-secondary-btn">
              Book A Call
            </Link>
          </div>

          <div className="hero3-stats">

  <div className="hero3-stat-card">
    <div className="hero3-stat-icon">
      <FaBriefcase />
    </div>

    <div className="hero3-stat-content">
      <h3>100+</h3>
      <span>Projects Delivered</span>
    </div>
  </div>

  <div className="hero3-stat-card">
    <div className="hero3-stat-icon">
      <FaUsers />
    </div>

    <div className="hero3-stat-content">
      <h3>50+</h3>
      <span>Happy Clients</span>
    </div>
  </div>

  <div className="hero3-stat-card">
    <div className="hero3-stat-icon">
      <FaAward />
    </div>

    <div className="hero3-stat-content">
      <h3>8+</h3>
      <span>Years Experience</span>
    </div>
  </div>

  <div className="hero3-stat-card">
    <div className="hero3-stat-icon">
      <FaHeadset />
    </div>

    <div className="hero3-stat-content">
      <h3>24/7</h3>
      <span>Support</span>
    </div>
  </div>

</div>
        </div>

      
{/* RIGHT SIDE */}
<div className="hero3-visual">

  <div className="hero3-glow"></div>

  

  
  <div className="hero3-platforms">

    <div className="platform-icon">
      <FaShopify />
    </div>

    <div className="platform-icon">
      <FaAmazon />
    </div>

    <div className="platform-icon">
      <SiEtsy />
    </div>

    <div className="platform-icon">
      <SiEbay />
    </div>

  </div>

</div>



      </div>
    </section>
  );
};

export default Hero3;
