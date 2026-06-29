import React from "react";
import "./Stats8.css";

import {
  FaSmile,
  FaBriefcase,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

const statsData = [
  {
    icon: <FaSmile />,
    number: "250+",
    title: "Happy Clients",
    desc: "Trusted by businesses worldwide.",
  },
  {
    icon: <FaBriefcase />,
    number: "8+",
    title: "Years of Experience",
    desc: "Delivering excellence since our inception.",
  },
  {
    icon: <FaUsers />,
    number: "50+",
    title: "Team Members",
    desc: "A talented team dedicated to success.",
  },
  {
    icon: <FaTrophy />,
    number: "500+",
    title: "Projects Completed",
    desc: "Successfully delivered across industries.",
  },
];

const Stats8 = () => {
  return (
    <section className="stats8">
      <div className="stats8-container">

        {statsData.map((item, index) => (
          <div className="stats8-card" key={index}>

            <div className="stats8-icon">
              {item.icon}
            </div>

            <h2>{item.number}</h2>

            <h4>{item.title}</h4>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats8;