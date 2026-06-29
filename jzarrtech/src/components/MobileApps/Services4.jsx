
import React from "react";
import "./Services4.css";

import {
  FaMobileAlt,
  FaPencilRuler,
  FaCode,
  FaAndroid,
  FaCloudUploadAlt,
  FaRocket,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Custom Mobile App Development",
    desc: "We build custom iOS and Android apps tailored to your business goals and user needs.",
    color: "#7C4DFF",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive and user-friendly designs that provide seamless experiences.",
    color: "#3B82F6",
  },
  {
    icon: <FaCode />,
    title: "iOS App Development",
    desc: "High-performance iOS apps built with modern technologies and best practices.",
    color: "#22C55E",
  },
  {
    icon: <FaAndroid />,
    title: "Android App Development",
    desc: "Feature-rich Android applications optimized for performance and scalability.",
    color: "#F97316",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "App Deployment & Support",
    desc: "App Store & Play Store publishing with maintenance and support services.",
    color: "#EC4899",
  },
  {
    icon: <FaRocket />,
    title: "App Testing & QA",
    desc: "Rigorous testing to ensure your app is secure, bug-free and reliable.",
    color: "#FBBF24",
  },
  {
    icon: <FaChartBar />,
    title: "Maintenance & Updates",
    desc: "Continuous monitoring, updates and performance optimization.",
    color: "#8B5CF6",
  },
  {
    icon: <FaCog />,
    title: "Enterprise Mobility Solutions",
    desc: "Scalable mobile solutions for startups and enterprise businesses.",
    color: "#06B6D4",
  },
];

const Services4 = () => {
  return (
    <section className="services4">
      <div className="services4-container">

        <div className="services4-header">
          <span>OUR SERVICES</span>
          <h2>Complete Mobile App Development Services</h2>
        </div>

        <div className="services4-grid">
          {services.map((service, index) => (
            <div
              className="services4-card"
              key={index}
              style={{ "--accent": service.color }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="services4-icon"
                style={{ background: service.color }}
              >
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services4;

