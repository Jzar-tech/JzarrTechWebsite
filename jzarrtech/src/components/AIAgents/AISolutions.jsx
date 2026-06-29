import React from "react";
import "./AISolutions.css";

import {
  FiMessageSquare,
  FiTarget,
  FiMessageCircle,
  FiGitBranch,
  FiHeadphones,
  FiSettings,
} from "react-icons/fi";

const AISolutions = () => {
  const solutions = [
    {
      icon: <FiMessageSquare />,
      title: "AI Chatbots",
      description:
        "Intelligent conversational agents that handle inquiries, resolve issues, and guide users 24/7.",
    },
    {
      icon: <FiTarget />,
      title: "Lead Generation Automation",
      description:
        "Automate your funnel to capture, qualify, and route high-value leads seamlessly.",
    },
    {
      icon: <FiMessageCircle />,
      title: "WhatsApp Automation",
      description:
        "Engage customers directly on their favorite platform with automated workflows.",
    },
    {
      icon: <FiGitBranch />,
      title: "CRM Integrations",
      description:
        "Connect your AI tools seamlessly with Salesforce, HubSpot, and other major CRMs.",
    },
    {
      icon: <FiHeadphones />,
      title: "Customer Support AI",
      description:
        "Deflect tickets and resolve common queries instantly with AI-powered agents.",
    },
    {
      icon: <FiSettings />,
      title: "Workflow Automation",
      description:
        "Eliminate repetitive tasks and streamline operations across your business.",
    },
  ];

  return (
    <section className="ai-solutions">
      <div className="ai-container">

        <div className="ai-heading">
          <h2>AI Solutions Built For Modern Businesses</h2>

          <p>
            We provide end-to-end AI automation services
            designed to scale your operations and improve
            customer experience.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div
              className="solution-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="solution-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AISolutions;