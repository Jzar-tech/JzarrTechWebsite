import React from "react";
import "./StatsBar.css";
import {
  FaUsers,
  FaSmile,
  FaAward,
  FaGlobe,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "50+",
    label: "Projects Delivered",
  },
  {
    icon: <FaSmile />,
    number: "100%",
    label: "Client Satisfaction",
  },
  {
    icon: <FaAward />,
    number: "8+",
    label: "Years of Experience",
  },
  {
    icon: <FaGlobe />,
    number: "20+",
    label: "Countries Served",
  },
];

const StatsBar = () => {
  return (
    <section className="jt-stats-section">
      <div className="jt-stats-container">

        <div
          className="jt-stats-header"
          data-aos="fade-up"
        >
          <h2>
            Why Businesses Trust
            <span> Jzarr Tech</span>
          </h2>

          <div className="jt-line"></div>
        </div>

        <div className="jt-stats-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className="jt-stat-card"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="jt-stat-icon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsBar;