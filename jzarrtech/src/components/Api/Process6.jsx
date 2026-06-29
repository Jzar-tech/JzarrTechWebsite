import React from "react";
import "./Process6.css";

import {
  FaSearch,
  FaCogs,
  FaCode,
  FaClipboardCheck,
  FaCloudUploadAlt,
  FaHeadset,
} from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    icon: <FaSearch />,
    title: "Requirement Analysis",
    description:
      "We understand your business needs and integration goals.",
  },
  {
    number: "02",
    icon: <FaCogs />,
    title: "API Strategy",
    description:
      "We design a custom integration strategy for your systems.",
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "Development",
    description:
      "Our experts build secure and scalable API connections.",
  },
  {
    number: "04",
    icon: <FaClipboardCheck />,
    title: "Testing",
    description:
      "We test thoroughly to ensure reliability and performance.",
  },
  {
    number: "05",
    icon: <FaCloudUploadAlt />,
    title: "Deployment",
    description:
      "Smooth deployment with zero disruption to operations.",
  },
  {
    number: "06",
    icon: <FaHeadset />,
    title: "Monitoring & Support",
    description:
      "Continuous monitoring and ongoing technical support.",
  },
];

const Process6 = () => {
  return (
    <section className="process6-section">

      <div
        className="process6-header"
        data-aos="fade-up"
      >
        <span>OUR PROCESS</span>
        <h2>Our API Integration Process</h2>
      </div>

      <div className="process6-timeline">

        {processSteps.map((step, index) => (
          <div
            className="process6-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >

            <div className="process6-icon">
              {step.icon}
            </div>

            <div className="process6-number">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Process6;