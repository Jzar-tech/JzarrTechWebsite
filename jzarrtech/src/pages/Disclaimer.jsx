import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TermsAndConditions.css";

const sections = [
  {
    title: "1. General Information Only",
    body: [
      "The content provided on the JzarrTech website is for general informational, promotional, educational, and business communication purposes only. The website may describe our services, skills, experience, process, technology capabilities, previous work, project examples, business approach, digital solutions, service categories, tools, and general industry knowledge. However, such content is not intended to be a complete, final, or legally binding statement of what JzarrTech will deliver in every case.",
      "Technology, digital marketing, software development, search engine optimization, paid advertising, eCommerce marketplaces, app development, artificial intelligence, business registration, online platforms, and web performance are constantly changing fields. Information that is accurate today may become outdated due to changes in platform policies, search engine algorithms, hosting environments, software versions, third-party tools, government requirements, tax rules, advertising policies, marketplace rules, payment gateway requirements, cybersecurity risks, or technical standards.",
      "JzarrTech makes reasonable efforts to keep website information accurate and updated, but we do not guarantee that every page, service description, feature list, price estimate, timeline, screenshot, case study, comparison, blog post, technical explanation, or statement will always be complete, current, error-free, or applicable to your particular business situation. You should not make business, technical, financial, legal, operational, or investment decisions solely on the basis of website content without obtaining a direct consultation, written proposal, service agreement, or independent professional advice where required.",
    ],
  },
  {
    title: "2. No Professional Legal, Tax, Financial, or Investment Advice",
    body: [
      "JzarrTech may provide digital services that relate to business growth, online stores, marketing, eCommerce operations, LLC registration assistance, documentation support, website setup, advertising setup, technical implementation, and business process support. However, unless clearly stated in a separate written agreement, JzarrTech does not provide legal advice, tax advice, financial advice, accounting advice, investment advice, securities advice, insurance advice, or regulatory compliance advice.",
      "Any information related to company registration, LLC formation, business documentation, Amazon stores, Shopify stores, eCommerce models, online business setup, payment accounts, taxation, compliance, marketplace requirements, or government documentation is provided for general support and facilitation only. It should not be considered a substitute for advice from a qualified lawyer, chartered accountant, tax consultant, financial advisor, registered agent, compliance expert, or relevant government authority.",
      "Clients are solely responsible for ensuring that their business activities, company registrations, tax filings, product listings, advertising claims, contracts, documents, payments, imports, exports, marketplace activities, and business operations comply with all applicable laws, rules, regulations, platform policies, and jurisdiction-specific requirements. JzarrTech will not be responsible for any penalty, rejection, audit, suspension, legal dispute, tax liability, account limitation, business loss, registration delay, documentation error, or compliance issue that occurs because a client relied only on general information or failed to obtain qualified professional advice.",
    ],
  },
  {
    title: "3. No Guarantee of Results",
    body: [
      "JzarrTech may provide services related to SEO, website development, app development, AI automation, Shopify development, WordPress development, PPC advertising, Meta Ads, Google Ads, Amazon support, eCommerce management, content support, branding, digital strategy, lead generation, conversion optimization, and technical consulting. While our team may apply professional methods, proven processes, industry practices, research, tools, and experience, we do not guarantee any specific result unless such guarantee is expressly written in a signed contract.",
      "Digital results depend on many factors outside JzarrTech's control. These factors may include market competition, client budget, client response time, product quality, pricing, customer demand, website history, domain authority, technical limitations, hosting quality, search engine algorithms, platform policies, advertising account status, payment method health, creative quality, audience behavior, seasonality, economic conditions, regulatory restrictions, tracking accuracy, competitor activity, marketplace rules, and changes made by third-party platforms.",
      "For SEO services, JzarrTech does not guarantee first-page rankings, fixed keyword positions, featured snippets, AI search visibility, organic traffic levels, domain authority growth, backlink acceptance, indexing speed, conversion rates, lead volume, revenue, or search engine approval. Search engines control how pages are crawled, indexed, ranked, and displayed. SEO work can improve technical quality, relevance, content depth, internal linking, site structure, authority signals, and user experience, but final ranking decisions remain outside our direct control.",
      "For PPC, Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, or other paid campaigns, JzarrTech does not guarantee account approval, ad approval, policy approval, fixed cost per click, fixed lead cost, fixed conversion rate, fixed sales volume, fixed return on ad spend, uninterrupted ad delivery, or protection from platform review, rejection, restriction, suspension, or disapproval. Advertising platforms may change their policies, review systems, auction dynamics, account requirements, and enforcement practices at any time.",
      "For eCommerce services, including Shopify, Amazon, Etsy, Walmart, eBay, or related marketplace support, JzarrTech does not guarantee store approval, product approval, listing ranking, sales volume, profit margin, customer reviews, account health, marketplace acceptance, uninterrupted selling privileges, or protection from account suspension. Marketplaces and payment gateways have their own policies, risk checks, verification processes, and enforcement systems.",
    ],
  },
  {
    title: "4. Website, Software, App, and Development Disclaimer",
    body: [
      "JzarrTech may design, develop, customize, maintain, optimize, or support websites, web applications, mobile applications, dashboards, CRM systems, landing pages, automation tools, API integrations, WordPress websites, Shopify stores, custom software, lead capture systems, and other digital products. While we aim to deliver professional, secure, scalable, and user-friendly digital solutions, technology projects always involve limitations, dependencies, and operational risks.",
      "No website, app, server, plugin, theme, script, API, database, automation system, AI agent, third-party integration, or software product can be guaranteed to operate without errors, interruptions, bugs, compatibility issues, security risks, downtime, speed fluctuations, data conflicts, hosting limitations, browser issues, device-specific differences, or future maintenance requirements. JzarrTech may test deliverables before launch, but live environments can behave differently due to hosting settings, traffic spikes, plugin conflicts, third-party code, browser updates, operating system updates, API changes, CDN behavior, caching issues, database size, user actions, and external attacks.",
      "Clients are responsible for providing accurate requirements, timely feedback, approved content, brand assets, hosting access, domain access, third-party account access, API credentials, product information, legal pages, policies, images, videos, payment gateway information, and any other material required for project completion. Delays, errors, incomplete information, unauthorized changes, third-party restrictions, or missing approvals may affect project quality, timeline, cost, and final delivery.",
      "Unless otherwise stated in a written service agreement, post-delivery maintenance, bug fixing, updates, security monitoring, hosting management, plugin renewals, license renewals, content updates, feature enhancements, backups, malware removal, server optimization, and ongoing support are not automatically included after project completion. These services may require a separate maintenance plan or additional charges.",
    ],
  },
  {
    title: "5. AI and Automation Disclaimer",
    body: [
      "JzarrTech may provide AI-related services, AI agents, automation workflows, chatbots, lead qualification systems, content assistance tools, AI-powered dashboards, CRM automation, data processing workflows, or other artificial intelligence solutions. AI tools can improve speed, workflow efficiency, customer engagement, and decision support, but they are not perfect and should not be treated as fully independent human judgment.",
      "AI-generated outputs may contain errors, incomplete information, outdated information, hallucinated responses, biased results, inaccurate recommendations, misunderstood context, or results that require human review. Clients are responsible for reviewing, approving, verifying, and supervising any AI output before using it in business, legal, financial, medical, educational, marketing, customer support, public communication, or operational decisions.",
      "JzarrTech does not guarantee that AI agents, chatbots, automated workflows, lead scoring tools, recommendation systems, or AI-generated content will always be accurate, compliant, secure, unbiased, uninterrupted, profitable, or suitable for every use case. AI systems may depend on third-party APIs, model providers, prompts, data quality, user inputs, account limits, internet access, software updates, and external platform availability. Any interruption, API change, pricing change, data issue, model change, or policy change by a third-party AI provider may affect the performance of AI-related solutions.",
      "Clients must not use AI tools provided, configured, or supported by JzarrTech for illegal, deceptive, harmful, discriminatory, infringing, fraudulent, abusive, or unauthorized activities. Clients are responsible for ensuring that their use of AI complies with applicable laws, privacy rules, platform policies, industry standards, and ethical business practices.",
    ],
  },
  {
    title: "6. Third-Party Platforms and External Services",
    body: [
      "Many JzarrTech services may depend on third-party platforms, tools, APIs, plugins, payment gateways, hosting providers, marketplaces, advertising networks, domain registrars, analytics tools, email providers, CRM systems, AI model providers, social media platforms, and software vendors. Examples may include, but are not limited to, Google, Meta, Shopify, WordPress, Amazon, payment gateways, hosting companies, cloud providers, email platforms, CRM providers, analytics services, and marketplace platforms.",
      "JzarrTech does not own or control these third-party platforms. We are not responsible for their downtime, policy changes, account restrictions, price changes, feature removals, technical errors, security incidents, approval decisions, verification requirements, support delays, API changes, algorithm updates, billing issues, refund policies, data handling practices, or enforcement actions.",
      "If a third-party platform rejects an ad, suspends an account, changes a rule, removes a feature, increases pricing, limits API access, restricts a payment method, blocks a store, flags a listing, delays verification, changes ranking criteria, or modifies its terms of service, JzarrTech will not be responsible for losses, delays, additional costs, missed opportunities, or business disruption caused by such third-party action. We may provide support within the scope of our agreement, but final decisions by third-party platforms remain outside our control.",
    ],
  },
  {
    title: "7. Client Responsibility and Accuracy of Information",
    body: [
      "Clients and website users are responsible for ensuring that all information submitted to JzarrTech is accurate, lawful, complete, current, and authorized. This includes names, business details, contact information, login credentials, product information, tax details, company details, brand assets, images, written content, advertising claims, financial information, legal documents, marketplace information, and technical access credentials.",
      "JzarrTech may rely on information provided by the client to prepare proposals, create websites, configure software, set up campaigns, write content, build eCommerce stores, register accounts, integrate tools, create reports, or provide recommendations. If the information provided by the client is incorrect, incomplete, misleading, outdated, unauthorized, or unlawful, JzarrTech will not be responsible for any resulting error, rejection, delay, loss, penalty, claim, dispute, or damage.",
      "Clients must also ensure that they have the legal right to use all logos, images, videos, brand names, trademarks, written content, product photos, customer data, testimonials, licenses, scripts, themes, plugins, fonts, software, and other materials supplied to JzarrTech. JzarrTech is not responsible for copyright, trademark, privacy, licensing, or ownership disputes arising from client-provided materials.",
    ],
  },
  {
    title: "8. Intellectual Property Disclaimer",
    body: [
      "All website content, designs, layouts, graphics, service descriptions, branding elements, text, icons, images, code structures, templates, concepts, strategies, reports, and materials created by or for JzarrTech may be protected by copyright, trademark, trade dress, design rights, or other intellectual property laws. Users may not copy, reproduce, republish, distribute, scrape, modify, sell, exploit, or use JzarrTech website content or brand assets without written permission.",
      "For client projects, ownership of deliverables will be governed by the relevant proposal, invoice, quotation, contract, or written agreement. Unless full payment has been received and ownership transfer is clearly stated, JzarrTech may retain ownership or usage rights in concepts, drafts, rejected designs, code libraries, reusable components, frameworks, templates, internal tools, workflow methods, know-how, strategy documents, and other materials developed independently or used across projects.",
      "JzarrTech may use open-source software, licensed themes, plugins, libraries, APIs, stock assets, third-party tools, or reusable frameworks where appropriate. Such third-party materials remain subject to their own licenses, restrictions, renewal fees, usage rights, and terms. Clients are responsible for maintaining any required licenses after project handover unless otherwise agreed in writing.",
    ],
  },
  {
    title: "9. Portfolio, Testimonials, Case Studies, and Examples",
    body: [
      "Any portfolio item, client review, testimonial, case study, screenshot, project example, performance claim, result example, ranking example, traffic improvement, ad campaign outcome, sales result, or business growth reference shown on the JzarrTech website or shared in marketing material is provided for illustration and credibility purposes only.",
      "Past performance does not guarantee future performance. Results achieved for one client may not be achievable for another client because every business has different goals, budgets, competition, market conditions, history, audience behavior, products, services, technical setup, brand strength, and operational capacity. Testimonials reflect individual experiences and should not be interpreted as a promise that every client will receive the same result.",
      "JzarrTech may update, remove, modify, or replace portfolio items, testimonials, screenshots, and case studies at any time. Some examples may be shortened, summarized, anonymized, redesigned, or reformatted for presentation purposes.",
    ],
  },
  {
    title: "10. Pricing, Quotations, Timelines, and Availability",
    body: [
      "Any pricing, package, discount, offer, timeline, service plan, project estimate, or delivery schedule displayed on the website or shared during initial communication is subject to change unless confirmed in a written agreement. Final pricing depends on project scope, features, complexity, content volume, design requirements, third-party costs, integrations, revisions, urgency, support level, platform requirements, and client-specific needs.",
      "Timelines are estimates and may be affected by client delays, content delays, access issues, payment delays, technical problems, third-party approvals, hosting issues, policy reviews, scope changes, additional feature requests, feedback cycles, or circumstances beyond JzarrTech's control. JzarrTech is not responsible for business losses, missed launches, delayed campaigns, opportunity losses, revenue losses, ranking losses, or operational disruption caused by reasonable project delays or third-party dependencies.",
    ],
  },
  {
    title: "11. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, JzarrTech, its owners, directors, employees, contractors, consultants, partners, affiliates, and representatives shall not be liable for any direct, indirect, incidental, consequential, special, punitive, commercial, financial, reputational, technical, operational, or business damages arising from the use of this website, reliance on website information, use of our services, delays, third-party platform actions, technical errors, data loss, account suspension, advertising rejection, ranking changes, marketplace restrictions, software bugs, cybersecurity incidents, or business decisions made by the client.",
      "This includes, but is not limited to, loss of profit, loss of revenue, loss of leads, loss of traffic, loss of ranking, loss of data, loss of goodwill, loss of business opportunity, loss of advertising budget, account suspension, platform penalties, customer disputes, payment gateway issues, legal claims, tax issues, compliance penalties, downtime, or interruption of business.",
      "Nothing in this Disclaimer is intended to exclude liability that cannot legally be excluded under applicable law. However, where liability cannot be fully excluded, JzarrTech's liability shall be limited to the maximum extent permitted by law and, where applicable, to the amount paid by the client for the specific service giving rise to the claim.",
    ],
  },
  {
    title: "12. Security and Data Disclaimer",
    body: [
      "JzarrTech may implement reasonable technical, administrative, and operational measures when handling websites, accounts, forms, systems, hosting panels, credentials, databases, or client information. However, no digital system, website, server, email system, cloud platform, payment gateway, CRM, database, plugin, API, or online communication method is completely secure.",
      "Users and clients are responsible for maintaining secure passwords, enabling two-factor authentication where available, limiting access to authorized personnel, keeping backups, updating software, protecting devices, avoiding phishing, and following proper cybersecurity practices. JzarrTech is not responsible for security breaches, unauthorized access, malware, data loss, credential misuse, phishing, hacking, server compromise, plugin vulnerability, or third-party data incident caused by weak client security practices, third-party failures, outdated systems, or unauthorized changes.",
    ],
  },
  {
    title: "13. External Links Disclaimer",
    body: [
      "The JzarrTech website may contain links to third-party websites, platforms, social media pages, tools, software providers, payment gateways, partner websites, resources, or external content. These links are provided for convenience, reference, or service delivery purposes only. JzarrTech does not control and does not guarantee the accuracy, reliability, safety, legality, privacy practices, terms, content, pricing, availability, or performance of any third-party website or service.",
      "Visiting third-party websites is at your own risk. You should review the privacy policy, terms of service, refund policy, cookie policy, and legal notices of any third-party platform before using it.",
    ],
  },
  {
    title: "14. Changes to This Disclaimer",
    body: [
      "JzarrTech may update, revise, modify, replace, or remove this Disclaimer at any time without prior notice. Any changes will become effective when posted on this website, unless a different effective date is stated. Users and clients are encouraged to review this Disclaimer periodically to stay informed about the limitations, responsibilities, and conditions that apply to the website and services.",
      "Continued use of the website after changes are posted means you accept the updated Disclaimer.",
    ],
  },
  {
    title: "15. Contact Information",
    body: [
      "If you have questions about this Disclaimer, our website, or our services, you may contact JzarrTech through the official contact details available on the website.",
      "Email: hello@jzarrtech.com",
      "Website: https://jzarrtech.com/",
      "This Disclaimer should be read together with JzarrTech's Terms and Conditions, Privacy Policy, refund policy, service agreement, quotation, invoice, proposal, and any other written contract applicable to the specific service requested or purchased.",
    ],
  },
];

