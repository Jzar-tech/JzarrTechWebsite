import React from "react";
import "./Services5.css";

import {
  FaBullseye,
  FaSearch,
  FaFileAlt,
  FaCog,
  FaPenNib,
  FaLink,
  FaMapMarkerAlt,
  FaChartBar,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBullseye />,
    color: "purple",
    title: "SEO Strategy & Planning",
    desc: "Customized SEO roadmaps aligned with your business goals and target audience.",
  },
  {
    icon: <FaSearch />,
    color: "blue",
    title: "Keyword Research",
    desc: "Discover high-value keywords that drive qualified traffic and conversions.",
  },
  {
    icon: <FaFileAlt />,
    color: "green",
    title: "On-Page SEO",
    desc: "Optimize content, metadata, internal linking, and user experience.",
  },
  {
    icon: <FaCog />,
    color: "orange",
    title: "Technical SEO",
    desc: "Improve speed, indexing, crawlability, and Core Web Vitals.",
  },
  {
    icon: <FaPenNib />,
    color: "pink",
    title: "Content Marketing",
    desc: "SEO-focused content strategies that build authority and attract traffic.",
  },
  {
    icon: <FaLink />,
    color: "yellow",
    title: "Link Building",
    desc: "Acquire quality backlinks to improve authority and rankings.",
  },
  {
    icon: <FaMapMarkerAlt />,
    color: "violet",
    title: "Local SEO",
    desc: "Dominate local search results and Google Business Profile rankings.",
  },
  {
    icon: <FaChartBar />,
    color: "cyan",
    title: "Analytics & Reporting",
    desc: "Detailed reports with actionable insights and ROI tracking.",
  },
];

const Services5 = () => {
  return (
    <section className="services5">
      <div className="services5-container">

        <span
          className="services5-tag"
          data-aos="fade-up"
        >
          OUR SERVICES
        </span>

        <h2
          className="services5-heading"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Complete SEO & Growth Services
        </h2>

        <p
          className="services5-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Data-driven SEO strategies and growth solutions to increase
          rankings, drive traffic, and grow your business.
        </p>

        <div className="services5-grid">

          {services.map((service, index) => (
            <div
              className={`services5-card ${service.color}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              data-aos-duration="1000"
            >
              <div className={`services5-icon ${service.color}`}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <span
                className={`services5-line ${service.color}`}
              ></span>

              <p>{service.desc}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services5;