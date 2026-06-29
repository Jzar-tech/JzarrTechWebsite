import React from "react";
import "./Process9.css";

import {
  FaSearch,
  FaLightbulb,
  FaPencilRuler,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const processData = [
  {
    icon: <FaSearch />,
    title: "Discover & Analyze",
    text: "We learn about your business, analyze the market, and identify opportunities to create the right solution.",
  },
  {
    icon: <FaLightbulb />,
    title: "Plan & Strategize",
    text: "We create a clear roadmap and strategy tailored to your goals, ensuring the best approach for success.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design & Develop",
    text: "Our team designs and develops high-quality, scalable, and user-friendly solutions.",
  },
  {
    icon: <FaRocket />,
    title: "Implement & Launch",
    text: "We deploy the solution with precision, ensuring everything is optimized and ready.",
  },
  {
    icon: <FaChartLine />,
    title: "Monitor & Optimize",
    text: "We continuously monitor performance and make improvements for long-term growth.",
  },
];

const Process9 = () => {
  return (
    <section className="process9">
      <div className="process9-header">
        <span>THE PROCESS</span>
        <h2>A Step-by-Step Approach</h2>
        <p>
          Our streamlined process ensures clarity, efficiency, and measurable
          results at every stage of your project.
        </p>
      </div>

      <div className="process9-timeline">
        {processData.map((item, index) => (
          <div className="process9-item" key={index}>
            <div className="process9-left">
              <div className="process9-number">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="process9-card">
              <div className="process9-icon">{item.icon}</div>

              <div className="process9-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process9;