
import React from "react";
import "./Process4.css";

import {
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    icon: <FaClipboardList />,
    title: "Requirements & Planning",
    desc: "We analyze your ideas and create a clear strategy.",
  },
  {
    number: "02",
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    desc: "We design intuitive and engaging user experiences.",
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "App Development",
    desc: "Our developers build high-quality and scalable applications.",
  },
  {
    number: "04",
    icon: <FaVial />,
    title: "Testing & QA",
    desc: "We test thoroughly to ensure performance, security and stability.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Deployment",
    desc: "We deploy your app to App Store and Play Store.",
  },
  {
    number: "06",
    icon: <FaHeadset />,
    title: "Support & Maintenance",
    desc: "We provide ongoing support and regular updates.",
  },
];

const Process4 = () => {
  return (
    <section className="process4-section">

      <div className="process4-container">

        <div
          className="process4-header"
          data-aos="fade-up"
        >
          <span>OUR PROCESS</span>

          <h2>
            Our Proven App Development Process
          </h2>
        </div>

        <div className="process4-timeline">

          {processSteps.map((step, index) => (
            <div
              className="process4-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="process4-circle">

                <div className="process4-icon">
                  {step.icon}
                </div>

                <span>{step.number}</span>

              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Process4;

