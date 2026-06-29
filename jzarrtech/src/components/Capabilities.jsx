import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Capabilities.css";


import {
FiCpu,
FiGlobe,
FiShoppingCart,
FiSmartphone,
FiTrendingUp,
FiShare2,
FiPenTool,
} from "react-icons/fi";


import CapabilityCard from "./CapabilityCard";

const Capabilities = () => {

useEffect(() => {
AOS.init({
duration: 800,
once: true,
offset: 100,
});
}, []);

const data = [
{
icon: <FiCpu />,
title: "AI Agents",
description:
"Custom trained AI models to automate your sales, support, and internal operations.",
link: "/ai-agents",
},
{
icon: <FiGlobe />,
title: "Custom Websites",
description:
"High-performance, award-winning web applications built on modern tech stacks.",
link: "custom-websites",
},
{
icon: <FiShoppingCart />,
title: "E-Commerce",
description:
"Scalable Shopify & WordPress stores optimized for high-volume conversions.",
link: "Ecommerce",
},
{
icon: <FiSmartphone />,
title: "Mobile Apps",
description:
"Native iOS & Android experiences that dominate the App Store.",
link: "MobileApps",
},
{
icon: <FiTrendingUp />,
title: "SEO & Growth",
description:
"Data-driven organic search strategies that capture high-intent traffic.",
link: "Seo",
},
{
icon: <FiShare2 />,
title: "API Integrations",
description:
"Seamless connection of enterprise systems and third-party tools.",
link: "Api",
},
{
icon: <FiPenTool />,
title: "2D & 3D Graphics",
description:
"Immersive visual identities, 3D modeling, and premium branding.",
link: "Graphics",
},
];

return ( <section id="services" className="capabilities"> <div className="capabilities-container">


    <div
      className="capabilities-heading"
      data-aos="fade-up"
    >
      <h2>
        Capabilities Engineered
        <br />
        for <span>Market Leaders.</span>
      </h2>

      <p className="capabilities-subtitle">
        We don't just build software. We craft unfair advantages.
      </p>
    </div>

    <div className="capabilities-grid">
      {data.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <CapabilityCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </div>
      ))}

      <div
        className="capabilities-cta-card"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <h3>Need something custom?</h3>

        <p>
          Let's build the exact tool your business needs to scale.
        </p>

       <button
  className="cta-btn"
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Discuss Your Idea
</button>
      </div>
    </div>

    <div
      className="why-section"
      data-aos="fade-up"
    >
      <h2>
        Why Elite Companies Choose
        <br />
        <span>Jzarr Tech</span>
      </h2>

      <p>
        We don't operate like a traditional agency.
        We operate like an extension of your elite internal team.
      </p>
    </div>

  </div>
</section>


);
};

export default Capabilities;
