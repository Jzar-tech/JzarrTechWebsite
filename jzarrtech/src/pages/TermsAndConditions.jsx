import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TermsAndConditions.css";

const sections = [
  {
    title: "1. About JzarrTech",
    body: [
      "JzarrTech is a digital technology and business solutions provider offering services that may include, but are not limited to, website development, mobile app development, custom software development, AI solutions, automation systems, WordPress development, Shopify development, SEO services, Google Ads, Meta Ads, PPC campaign support, Amazon and eCommerce services, branding, digital strategy, landing page development, CRM setup, technical support, and business registration assistance such as LLC-related support.",
      "The exact scope of services provided to each client depends on the written quotation, proposal, invoice, service package, project agreement, or confirmed communication between JzarrTech and the client. Information available on the website is general in nature and does not automatically create a service agreement unless JzarrTech formally accepts the project and the client agrees to the applicable commercial terms.",
    ],
  },
  {
    title: "2. Acceptance of Terms",
    body: [
      "By using this website or engaging with our services, you confirm that you are legally capable of entering into a binding agreement. If you are using our website or services on behalf of a company, organization, agency, partnership, or other legal entity, you confirm that you have the authority to accept these Terms and Conditions on behalf of that entity.",
      "If you do not have such authority, you must not request services, approve work, submit business information, share access credentials, or make commitments on behalf of that entity.",
      "Your continued use of our website or services means that you accept these Terms and Conditions, including any future updates or modifications published on this website.",
    ],
  },
  {
    title: "3. Use of Website",
    body: [
      "You may use the JzarrTech website for lawful informational and business purposes only. You agree not to use the website in any way that may damage, disable, overload, interfere with, or compromise the website, server, security, user experience, or business operations of JzarrTech.",
      "You must not attempt to hack, scan, scrape, reverse engineer, copy, clone, exploit, inject malicious code, upload harmful files, perform unauthorized testing, bypass security controls, or misuse any part of the website. You must also not use our website to submit false information, spam messages, fraudulent inquiries, abusive content, illegal requests, or unauthorized third-party data.",
      "JzarrTech reserves the right to restrict, block, suspend, or refuse access to any user who violates these Terms and Conditions or uses the website in a harmful, unlawful, suspicious, or abusive manner.",
    ],
  },
  {
    title: "4. Service Scope",
    body: [
      "All services provided by JzarrTech are subject to the agreed project scope. The project scope may be defined in a written quotation, invoice, service proposal, email confirmation, service package, signed agreement, or other written communication approved by both parties.",
      "The project scope may include specific deliverables, timelines, milestones, revisions, platforms, pages, features, campaigns, keywords, design requirements, integrations, technical tasks, reports, consulting hours, maintenance period, or support terms. Anything not clearly included in the approved scope will be treated as additional work and may require a separate quotation or additional payment.",
      "JzarrTech is not obligated to provide unlimited changes, unlimited revisions, additional features, extra integrations, new pages, new campaigns, new designs, new content, third-party tools, paid plugins, premium themes, hosting, domain, maintenance, or support unless these items are clearly included in the agreed scope.",
    ],
  },
  {
    title: "5. Client Responsibilities",
    body: [
      "The client is responsible for providing accurate, complete, lawful, and timely information required for the project. This may include business details, brand assets, logos, images, videos, product information, service descriptions, login credentials, domain access, hosting access, WordPress access, Shopify access, Google Ads access, Meta Business access, analytics access, search console access, Amazon account access, payment gateway access, API keys, legal documents, compliance information, and any other material required to complete the work.",
      "The client must ensure that all content, files, images, trademarks, logos, videos, documents, customer data, product details, and business information provided to JzarrTech are legally owned by the client or properly licensed for use.",
      "JzarrTech will not be responsible for delays, errors, rejections, legal claims, copyright disputes, trademark disputes, platform restrictions, compliance issues, or business losses caused by incorrect, incomplete, late, unauthorized, misleading, or unlawful information provided by the client.",
      "The client is also responsible for reviewing and approving deliverables before launch, publication, submission, or use. Once the client approves a design, website, campaign, ad copy, content, report, strategy, listing, automation, software feature, or any other deliverable, JzarrTech will not be responsible for issues that could reasonably have been identified during the review process.",
    ],
  },
  {
    title: "6. Quotations, Pricing, and Payments",
    body: [
      "All prices, packages, quotations, and estimates shared by JzarrTech are subject to change unless confirmed in writing. Pricing may depend on project complexity, required features, service type, timeline, number of pages, campaign size, content volume, development hours, revisions, third-party tools, software licenses, integrations, and support requirements.",
      "A project may require advance payment, milestone-based payment, monthly retainer payment, one-time payment, or full payment before delivery, depending on the agreed terms. Work may not begin until the required payment has been received.",
      "If payment is delayed, JzarrTech reserves the right to pause work, delay delivery, restrict access to deliverables, withhold files, suspend services, stop campaigns, or terminate the project until outstanding payments are cleared.",
      "Any bank charges, payment gateway charges, currency conversion fees, withholding taxes, platform fees, transaction fees, or government taxes will be the responsibility of the client unless otherwise agreed in writing.",
    ],
  },
  {
    title: "7. Revisions and Changes",
    body: [
      "JzarrTech may provide a specific number of revisions depending on the service package or project agreement. Revisions are intended for reasonable improvements within the original approved scope. A revision does not include a complete redesign, complete redevelopment, new strategy, change of business model, new pages, new features, new integrations, new platform, new campaign structure, new content direction, or work that was not part of the original agreement.",
      "If the client requests changes outside the original scope, JzarrTech may charge additional fees. These changes may also affect project timelines.",
      "Revision requests must be clear, consolidated, and provided within a reasonable time. Delayed feedback, conflicting instructions, repeated changes, unclear approvals, or multiple decision-makers may result in delays or additional charges.",
    ],
  },
  {
    title: "8. Project Timelines",
    body: [
      "Any timeline or delivery date provided by JzarrTech is an estimate unless clearly stated as a fixed deadline in a written agreement. Project timelines depend on the timely availability of required information, approvals, payments, access credentials, content, third-party services, platform reviews, hosting performance, and client feedback.",
      "JzarrTech will make reasonable efforts to complete work within the agreed timeline, but we are not responsible for delays caused by client inactivity, late payments, delayed approvals, incomplete information, technical problems, third-party platform issues, policy reviews, hosting downtime, plugin conflicts, API changes, illness, emergencies, force majeure events, or circumstances beyond our reasonable control.",
      "If the client delays feedback, payment, access, approval, content, or required information, the project timeline may be extended accordingly.",
    ],
  },
  {
    title: "9. Website and Software Development Terms",
    body: [
      "For website development, app development, software development, CRM setup, dashboard development, automation systems, WordPress development, Shopify development, landing page development, and related technical services, JzarrTech will develop the agreed deliverables according to the confirmed scope.",
      "The client understands that development work may involve technical limitations, compatibility issues, third-party dependencies, browser differences, device differences, plugin conflicts, API limitations, hosting restrictions, security requirements, and future maintenance needs.",
      "Unless clearly included in the agreement, JzarrTech is not responsible for hosting, domain renewal, server management, plugin renewal, theme renewal, premium software licenses, ongoing maintenance, security monitoring, backups, malware removal, future updates, speed optimization after launch, content updates, or new feature development after delivery.",
      "Once a project is delivered and approved, any new changes, repairs, updates, redesigns, migrations, malware fixes, plugin conflicts, server issues, or maintenance requests may be charged separately.",
    ],
  },
  {
    title: "10. SEO Services Terms",
    body: [
      "JzarrTech may provide search engine optimization services including technical SEO, on-page SEO, content strategy, keyword research, internal linking, schema markup, website audits, competitor analysis, content optimization, local SEO, link-building support, and performance reporting.",
      "The client understands and agrees that SEO results are not guaranteed. Search engines control crawling, indexing, ranking, visibility, algorithm updates, manual actions, search results layout, AI overviews, featured snippets, and traffic distribution. JzarrTech cannot guarantee first-page rankings, specific keyword positions, organic traffic numbers, lead volume, revenue, indexing speed, domain authority growth, or permanent ranking stability.",
      "SEO is a long-term process and results may vary depending on competition, website history, technical condition, content quality, backlinks, brand authority, user behavior, algorithm updates, and market conditions.",
      "JzarrTech will not be responsible for ranking drops, traffic loss, indexing delays, algorithm changes, search engine penalties, or performance fluctuation caused by search engine updates, client changes, third-party links, low-quality past work, hosting issues, website downtime, duplicate content, technical errors, or changes made by anyone outside JzarrTech.",
    ],
  },
  {
    title: "11. Paid Advertising Terms",
    body: [
      "JzarrTech may provide paid advertising support for platforms such as Google Ads, Meta Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, TikTok Ads, YouTube Ads, or other advertising platforms.",
      "The client understands that advertising platforms have their own policies, review processes, billing systems, auction mechanisms, account quality checks, and approval standards. JzarrTech does not guarantee ad approval, account approval, fixed cost per click, fixed cost per lead, fixed conversion rate, fixed sales volume, fixed return on ad spend, uninterrupted delivery, or protection from rejection, disapproval, suspension, restriction, or policy limitation.",
      "The client is responsible for ensuring that their products, services, landing pages, offers, claims, pricing, business model, legal pages, and advertisements comply with applicable laws and platform policies.",
      "Advertising budget is paid to the advertising platform and is separate from JzarrTech's service fee unless otherwise agreed. JzarrTech is not responsible for platform charges, overspending caused by platform settings, declined payments, billing errors, refund refusals, account limitations, or ad credit issues controlled by third-party platforms.",
    ],
  },
  {
    title: "12. AI and Automation Services Terms",
    body: [
      "JzarrTech may provide AI-related services including AI agents, chatbots, automation workflows, AI-assisted content systems, CRM automation, lead automation, customer support automation, and AI-powered business tools.",
      "The client understands that AI outputs may not always be accurate, complete, current, unbiased, or suitable for every business decision. AI systems require human review and supervision. The client is responsible for reviewing and approving any AI-generated content, recommendations, responses, reports, workflows, or decisions before using them publicly or operationally.",
      "JzarrTech does not guarantee that AI tools will work without interruption, error, hallucination, bias, API limitation, model change, third-party restriction, pricing change, or platform downtime. AI services may depend on third-party providers, and their performance may change without notice.",
      "The client agrees not to use AI services for unlawful, misleading, harmful, discriminatory, infringing, fraudulent, abusive, or unauthorized purposes.",
    ],
  },
  {
    title: "13. eCommerce, Shopify, Amazon, and Marketplace Services",
    body: [
      "JzarrTech may provide support for Shopify stores, Amazon stores, product listings, marketplace setup, product research, listing optimization, eCommerce design, payment setup, store management, or related services.",
      "The client understands that marketplaces and eCommerce platforms have their own rules, verification systems, product approval policies, account health requirements, payment rules, refund systems, customer protection policies, and enforcement procedures.",
      "JzarrTech does not guarantee store approval, account approval, listing approval, sales volume, profit, product ranking, Buy Box eligibility, customer reviews, payment gateway approval, marketplace stability, or protection from suspension, restriction, deactivation, or policy enforcement.",
      "The client is responsible for product legality, supplier reliability, pricing, inventory, shipping, refunds, customer service, tax compliance, product claims, warranties, intellectual property rights, and marketplace policy compliance.",
    ],
  },
  {
    title: "14. LLC Registration and Business Setup Assistance",
    body: [
      "JzarrTech may provide general assistance related to LLC registration, business setup, documentation support, form guidance, or coordination with third-party providers. However, JzarrTech is not a law firm, tax advisory firm, accounting firm, government authority, or financial advisory institution unless clearly stated in a separate written agreement.",
      "Any LLC-related or registration-related support provided by JzarrTech is administrative and informational in nature. It should not be treated as legal, tax, accounting, investment, or compliance advice.",
      "The client is responsible for verifying business structure, tax obligations, annual filing requirements, registered agent requirements, state fees, banking requirements, compliance obligations, and all legal responsibilities with qualified professionals or relevant government authorities.",
      "JzarrTech is not responsible for rejection, delay, penalty, tax liability, legal dispute, compliance issue, incorrect filing, government processing delay, or third-party service issue related to business registration or company formation.",
    ],
  },
  {
    title: "15. Third-Party Tools, Platforms, and Licenses",
    body: [
      "Many JzarrTech services depend on third-party tools, platforms, software, APIs, plugins, themes, hosting providers, payment gateways, marketplaces, analytics tools, advertising platforms, CRM systems, and AI providers.",
      "JzarrTech does not own or control these third-party services. We are not responsible for their downtime, bugs, errors, pricing changes, policy changes, feature removals, account restrictions, security incidents, approval decisions, API changes, or support delays.",
      "Any third-party fees, subscriptions, renewals, licenses, paid plugins, premium themes, hosting charges, domain charges, API usage costs, software charges, or advertising spend are the responsibility of the client unless otherwise agreed in writing.",
    ],
  },
  {
    title: "16. Intellectual Property",
    body: [
      "All website content, service descriptions, designs, graphics, logos, documents, code, templates, strategies, reports, concepts, frameworks, processes, and other materials created by JzarrTech remain the property of JzarrTech unless ownership is transferred under a written agreement and full payment has been received.",
      "For client projects, final approved deliverables may be transferred to the client after full payment, subject to the terms of the agreement. JzarrTech may retain ownership of reusable code, frameworks, templates, internal tools, pre-existing materials, rejected concepts, drafts, processes, know-how, and general technical methods.",
      "The client must not copy, resell, distribute, modify, or reuse JzarrTech materials beyond the agreed purpose without written permission.",
    ],
  },
  {
    title: "17. Confidentiality",
    body: [
      "JzarrTech may receive confidential information from clients during project discussions or service delivery. This may include business information, login details, customer data, marketing plans, technical access, product information, financial information, or internal documents.",
      "JzarrTech will take reasonable steps to protect confidential client information. However, confidentiality does not apply to information that is publicly available, already known, independently developed, lawfully obtained from another source, required by law, or disclosed with client permission.",
      "Clients are also responsible for protecting any confidential information, strategies, documents, access credentials, proposals, reports, or technical details shared by JzarrTech.",
    ],
  },
  {
    title: "18. Account Access and Security",
    body: [
      "If the client provides login credentials or account access to JzarrTech, the client confirms that they are authorized to provide such access. The client is responsible for maintaining ownership and control of their accounts.",
      "JzarrTech recommends using secure sharing methods, limited user permissions, role-based access, and two-factor authentication where possible. JzarrTech will not be responsible for unauthorized access, account misuse, hacking, phishing, weak passwords, employee misuse, third-party compromise, or security issues caused by factors outside our control.",
      "After project completion, the client should update passwords, remove unnecessary users, review permissions, and maintain account security.",
    ],
  },
  {
    title: "19. Cancellation and Termination",
    body: [
      "Either party may request cancellation of a project or service, subject to the applicable agreement, payment status, completed work, and project stage.",
      "If the client cancels a project after work has started, JzarrTech may charge for completed work, reserved time, strategy work, research, design drafts, development hours, meetings, consultations, project management, third-party costs, and non-refundable expenses.",
      "JzarrTech may terminate or suspend services if the client fails to pay, violates these Terms and Conditions, provides false information, requests unlawful work, abuses staff, delays the project excessively, misuses deliverables, violates third-party policies, or engages in unethical or harmful conduct.",
    ],
  },
  {
    title: "20. Refund Policy",
    body: [
      "Refund eligibility depends on the nature of the service, project stage, completed work, and written agreement. Digital services, consultation, strategy work, research, design work, development work, SEO work, ad setup, AI configuration, account setup, documentation assistance, and other professional services involve time and labor. Therefore, payments may be non-refundable once work has started.",
      "If JzarrTech agrees to issue a refund, the refund amount may exclude completed work, administrative charges, third-party costs, transaction fees, payment gateway charges, software costs, advertising spend, domain charges, hosting charges, licenses, and any other non-recoverable expenses.",
      "No refund will be provided for delays caused by the client, change of mind, lack of results not guaranteed by JzarrTech, third-party platform rejection, policy restriction, account suspension, search engine ranking changes, marketplace decisions, or client failure to provide required information.",
    ],
  },
  {
    title: "21. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, JzarrTech, its owners, employees, contractors, consultants, partners, and representatives shall not be liable for indirect, incidental, special, consequential, punitive, commercial, reputational, technical, financial, or business damages arising from the use of our website or services.",
      "This includes loss of profit, loss of revenue, loss of leads, loss of traffic, loss of ranking, loss of data, loss of goodwill, loss of business opportunity, advertising loss, account suspension, marketplace restriction, legal claim, tax issue, downtime, security breach, software error, third-party failure, or business interruption.",
      "Where liability cannot be fully excluded, JzarrTech's total liability will be limited to the amount paid by the client for the specific service that directly caused the claim.",
    ],
  },
  {
    title: "22. Indemnification",
    body: [
      "The client agrees to indemnify and hold harmless JzarrTech, its owners, employees, contractors, consultants, partners, and representatives from any claim, loss, liability, penalty, damage, cost, or expense arising from the client's business activities, website content, product claims, advertising claims, intellectual property issues, customer disputes, legal violations, tax obligations, platform policy violations, misuse of services, or breach of these Terms and Conditions.",
    ],
  },
  {
    title: "23. Force Majeure",
    body: [
      "JzarrTech will not be responsible for failure or delay in performance caused by events beyond our reasonable control. These events may include natural disasters, internet outages, cyberattacks, hosting failures, government actions, strikes, war, civil unrest, power failure, pandemic, platform outages, API failures, payment gateway issues, search engine updates, advertising platform restrictions, or other unforeseen circumstances.",
    ],
  },
  {
    title: "24. Changes to Terms and Conditions",
    body: [
      "JzarrTech may update, revise, modify, or replace these Terms and Conditions at any time. Updated terms will be posted on this website with a revised effective date. Your continued use of the website or services after changes are posted means that you accept the updated Terms and Conditions.",
    ],
  },
  {
    title: "25. Governing Law and Dispute Resolution",
    body: [
      "These Terms and Conditions shall be governed by the applicable laws of the jurisdiction in which JzarrTech operates, unless otherwise stated in a written agreement.",
      "In the event of any dispute, both parties agree to first attempt to resolve the matter through good-faith communication. If the dispute cannot be resolved informally, it may be handled through the appropriate legal forum, arbitration process, or competent authority as applicable under relevant law and the written agreement between the parties.",
    ],
  },
  {
    title: "26. Contact Information",
    body: [
      "If you have any questions about these Terms and Conditions, you may contact JzarrTech through the official contact details available on the website.",
      "Email: hello@jzarrtech.com",
      "Website: https://jzarrtech.com",
      "These Terms and Conditions are intended to create clear expectations between JzarrTech and its clients. They do not replace a specific written project agreement, proposal, invoice, or contract. If there is any conflict between these Terms and Conditions and a signed service agreement, the signed agreement will apply to the specific project.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <main className="terms-page">
        <section className="terms-hero">
          <div className="terms-hero__inner">
            <span className="terms-eyebrow">Legal Agreement</span>
            <h1>Terms and Conditions</h1>
            <div className="terms-meta">
              <span>Effective Date: 30 June 2026</span>
              <span>Last Updated: 1st June 2026</span>
            </div>
          </div>
        </section>

        <section className="terms-content">
          <div className="terms-intro">
            <p>
              Welcome to JzarrTech. These Terms and Conditions govern your access to and
              use of our website, services, communications, quotations, proposals, digital
              products, project deliverables, consultations, development work, marketing
              services, artificial intelligence solutions, eCommerce support, and any other
              services offered by JzarrTech.
            </p>
            <p>
              By accessing https://jzarrtech.com/, contacting JzarrTech, submitting a form,
              requesting a quotation, purchasing a service, approving a proposal, making a
              payment, sharing project information, or using any service provided by
              JzarrTech, you agree to be bound by these Terms and Conditions. If you do not
              agree with these Terms and Conditions, you should not use our website or
              services.
            </p>
            <p>
              These Terms and Conditions should be read together with our Privacy Policy,
              Disclaimer, service proposal, invoice, quotation, project agreement, email
              approval, payment terms, and any other written document shared between
              JzarrTech and the client.
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

export default TermsAndConditions;
