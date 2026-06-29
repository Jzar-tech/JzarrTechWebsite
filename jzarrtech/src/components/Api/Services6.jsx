import React from "react";
import "./Services6.css";

import {
  FaLink,
  FaCode,
  FaPlug,
  FaServer,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLink />,
    title: "Custom API Integration",
    desc: "Tailored integrations to connect your apps, platforms, and third-party services.",
  },
  {
    icon: <FaCode />,
    title: "API Development",
    desc: "Build robust, secure, and scalable APIs that power your business.",
  },
  {
    icon: <FaPlug />,
    title: "Third-Party Integrations",
    desc: "Integrate with CRMs, ERPs, payment gateways, shipping and more.",
  },
  {
    icon: <FaServer />,
    title: "Legacy System Integration",
    desc: "Modernize and connect legacy systems with modern applications.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Data Synchronization",
    desc: "Real-time sync, automation, workflow optimization and reporting.",
  },
  {
    icon: <FaShieldAlt />,
    title: "API Security & Monitoring",
    desc: "Secure connections with monitoring, logging and performance tracking.",
  },
];

const Services6 = () => {
  return (
    <section className="api-services6">

      <div
        className="api-services6-header"
        data-aos="fade-up"
      >
        <span>OUR SERVICES</span>
        <h2>End-to-End API Integration Services</h2>
      </div>

      <div className="api-services6-grid">

        {services.map((item, index) => (

          <div
            className={`api-services6-card api-card-${index + 1}`}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <div className="api-services6-icon">
              {item.icon}
            </div>

            <div className="api-services6-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Services6;