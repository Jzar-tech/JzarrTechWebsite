import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQConsultation.css";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to build a custom website?",
    answer:
      "Most custom websites take between 2–8 weeks depending on complexity, integrations, and project requirements.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use React, Next.js, Node.js, Shopify, WordPress, Laravel, and modern cloud technologies.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing support, maintenance, security updates, and performance optimization.",
  },
  {
    question: "Will my website be mobile friendly?",
    answer:
      "Absolutely. Every website we build is fully responsive across desktop, tablet, and mobile devices.",
  },
];

const FAQConsultation = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="cw-faq-section">
      <div className="cw-faq-container">

        {/* Left Side */}
        <div className="cw-faq-left">
          <h2>Frequently Asked Questions</h2>

          {faqs.map((faq, index) => (
            <div
              className={`cw-faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="cw-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                {active === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </button>

              <div className="cw-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="cw-consultation-card">

          <div className="cw-glow"></div>

          <h3>
            Ready to Build Your
            <span> Custom Website?</span>
          </h3>

          <p>
            Let's create a high-performing website that
            helps your business grow, attract customers,
            and generate more revenue.
          </p>

          <Link to="/contact-consultation" className="cw-consultation-link">
            Schedule a Free Consultation
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default FAQConsultation;
