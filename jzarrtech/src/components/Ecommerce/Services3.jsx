
import React from "react";
import "./Services3.css";

import {
  FaStore,
  FaPencilRuler,
  FaSearch,
  FaRocket,
  FaChartLine,
  FaBullhorn,
  FaBoxOpen,
  FaFilter,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    icon: <FaStore />,
    title: "Store Development",
    desc: "High-converting, mobile-friendly stores built for performance and growth.",
    color: "#6C4DF6",
  },
  {
    id: "02",
    icon: <FaPencilRuler />,
    title: "Store Redesign",
    desc: "Modern, responsive redesigns that improve user experience and boost sales.",
    color: "#1DA1F2",
  },
  {
    id: "03",
    icon: <FaSearch />,
    title: "Product Research",
    desc: "Winning product research using data-driven tools and market insights.",
    color: "#4CAF50",
  },
  {
    id: "04",
    icon: <FaRocket />,
    title: "SEO & Optimization",
    desc: "On-page SEO, speed optimization and technical improvements.",
    color: "#FF9800",
  },
  {
    id: "05",
    icon: <FaChartLine />,
    title: "Listing Optimization",
    desc: "SEO-optimized listings that rank higher and convert shoppers.",
    color: "#FF4081",
  },
  {
    id: "06",
    icon: <FaBullhorn />,
    title: "PPC Management",
    desc: "Profitable ad campaigns on Google, Facebook, TikTok and marketplaces.",
    color: "#6C4DF6",
  },
  {
    id: "07",
    icon: <FaBoxOpen />,
    title: "Store Management",
    desc: "Daily store management, order processing and customer support.",
    color: "#2196F3",
  },
  {
    id: "08",
    icon: <FaFilter />,
    title: "Conversion Optimization",
    desc: "Improving store UX, funnels and checkout to increase conversions.",
    color: "#00BCD4",
  },
];

const Services3 = () => {
  return (
    <section id="ecommerce-services" className="services3-section">
      <div className="services3-container">

        <div
          className="services3-header"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="services3-badge">
            ✦ OUR EXPERTISE
          </span>

          <h2>
            E-commerce Services
            <br />
            That <span>Drive Results</span>
          </h2>

          <p>
            End-to-end e-commerce solutions to launch,
            manage and grow your online business across
            all major platforms.
          </p>
        </div>

        <div className="services3-grid">
          {services.map((service, index) => (
            <div
              className="services3-card"
              key={service.id}
              style={{ "--accent": service.color }}
              data-aos={
                index % 2 === 0
                  ? "fade-right"
                  : "fade-left"
              }
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="services3-card-top">
                <div className="services3-icon">
                  {service.icon}
                </div>

                <span className="services3-number">
                  {service.id}
                </span>
              </div>

              <h3>{service.title}</h3>

              <div
                className="services3-line"
                style={{
                  background: service.color,
                }}
              />

              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services3;

