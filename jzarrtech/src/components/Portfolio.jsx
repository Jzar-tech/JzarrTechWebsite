import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Portfolio.css";

import finance from "../Assets/finance.jpg";
import dine from "../Assets/dine.jpg";
import customer from "../Assets/customer.jpg";
import fabis from "../Assets/fabis.jpg";

const projects = [
  {
    category: "FINTECH WEB APP",
    title: "FinancePro",
    desc: "A complete overhaul of a legacy financial dashboard into a modern React application.",
    image: finance,
  },
  {
    category: "RESTAURANT PLATFORM",
    title: "DineDraft",
    desc: "Award-winning restaurant management and reservation system.",
    image: dine,
  },
  {
    category: "AI SOLUTION",
    title: "Customer Support AI Bot",
    desc: "Custom trained LLM agent that reduced customer support ticket resolution time by 85%.",
    image: customer,
  },
  {
    category: "E-COMMERCE",
    title: "FabisHome",
    desc: "Luxury interior design e-commerce experience optimized for high-ticket conversions.",
    image: fabis,
  },
];

const Portfolio = () => {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;

    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollProjects = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth =
      sliderRef.current.querySelector(".project-card")?.offsetWidth || 420;

    sliderRef.current.scrollBy({
      left: direction * (cardWidth + 25),
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="portfolio">
      <div className="portfolio-header">
        <div>
          <h2>
            Recent <span>Projects</span>
          </h2>

          <p>We don't just build websites. We build category leaders.</p>
        </div>
      </div>

      <div className="portfolio-slider-wrap">
        <button
          type="button"
          className="portfolio-arrow portfolio-arrow-left"
          aria-label="Previous project"
          onClick={() => scrollProjects(-1)}
        >
          <FaChevronLeft />
        </button>

        <div
          className="portfolio-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              <span className="category">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="portfolio-arrow portfolio-arrow-right"
          aria-label="Next project"
          onClick={() => scrollProjects(1)}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