const Disclaimer = () => {
  return (
    <>
      <Navbar />

      <main className="terms-page">
        <section className="terms-hero">
          <div className="terms-hero__inner">
            <span className="terms-eyebrow">Website Notice</span>
            <h1>Disclaimer</h1>
            <div className="terms-meta">
              <span>Effective Date: 30 June 2026</span>
              <span>Last Updated: 1st June 2026</span>
            </div>
          </div>
        </section>

        <section className="terms-content">
          <div className="terms-intro">
            <p>
              Welcome to JzarrTech. This Disclaimer applies to the website
              https://jzarrtech.com/ and to the information, content, materials, service
              descriptions, digital resources, forms, communications, consultations,
              proposals, quotations, project discussions, reports, strategies, designs,
              software-related deliverables, marketing recommendations, AI-related
              solutions, eCommerce support, registration assistance, and any other services
              provided or displayed by JzarrTech through this website or through its
              official communication channels.
            </p>
            <p>
              By accessing, browsing, submitting information through, communicating with,
              purchasing from, requesting a quotation from, or using any part of this
              website, you acknowledge that you have read, understood, and agreed to this
              Disclaimer. If you do not agree with this Disclaimer, you should stop using
              this website and should not rely on any information, service description,
              statement, estimate, result projection, testimonial, portfolio item, report,
              or recommendation available on or through this website.
            </p>
            <p>
              This Disclaimer is intended to protect both JzarrTech and its users by
              clearly explaining the limitations of website information, digital services,
              technology solutions, advertising support, search engine optimization work,
              eCommerce assistance, AI-related services, software development, WordPress
              development, Shopify development, Amazon-related services, LLC registration
              support, and other business or technical services that may be provided by
              JzarrTech. Nothing on this website should be treated as a guaranteed promise
              of results, legal advice, tax advice, financial advice, investment advice,
              compliance advice, or professional advice outside the scope of the specific
              service agreement signed between JzarrTech and the client.
            </p>
          </div>

          <div className="terms-sections">
            {sections.map((section) => (
              <article className="terms-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Disclaimer;
