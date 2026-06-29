import React from "react";
import "./Process.css";
import {
  FaSearch,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const processData = [
  {
    icon: <FaSearch />,
    title: "Discovery",
    desc: "We understand your business goals, audience and project requirements.",
  },
  {
    icon: <FaClipboardList />,
    title: "Wireframing",
    desc: "We create a strategic structure and user journey before design starts.",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    desc: "Beautiful interfaces focused on usability, engagement and conversions.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "Clean, scalable and high-performance code built with best practices.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Testing",
    desc: "Every feature is tested for performance, security and reliability.",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
    desc: "Deployment, optimization and continuous support after launch.",
  },
];

const Process = () => {
  return (
    <section className="cw-process-section">
      <div className="cw-process-container">

        <div
          className="cw-process-header"
          data-aos="fade-up"
        >
          <h2>
            Our Development <span>Process</span>
          </h2>

          <div className="cw-process-line"></div>

          <p>
            A proven workflow designed to deliver high-quality,
            scalable and conversion-focused websites.
          </p>
        </div>

        <div className="cw-process-grid">
          {processData.map((item, index) => (
            <div
              className="cw-process-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="cw-process-number">
                {index + 1}
              </div>

              <div className="cw-process-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;