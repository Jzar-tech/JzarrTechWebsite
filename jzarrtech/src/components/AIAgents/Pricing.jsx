import React from "react";
import "./Pricing.css";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "Custom",
    description: "Perfect for growing businesses starting their automation journey.",
    featured: false,
    features: [
      "1 Basic AI Chatbot",
      "WhatsApp Integration",
      "Workflow Automation",
      "Email Support",
      "Monthly Reporting",
    ],
  },
  {
    title: "Growth",
    price: "Custom",
    description: "Advanced AI solutions for scaling companies.",
    featured: true,
    features: [
      "Custom AI Agent Development",
      "Advanced CRM Integration",
      "Complex Workflow Automation",
      "Multi-channel Support",
      "Priority SLA Support",
      "Weekly Strategy Calls",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Full-scale enterprise transformation with dedicated resources.",
    featured: false,
    features: [
      "Unlimited AI Agents",
      "Custom LLM Fine-tuning",
      "On-premise Deployment",
      "Dedicated Success Manager",
      "24/7 Priority Support",
      "Analytics Dashboard",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <span className="pricing-tag">
          Transparent Pricing
        </span>

        <h2>
          Pricing Built For
          <span> Serious Growth</span>
        </h2>

        <p>
          Flexible plans designed to help businesses automate,
          scale and dominate their industry.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${
              plan.featured ? "featured" : ""
            }`}
          >
            {plan.featured && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}

            <h3>{plan.title}</h3>

            <p className="plan-desc">
              {plan.description}
            </p>

            <div className="price">
              {plan.price}
              {plan.price !== "Custom" && (
                <span>/month</span>
              )}
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <Check size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <button>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;