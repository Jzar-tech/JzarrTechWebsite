import React, { useEffect } from "react";
import "./Process7.css";

import AOS from "aos";
import "aos/dist/aos.css";

import {
FaSearch,
FaLightbulb,
FaPencilRuler,
FaCube,
FaRocket,
FaHeadset,
} from "react-icons/fa";

const processSteps = [
{
id: "01",
icon: <FaSearch />,
title: "Discovery",
desc: "We understand your brand, goals and project requirements.",
},
{
id: "02",
icon: <FaLightbulb />,
title: "Creative Concept",
desc: "Our team develops unique concepts and visual ideas.",
},
{
id: "03",
icon: <FaPencilRuler />,
title: "Design & Sketching",
desc: "We create detailed sketches and design structures.",
},
{
id: "04",
icon: <FaCube />,
title: "2D & 3D Creation",
desc: "Professional illustrations, models and animations are crafted.",
},
{
id: "05",
icon: <FaRocket />,
title: "Final Delivery",
desc: "Optimized files delivered in all required formats.",
},
{
id: "06",
icon: <FaHeadset />,
title: "Support",
desc: "Continuous support and revisions whenever needed.",
},
];

const Process7 = () => {

useEffect(() => {
AOS.init({
duration: 1000,
easing: "ease-in-out",
once: true,
offset: 100,
});
}, []);

return ( <section className="graphics-process">

```
  <div
    className="process-header"
    data-aos="fade-up"
  >
    <span>OUR PROCESS</span>
    <h2>From Concept to Creation</h2>
  </div>

  <div className="process-timeline">

    {processSteps.map((step, index) => (
      <div
        className="process-item"
        key={index}
        data-aos="zoom-in"
        data-aos-delay={index * 150}
      >

        <div className="process-icon">
          {step.icon}
        </div>

        <span className="process-number">
          {step.id}
        </span>

        <h3>{step.title}</h3>

        <p>{step.desc}</p>

      </div>
    ))}

  </div>

</section>


);
};

export default Process7;
