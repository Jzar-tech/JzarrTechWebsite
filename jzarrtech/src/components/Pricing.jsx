import React, { useState } from "react";
import "./Pricing.css";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const [activeCard, setActiveCard] = useState(1);

  const scrollToContact = (event) => {
    event.stopPropagation();

    const section = document.getElementById("pricing-contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const packages = [
    {
      title: "Starter Package",
      desc: "Perfect for startups needing a premium foundation.",
      price: "Custom",
      features: [
        "Premium UI/UX Design",
        "Responsive Web Development",
        "Basic SEO Setup",
        "Content Management System",
        "1 Month Post-Launch Support",
      ],
    },
    {
      title: "Recommended Package",
      desc: "For scaling businesses ready to dominate their market.",
      price: "Custom",
      popular: true,
      features: [
        "Everything in Starter",
        "Custom Web App Architecture",
        "Advanced Animations & Interactions",
        "API Integrations",
        "Conversion Rate Optimization",
        "3 Months Growth Support",
      ],
    },
    {
      title: "Pro Package",
      desc: "Enterprise-grade solutions with AI capabilities.",
      price: "Custom",
      features: [
        "Everything in Growth",
        "Custom AI Agent Integration",
        "Native Mobile App Development",
        "Enterprise Security Architecture",
        "Dedicated Account Director",
        "24/7 Priority Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <h2>
        Invest in <span>Excellence.</span>
      </h2>

      <p className="pricing-subtitle">
        Transparent, value-based partnerships. No hidden fees.
      </p>

      <div className="pricing-grid">
        {packages.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveCard(index)}
            className={`pricing-card ${
              activeCard === index ? "active" : ""
            }`}
          >
            {item.popular && (
              <div className="popular-badge">
                🔥 Most Popular
              </div>
            )}

            <h3>{item.title}</h3>

            <p className="desc">{item.desc}</p>

            <span className="starting">
              STARTING AT
            </span>

            <h1>{item.price}</h1>

            <hr />

            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck />
                  {feature}
                </li>
              ))}
            </ul>

            <button type="button" onClick={scrollToContact}>
              Request Quote
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
