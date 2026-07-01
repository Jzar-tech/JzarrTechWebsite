import React, { useState } from "react";
import "./Pricingp.css";
import { FaCheck } from "react-icons/fa";

const services = [
  "AI Agents",
  "Custom Websites",
  "E-Commerce",
  "Mobile Apps",
  "SEO & Growth",
  "API Integration",
  "2D & 3D Graphics",
];

const pricing = {
  "AI Agents": [
    {
      name: "BOOST",
      title: "Starter Package",
      desc: "Perfect for startups needing an AI-ready foundation.",
      price: "Custom",
      features: ["AI workflow audit", "1 automation flow", "Basic integration", "Launch support"],
    },
    {
      name: "ELEVATE",
      title: "Recommended Package",
      desc: "For teams ready to automate more of their operations.",
      price: "Custom",
      popular: true,
      features: ["AI assistant setup", "3 automation flows", "CRM/API integration", "Performance reporting"],
    },
    {
      name: "IGNITE",
      title: "Pro Package",
      desc: "Enterprise-grade AI workflows built for scale.",
      price: "Custom",
      features: ["Custom AI agent", "Advanced workflows", "Data pipeline setup", "Priority optimization"],
    },
  ],
  "Custom Websites": [
    {
      name: "BOOST",
      title: "Starter Package",
      desc: "Perfect for startups needing a premium foundation.",
      price: "Custom",
      features: ["Theme-based website", "Up to 10 pages", "Responsive layout", "SEO friendly setup"],
    },
    {
      name: "ELEVATE",
      title: "Recommended Package",
      desc: "For scaling businesses ready to dominate their market.",
      price: "Custom",
      popular: true,
      features: ["Custom sections", "Up to 20 pages", "Payment integration", "Analytics setup"],
    },
    {
      name: "IGNITE",
      title: "Pro Package",
      desc: "Enterprise-grade websites with growth capabilities.",
      price: "Custom",
      features: ["Custom design", "Content writing", "Website security", "1 month tech support"],
    },
  ],
  "E-Commerce": [
    {
      name: "BOOST",
      title: "Starter Package",
      desc: "A clean ecommerce foundation for new stores.",
      price: "Custom",
      features: ["Store setup", "Product pages", "Cart and checkout", "Responsive design"],
    },
    {
      name: "ELEVATE",
      title: "Recommended Package",
      desc: "For growing stores that need stronger sales systems.",
      price: "Custom",
      popular: true,
      features: ["WooCommerce/Shopify build", "Payment gateway", "Inventory setup", "Sales tracking"],
    },
    {
      name: "IGNITE",
      title: "Pro Package",
      desc: "Advanced ecommerce UX with conversion support.",
      price: "Custom",
      features: ["Custom ecommerce UX", "Automation setup", "Conversion optimization", "Priority support"],
    },
  ],
  "Mobile Apps": [
    {
      name: "BOOST",
      title: "Starter Package",
      desc: "Plan and prototype your mobile app idea.",
      price: "Custom",
      features: ["App idea planning", "UI screens", "Clickable prototype", "Launch roadmap"],
    },
    {
      name: "ELEVATE",
      title: "Recommended Package",
      desc: "For startups ready to build a focused MVP.",
      price: "Custom",
      popular: true,
      features: ["MVP app build", "API connection", "Admin basics", "Testing support"],
    },
    {
      name: "IGNITE",
      title: "Pro Package",
      desc: "Full mobile product delivery with backend support.",
      price: "Custom",
      features: ["Full mobile app", "Custom backend", "Store submission", "Growth support"],
    },
  ],
  "SEO & Growth": [
    {
      name: "BOOST",
      title: "Starter Package",
      desc: "A focused SEO foundation for visibility.",
      price: "Custom",
      features: ["10 keywords", "Website audit", "Keyword research", "Monthly reporting"],
    },
    {
      name: "ELEVATE",
      title: "Recommended Package",
      desc: "For brands ready to grow organic traffic.",
      price: "Custom",
      popular: true,
      features: ["25 keywords", "On-page SEO", "Technical fixes", "Backlink strategy"],
    },
    {
      name: "IGNITE",
      title: "Pro Package",
      desc: "A deeper growth package for competitive markets.",
      price: "Custom",
      features: ["50 keywords", "Content planning", "Local SEO", "Growth consultation"],
    },
  ],
  "API Integration": [
    {
      name: "BOOST",
      title: "Starter Package",
      desc: "Connect one key system cleanly.",
      price: "Custom",
      features: ["API review", "Single integration", "Basic testing", "Documentation"],
    },
    {
      name: "ELEVATE",
      title: "Recommended Package",
      desc: "For teams connecting multiple business tools.",
      price: "Custom",
      popular: true,
      features: ["Multiple integrations", "Auth setup", "Error handling", "Dashboard connection"],
    },
    {
      name: "IGNITE",
      title: "Pro Package",
      desc: "Custom API architecture for complex workflows.",
      price: "Custom",
      features: ["Custom API system", "Data sync", "Security hardening", "Monitoring setup"],
    },
  ],
  "2D & 3D Graphics": [
    {
      name: "BOOST",
      title: "Starter Package",
      desc: "Clean creative assets for everyday campaigns.",
      price: "Custom",
      features: ["Static creatives", "Brand assets", "Social post set", "Editable files"],
    },
    {
      name: "ELEVATE",
      title: "Recommended Package",
      desc: "For brands that need campaign-level visuals.",
      price: "Custom",
      popular: true,
      features: ["2D motion design", "Campaign visuals", "Ad creatives", "Source files"],
    },
    {
      name: "IGNITE",
      title: "Pro Package",
      desc: "Premium graphics with 3D and motion direction.",
      price: "Custom",
      features: ["3D product visuals", "Animation scene", "Render exports", "Creative direction"],
    },
  ],
};

export default function Pricingp() {
  const [activeService, setActiveService] = useState("2D & 3D Graphics");
  const [activeCard, setActiveCard] = useState(1);
  const plans = pricing[activeService];

  const handleServiceChange = (service) => {
    setActiveService(service);
    setActiveCard(1);
  };

  return (
    <section className="landing-pricing" id="packages">
      <div className="landing-pricing__wrap">
        <aside className="landing-pricing__services">
          <div className="landing-pricing__heading">
            <h2>
              Choose Your Package,
              <span> Achieve Your Goals!</span>
            </h2>
          </div>

          <div className="landing-pricing__tabs">
            {services.map((service) => (
              <button
                key={service}
                className={service === activeService ? "active" : ""}
                type="button"
                onClick={() => handleServiceChange(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </aside>

        <div className="landing-pricing__cards" aria-live="polite">
          {plans.map((plan, index) => (
            <article
              className={`landing-price-card ${activeCard === index ? "active" : ""}`}
              key={`${activeService}-${plan.name}`}
              onClick={() => setActiveCard(index)}
            >
              {plan.popular && <div className="landing-popular-badge"># Most Popular</div>}

              <h3>{plan.title}</h3>
              <p className="landing-price-desc">{plan.desc}</p>

              <span className="landing-starting">STARTING AT</span>

              <h4>
                {plan.price}
                {plan.price !== "Custom" && <small> PKR</small>}
              </h4>

              <hr />

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <FaCheck />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact">Request Quote</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
