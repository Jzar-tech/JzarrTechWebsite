import React from "react";
import { Link } from "react-router-dom";
import "./Client3.css";
import { FaStar, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Carter",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "EcomPro Agency transformed our Shopify store. Sales increased by 120% in just 3 months. Highly recommended!",
  },
  {
    name: "Sarah Mitchell",
    country: "UK",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Their Amazon PPC management is excellent. ACOS reduced significantly and profits are up!",
  },
  {
    name: "Daniel Brown",
    country: "Australia",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "Professional team, great communication and outstanding results. Our Etsy store has never been better.",
  },
];

const Client3 = () => {
  return (
    <section className="client3-section">

      <div className="client3-container">

        <div className="client3-header">
          <span>CLIENT TESTIMONIALS</span>
          <h2>What Our Clients Say</h2>
        </div>

        <div className="client3-grid">

          {testimonials.map((item, index) => (
            <div className="client3-card" key={index}>

              <div className="client3-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="client3-review">
                "{item.review}"
              </p>

              <div className="client3-user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.country}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="client3-cta">

          <div className="client3-cta-content">
            <h3>
              Ready to Grow Your E-commerce Business?
            </h3>

            <p>
              Let's build, optimize and scale your store
              for massive growth.
            </p>
          </div>

          <Link to="/contact-consultation" className="client3-btn">
            Get Free Quote
            <FaArrowRight />
          </Link>

        

        </div>

      </div>

    </section>
  );
};

export default Client3;
