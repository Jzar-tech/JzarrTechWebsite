import React, { useEffect } from "react";
import "./Services7.css";

import AOS from "aos";
import "aos/dist/aos.css";

import {
FaPenNib,
FaCube,
FaCamera,
FaPlay,
FaUserCircle,
FaBoxOpen,
FaDesktop,
FaPalette,
} from "react-icons/fa";

const services = [
{
icon: <FaPenNib />,
title: "2D Illustration",
desc: "Creative illustrations that communicate your ideas with style.",
},
{
icon: <FaCube />,
title: "3D Modeling",
desc: "High-quality 3D models for products, characters and environments.",
},
{
icon: <FaCamera />,
title: "3D Rendering",
desc: "Photorealistic renders that make your visuals look stunning.",
},
{
icon: <FaPlay />,
title: "Motion Graphics",
desc: "Engaging animations that tell your story and captivate audience.",
},
{
icon: <FaUserCircle />,
title: "Character Design",
desc: "Unique characters designed to represent your brand.",
},
{
icon: <FaBoxOpen />,
title: "Product Visualization",
desc: "Realistic product visuals that boost marketing and engagement.",
},
{
icon: <FaDesktop />,
title: "UI/UX Graphics",
desc: "Beautiful UI elements and graphics for digital experiences.",
},
{
icon: <FaPalette />,
title: "Brand Identity",
desc: "Logos, branding and visual identities that leave a lasting impression.",
},
];

const Services7 = () => {

useEffect(() => {
AOS.init({
duration: 1000,
easing: "ease-in-out",
once: true,
offset: 100,
});
}, []);

return ( <section id="services" className="graphics-services">

  <div
    className="services-header"
    data-aos="fade-up"
  >
    <span>OUR SERVICES</span>
    <h2>2D & 3D Graphics Solutions</h2>
  </div>

  <div className="services-grid">

    {services.map((item, index) => (
      <div
        className="service-card"
        key={index}
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay={index * 120}
      >

        <div className="service-icon">
          {item.icon}
        </div>

        <div className="service-content">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>

      </div>
    ))}

  </div>

</section>

);
};

export default Services7;
