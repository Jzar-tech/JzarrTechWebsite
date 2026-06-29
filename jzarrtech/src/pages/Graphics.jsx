import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero7 from "../components/Graphics/Hero7";
import Services7 from "../components/Graphics/Services7";
import Process7 from "../components/Graphics/Process7";
import Recent7 from "../components/Graphics/Recent7";
import Build7 from "../components/Graphics/Build7";

const Graphics = () => {
useEffect(() => {
AOS.init({
duration: 1200,
easing: "ease-in-out",
once: true,
});
}, []);

return (
<> <Navbar />

<div data-aos="fade-up">
  <Hero7 />
</div>

<div data-aos="fade-right">
  <Services7 />
</div>

<div id="process" data-aos="fade-left">
  <Process7 />
</div>

<div id="work" data-aos="fade-up">
  <Recent7 />
</div>

<div data-aos="zoom-in-up">
  <Build7 />
</div>

<Footer />


</>
);

};

export default Graphics;
