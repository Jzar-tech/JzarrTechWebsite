import React from "react";
import "./Process1.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your current workflows and identify automation opportunities.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Designing a custom AI roadmap aligned with your business goals.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Building and seamlessly connecting AI systems to your existing tools.",
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description:
      "Deploying the solution and continuously optimizing based on data.",
  },
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Our Proven Process</h2>
        <p className="process-subtitle">
          A structured approach to transforming your business with AI.
        </p>

       <Swiper
  modules={[Navigation]}
  navigation
  loop={true}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>
  {steps.map((step, index) => (
    <SwiperSlide key={index}>
      <div className="process-card">
        <span className="process-number">{step.number}</span>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
};

export default Process;