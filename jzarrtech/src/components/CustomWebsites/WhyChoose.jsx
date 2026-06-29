import React from "react";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="cw-why-section">
      <div className="cw-why-container">

        <div
          className="cw-why-header"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>
            Why Choose <span>Custom Website?</span>
          </h2>

          <div className="cw-why-line"></div>

          <p>
            A custom website gives your business a unique identity,
            better performance and the flexibility to grow.
          </p>
        </div>

        <div className="cw-why-grid">

          <div
            className="cw-why-card"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="cw-why-icon">✏️</div>
            <h3>Unique Design</h3>
            <p>
              Stand out with a unique design that reflects your brand
              identity and business values.
            </p>
          </div>

          <div
            className="cw-why-card"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="cw-why-icon">🚀</div>
            <h3>High Performance</h3>
            <p>
              Optimized for speed and performance to deliver the best
              possible user experience.
            </p>
          </div>

          <div
            className="cw-why-card"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="cw-why-icon">🔍</div>
            <h3>SEO Optimized</h3>
            <p>
              Built with modern SEO best practices to improve rankings
              and drive more traffic.
            </p>
          </div>

          <div
            className="cw-why-card"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="cw-why-icon">💻</div>
            <h3>Scalable & Secure</h3>
            <p>
              Flexible, secure and scalable solutions designed for
              long-term business growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;