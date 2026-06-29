import React, { useEffect, useState } from "react";
import "./Hero.css";
import { FaArrowRight, FaStar } from "react-icons/fa";
import arrowBg from "../Assets/arrow.png";


const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.max(1 - scrollY / 500, 0);
  const translateY = scrollY * 0.3;

  return (

    
    
   <section
  className="home-hero"
  style={{
    opacity,
    transform: `translateY(-${translateY}px)`,
    backgroundImage: `url(${arrowBg})`,
  }}
>
      <div className="home-hero-container">
        {/* LEFT */}
        <div className="home-hero-content">
          <div className="home-badge">
            <span className="home-dot"></span>
            Award-Winning Digital Agency
          </div>

          <h1>
            Design. Build.
            <br />
            <span>Scale Faster.</span>
          </h1>

          <p>
            We craft world-class digital experiences, custom software,
            eCommerce solutions, and AI systems that help ambitious brands
            scale faster and outperform the competition.
          </p>

          <div className="home-hero-buttons">
            <button
              type="button"
              className="home-primary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Book a Discovery Call
              <FaArrowRight />
            </button>

            <button
              type="button"
              className="home-secondary-btn"
              onClick={() => scrollToSection("work")}
            >
              View Our Work
            </button>
          </div>

          <div className="home-trust-section">
            <div className="home-avatars">
              <img src="https://i.pravatar.cc/50?img=1" alt="" />
              <img src="https://i.pravatar.cc/50?img=2" alt="" />
              <img src="https://i.pravatar.cc/50?img=3" alt="" />
              <img src="https://i.pravatar.cc/50?img=4" alt="" />
            </div>

            <div>
              <div className="home-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <span>Trusted by 250+ clients globally</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-hero-dashboard">
          <div className="home-dashboard-card">

            <div className="home-dashboard-header">
              <div>
                <h4>Growth Analytics</h4>
                <p>Real-time performance</p>
              </div>

              <span className="home-growth">
                +124%
              </span>
            </div>

            <div className="home-floating-card home-top-card">
              <h4>AI Automation</h4>
              <p>+78% Efficiency</p>
            </div>

            <div className="home-floating-card home-middle-card">
              <h4>Live Projects</h4>
              <p>24 Active</p>
            </div>

            <div className="home-floating-card home-bottom-card">
              <h4>Revenue Growth</h4>
              <p>+124%</p>
            </div>

            <div className="home-chart">
              {[65, 90, 75, 120, 100, 135, 115, 150, 130, 165, 145, 180].map(
                (height, index) => (
                  <div
                    key={index}
                    className="home-bar"
                    style={{ height: `${height}px` }}
                  />
                )
              )}
            </div>

            <div className="home-stats">
              <div>
                <span>Total Revenue</span>
                <h3>$1.2M</h3>
              </div>

              <div>
                <span>Active Users</span>
                <h3>45.2K</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
