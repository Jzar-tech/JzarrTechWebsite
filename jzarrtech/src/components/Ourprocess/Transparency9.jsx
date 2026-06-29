import React from "react";
import "./Transparency9.css";

import {
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaChartLine,
} from "react-icons/fa";

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Transparency",
    text: "We believe in clear communication and complete transparency throughout the process.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    text: "We work closely with you at every step to ensure the best possible outcomes.",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    text: "We follow industry best practices to deliver reliable, secure, and high-quality solutions.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth",
    text: "We focus on solutions that drive growth and create long-term value for your business.",
  },
];

const Transparency9 = () => {
  return (
    <section className="transparency9">
      <div className="transparency9-container">
        {values.map((item, index) => (
          <div className="transparency9-card" key={index}>
            <div className="transparency9-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Transparency9;