import React from "react";
import "./Process5.css";

import {
  FaSearch,
  FaLightbulb,
  FaCog,
  FaFileAlt,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    title: "Audit & Analysis",
    description:
      "We analyze your website, competitors, and industry to identify growth opportunities.",
    icon: <FaSearch />,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We create a custom SEO roadmap tailored to your business goals and market position.",
    icon: <FaLightbulb />,
  },
  {
    number: "03",
    title: "Optimization",
    description:
      "We optimize technical SEO, website performance, content structure, and on-page elements.",
    icon: <FaCog />,
  },
  {
    number: "04",
    title: "Content & Link Building",
    description:
      "We create valuable content and build high-authority backlinks to improve rankings.",
    icon: <FaFileAlt />,
  },
  {
    number: "05",
    title: "Monitoring & Reporting",
    description:
      "We continuously track rankings, traffic, and conversions with detailed reports.",
    icon: <FaChartLine />,
  },
  {
    number: "06",
    title: "Growth & Scaling",
    description:
      "We refine strategies and scale successful campaigns for long-term growth.",
    icon: <FaRocket />,
  },
];

const Process5 = () => {
  return (
    <section className="process5">
      <div className="process5-container">

        <span
          className="process5-tag"
          data-aos="fade-up"
        >
          OUR PROCESS
        </span>

        <h2
          className="process5-title"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Proven SEO Process for
          <span> Long-Term Growth</span>
        </h2>

        <div className="process5-timeline">

          {processSteps.map((step, index) => (
            <div
              className="process5-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="process5-icon">
                {step.icon}
              </div>

              <div className="process5-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process5;