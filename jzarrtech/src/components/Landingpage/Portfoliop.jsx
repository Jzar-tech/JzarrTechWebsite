import React from "react";
import "./Portfoliop.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const leftItems = [
  {
    id: 1,
    title: "Restaurant Campaign",
    cat: "Web Design",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=85",
    link: "https://www.behance.net/search/projects/restaurant%20website",
  },
  {
    id: 2,
    title: "Social Media Launch",
    cat: "Marketing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    link: "https://www.behance.net/search/projects/social%20media%20campaign",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    cat: "Development",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=85",
    link: "https://www.behance.net/search/projects/ecommerce%20website",
  },
];

const rightItems = [
  {
    id: 4,
    title: "Brand Identity",
    cat: "Branding",
    image:
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1200&q=85",
    link: "https://www.behance.net/search/projects/brand%20identity",
  },
  {
    id: 5,
    title: "SEO Growth",
    cat: "SEO",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=85",
    link: "https://www.behance.net/search/projects/seo%20marketing",
  },
  {
    id: 6,
    title: "Mobile App UI",
    cat: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    link: "https://www.behance.net/search/projects/mobile%20app%20ui",
  },
];

function PortfolioPanel({ item, side }) {
  return (
    <a
      className={`portfolio-panel portfolio-panel--${side}`}
      href={item.link}
      target="_blank"
      rel="noreferrer"
    >
      <img src={item.image} alt={item.title} />
      <div className="portfolio-panel__content">
        <span>{item.cat}</span>
        <h3>{item.title}</h3>
      </div>
    </a>
  );
}

export default function Portfoliop() {
  return (
    <section className="landing-portfolio-showcase" id="portfolio">
      <div className="portfolio-strip">
        <div className="portfolio-side portfolio-side--left">
          <Swiper
            className="portfolio-side-slider"
            modules={[Navigation, Autoplay]}
            loop
            speed={650}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            navigation={{
              prevEl: ".portfolio-left-prev",
              nextEl: ".portfolio-left-next",
            }}
          >
            {leftItems.map((item) => (
              <SwiperSlide key={item.id}>
                <PortfolioPanel item={item} side="left" />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="lp-portfolio-arrow portfolio-left-prev" aria-label="Previous left portfolio">
            ‹
          </button>
          <button className="lp-portfolio-arrow portfolio-left-next" aria-label="Next left portfolio">
            ›
          </button>
        </div>

        <div className="portfolio-hello">
          <h2>HELLO!</h2>
          <p>We have been working with clients to create the next big things.</p>
        </div>

        <div className="portfolio-side portfolio-side--right">
          <Swiper
            className="portfolio-side-slider"
            modules={[Navigation, Autoplay]}
            loop
            speed={650}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".portfolio-right-prev",
              nextEl: ".portfolio-right-next",
            }}
          >
            {rightItems.map((item) => (
              <SwiperSlide key={item.id}>
                <PortfolioPanel item={item} side="right" />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="lp-portfolio-arrow portfolio-right-prev" aria-label="Previous right portfolio">
            ‹
          </button>
          <button className="lp-portfolio-arrow portfolio-right-next" aria-label="Next right portfolio">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
