import React, { useEffect, useState } from "react";
import "./Process.css";

const processData = [
  {
    id: "01",
    title: "Discovery",
    description: "Deep dive into your business, goals, and market.",
  },
  {
    id: "02",
    title: "Strategy",
    description: "Architecting the technical and design roadmap.",
  },
  {
    id: "03",
    title: "UI/UX",
    description: "Crafting premium, award-winning visual experiences.",
  },
  {
    id: "04",
    title: "Development",
    description: "Building robust, scalable solutions.",
  },
  {
    id: "05",
    title: "Testing",
    description: "Rigorous QA to ensure perfection.",
  },
  {
    id: "06",
    title: "Launch",
    description: "Seamless deployment to production.",
  },
  {
    id: "07",
    title: "Growth",
    description: "Ongoing optimization and scaling.",
  },
];

const Process = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".process-timeline-section");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalHeight = section.offsetHeight;

      const scrollProgress =
        ((window.innerHeight - rect.top) / totalHeight) * 100;

      setProgress(Math.min(Math.max(scrollProgress, 0), 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
<section
  id="process"
  className="process-timeline-section"
>
  <div className="process-timeline-header">
    <h2>
      Our <span>Proven Process</span>
    </h2>

    <p>
      We leave nothing to chance. A systematic approach to
      delivering world-class digital products.
    </p>
  </div>

  <div className="timeline">

    <div className="timeline-line"></div>

    <div
      className="timeline-progress"
      style={{ height: `${progress}%` }}
    ></div>

    {processData.map((item, index) => (
      <div
        key={item.id}
        className={`timeline-item ${
          index % 2 === 0 ? "left" : "right"
        }`}
      >
        <div className="circle">
          {item.id}
        </div>

        <div className="process-timeline-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


  );
};

export default Process;
