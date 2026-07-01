import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TermsAndConditions.css";

const sections = [
  {
    title: "1. About JzarrTech",
    body: [
      "JzarrTech is a digital technology and business solutions provider. Our services may include website development, app development, custom software development, AI solutions, automation systems, WordPress development, Shopify development, SEO, PPC advertising, Google Ads, Meta Ads, eCommerce support, Amazon-related services, CRM setup, landing page development, branding, digital strategy, and business setup assistance.",
      "Because our services are technical and business-focused, we may need to collect certain personal, business, technical, project, billing, account, and communication information from clients, website visitors, leads, vendors, service providers, and business contacts. This Privacy Policy explains how we handle that information responsibly.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "JzarrTech may collect different types of information depending on how you interact with us.",
      "We may collect personal identification information such as your name, email address, phone number, company name, job title, country, city, business address, website URL, social media profile links, and other contact details you voluntarily provide.",
      "We may collect business information such as your business name, business type, service requirements, project goals, target market, competitors, products, services, brand guidelines, marketing objectives, budget range, preferred timelines, and business documents required for service delivery.",
      "We may collect technical information such as your domain name, hosting details, website access, WordPress access, Shopify access, CRM access, Google Ads access, Meta Business access, Google Analytics access, Google Search Console access, Amazon seller access, API keys, plugin information, theme information, server information, website performance data, error logs, tracking setup details, and integration requirements.",
      "We may collect communication information such as emails, WhatsApp messages, phone call notes, meeting notes, support tickets, consultation details, project briefs, feedback, approval messages, revision requests, and other records of communication between you and JzarrTech.",
      "We may collect billing and transaction-related information such as invoice details, payment status, payment method references, transaction confirmations, tax-related details where applicable, service package details, outstanding balances, refund requests, and payment history. We do not intentionally collect or store full card details unless a payment processor requires it and handles it under its own secure systems.",
      "We may collect website usage information such as IP address, browser type, device type, operating system, approximate location, referral source, pages visited, time spent on pages, clicks, form interactions, traffic source, campaign source, and similar analytics data.",
      "We may collect marketing and advertising information such as lead source, campaign interaction, ad click data, form submission source, remarketing audience data, conversion tracking information, and user engagement with our ads or landing pages.",
    ],
  },
  {
    title: "3. Information You Voluntarily Provide",
    body: [
      "Most personal information collected by JzarrTech is provided directly by you. This may happen when you fill out a contact form, request a quote, subscribe to updates, contact us through email, message us on WhatsApp or social media, book a consultation, share project requirements, make a payment, upload documents, provide website access, approve a proposal, or communicate with our team.",
      "You are responsible for ensuring that all information you provide is accurate, lawful, complete, current, and authorized. If you provide information about another person, company, employee, customer, client, vendor, or third party, you confirm that you have the legal right and permission to share that information with JzarrTech.",
      "JzarrTech is not responsible for privacy claims, legal issues, business losses, project delays, platform restrictions, or compliance problems caused by inaccurate, unauthorized, incomplete, misleading, or unlawful information provided by you.",
    ],
  },
  {
    title: "4. Project Access, Credentials, and Client Accounts",
    body: [
      "For certain services, JzarrTech may require temporary or ongoing access to client accounts, websites, dashboards, hosting panels, domain registrars, CMS platforms, advertising accounts, analytics platforms, search tools, CRM systems, eCommerce stores, APIs, cloud tools, or marketplace accounts.",
      "This access may be required for website development, technical SEO, ad campaign setup, tracking configuration, app integration, Shopify development, WordPress work, CRM automation, AI workflow setup, Amazon services, or related project tasks.",
      "We recommend that clients provide access through secure user roles, limited permissions, team accounts, password managers, temporary access, or role-based invitations wherever possible. Clients should avoid sharing master passwords unless absolutely necessary. After project completion, clients should review access permissions, remove unnecessary users, change passwords where required, and enable two-factor authentication.",
      "JzarrTech will use client account access only for the agreed project purpose. However, the client remains responsible for maintaining ownership, billing, recovery options, security settings, platform compliance, and access control of their own accounts.",
    ],
  },
  {
    title: "5. How We Use Your Information",
    body: [
      "JzarrTech may use collected information for legitimate business, operational, technical, marketing, administrative, legal, and service delivery purposes.",
      "We may use your information to respond to inquiries, prepare quotations, understand your business requirements, provide consultations, create project proposals, deliver services, manage client communication, process payments, send invoices, provide customer support, complete project tasks, improve website functionality, analyze website performance, run advertising campaigns, track conversions, personalize communication, manage CRM records, improve internal processes, and maintain business records.",
      "We may use technical information to develop websites, configure hosting, fix bugs, improve page speed, perform SEO audits, set up tracking, create integrations, connect APIs, manage campaigns, configure AI systems, troubleshoot errors, and deliver agreed technical services.",
      "We may use marketing data to understand which campaigns, keywords, pages, ads, or channels are generating inquiries. This helps us improve our marketing, landing pages, content strategy, lead quality, and service communication.",
      "We may use communication records to maintain project history, resolve disputes, verify approvals, track requested changes, manage support issues, improve service quality, and protect our legal or business interests.",
      "We may use billing data to issue invoices, confirm payments, manage refunds, track outstanding balances, maintain tax or accounting records, and comply with applicable legal or financial obligations.",
    ],
  },
  {
    title: "6. Legal Basis for Processing Where Applicable",
    body: [
      "Where privacy laws require a legal basis for processing personal data, JzarrTech may rely on one or more lawful grounds depending on the situation.",
      "We may process information based on your consent when you submit a form, subscribe to communication, agree to cookies, request a callback, or voluntarily provide information.",
      "We may process information to perform a contract when you hire JzarrTech, approve a proposal, request services, make payment, or require project delivery.",
      "We may process information based on legitimate business interests, such as responding to inquiries, improving services, preventing fraud, protecting website security, maintaining business records, analyzing performance, and managing client relationships.",
      "We may process information to comply with legal obligations, including accounting, tax, regulatory, dispute resolution, law enforcement, or court-related requirements.",
      "Where required, you may withdraw consent, request access, request correction, request deletion, object to certain processing, or exercise other applicable privacy rights as described in this Privacy Policy.",
    ],
  },
  {
    title: "7. Cookies and Tracking Technologies",
    body: [
      "JzarrTech may use cookies, pixels, tags, scripts, local storage, analytics tools, advertising trackers, and similar technologies to operate the website, improve user experience, measure performance, understand visitor behavior, track conversions, and support marketing campaigns.",
      "Cookies may help us remember user preferences, understand which pages are visited, detect website issues, measure traffic sources, improve landing pages, and analyze how visitors interact with our website.",
      "We may use analytics tools such as Google Analytics or similar services to understand website usage and performance. These tools may collect information such as IP address, browser type, device type, operating system, pages visited, time on page, referral source, and other interaction data.",
      "We may also use advertising tools such as Google Ads tags, Meta Pixel, LinkedIn Insight Tag, or other tracking technologies to measure ad performance, build remarketing audiences, improve targeting, and understand campaign results.",
      "You can control cookies through your browser settings. You may block, delete, or disable cookies, but some parts of the website may not function properly if cookies are disabled.",
    ],
  },
  {
    title: "8. Advertising, Remarketing, and Conversion Tracking",
    body: [
      "JzarrTech may use advertising platforms to promote its services. These platforms may include Google Ads, Meta Ads, Facebook, Instagram, LinkedIn, TikTok, YouTube, or other advertising networks.",
      "When you interact with our website or advertisements, these platforms may collect or receive certain information through cookies, pixels, tags, or tracking tools. This information may be used to measure conversions, show relevant ads, optimize campaigns, create remarketing audiences, and analyze ad performance.",
      "JzarrTech does not control all data practices of third-party advertising platforms. Each platform has its own privacy policy, account settings, advertising preferences, cookie controls, and data processing practices. You should review the privacy settings and policies of the relevant advertising platforms if you want to control how they use your information.",
      "JzarrTech does not sell personal information in the traditional sense. However, some privacy laws may define certain advertising, analytics, remarketing, or data sharing practices as \"sharing\" or \"sale\" of personal information. Where applicable, users may have the right to opt out of such sharing or targeted advertising.",
    ],
  },
  {
    title: "9. AI Tools and Automation Data",
    body: [
      "JzarrTech may use artificial intelligence tools, automation platforms, chatbots, workflow systems, CRM automation, AI assistants, or third-party AI APIs to improve internal efficiency, support project delivery, create drafts, analyze project requirements, assist with content, generate code suggestions, automate workflows, classify leads, or provide technical support.",
      "When AI tools are used, information may be processed by third-party AI service providers depending on the tool, configuration, and project requirement. JzarrTech will take reasonable steps to avoid submitting unnecessary sensitive information into AI tools unless required for the specific service and permitted by the client.",
      "Clients should avoid sharing highly sensitive, confidential, regulated, or unnecessary personal information unless it is directly required for project delivery. If a project requires processing sensitive data through AI or automation systems, the client should inform JzarrTech in writing and ensure that appropriate legal, security, and compliance measures are in place.",
      "AI outputs may require human review. JzarrTech does not use AI tools as a substitute for legal, financial, medical, tax, or compliance advice.",
    ],
  },
  {
    title: "10. Third-Party Service Providers",
    body: [
      "JzarrTech may share limited information with trusted third-party service providers when necessary to operate our business, deliver services, manage communication, process payments, host websites, analyze traffic, run ads, configure tools, complete technical work, or support client projects.",
      "These third parties may include hosting providers, domain registrars, payment processors, CRM platforms, email service providers, cloud storage providers, analytics providers, advertising platforms, AI service providers, development tools, project management tools, communication platforms, marketplace platforms, and professional advisors.",
      "We only share information that is reasonably necessary for the relevant purpose. However, third-party platforms operate under their own terms, privacy policies, security controls, and data practices. JzarrTech is not responsible for the independent privacy practices of third-party platforms that are not controlled by us.",
    ],
  },
  {
    title: "11. Payment Information",
    body: [
      "JzarrTech may collect payment-related information for invoicing, transaction confirmation, accounting, recordkeeping, and service activation. Depending on the payment method, information may include invoice details, payer name, company name, email address, transaction ID, payment status, payment date, amount paid, and payment method reference.",
      "We do not intentionally store full debit card, credit card, or banking credentials on our website unless processed through a secure third-party payment processor. Payment processors may collect and process payment data under their own privacy and security policies.",
      "Clients are responsible for ensuring that payment information is accurate and that payments are made through authorized methods.",
    ],
  },
  {
    title: "12. Data Sharing and Disclosure",
    body: [
      "JzarrTech does not disclose personal information unnecessarily. However, we may share or disclose information in the following situations.",
      "We may share information with internal team members, contractors, developers, designers, marketers, consultants, support staff, or project managers who need access to complete the agreed work.",
      "We may share information with third-party service providers who help us operate, communicate, process payments, host data, run campaigns, analyze traffic, provide software, or complete technical services.",
      "We may share information when required by law, regulation, court order, legal process, government request, tax requirement, law enforcement request, or other lawful authority.",
      "We may share information to protect the rights, safety, property, security, or legal interests of JzarrTech, our clients, our users, our team, or the public.",
      "We may share information in connection with a business transaction, such as merger, acquisition, restructuring, sale of assets, partnership, financing, or transfer of business operations, subject to reasonable privacy protections.",
      "We may share information with your consent or at your direction.",
    ],
  },
  {
    title: "13. International Data Transfers",
    body: [
      "Because JzarrTech may use global service providers, cloud platforms, analytics tools, advertising platforms, AI tools, hosting providers, payment processors, and remote team workflows, your information may be processed, stored, or accessed in countries outside your own country.",
      "Different countries may have different data protection laws. Where required, JzarrTech will take reasonable steps to ensure that personal information is handled with appropriate safeguards, contractual protections, and security measures.",
      "By using our website or services, you understand that your information may be transferred to, stored in, or processed in jurisdictions where JzarrTech, its team members, contractors, service providers, or technology partners operate.",
    ],
  },
  {
    title: "14. Data Retention",
    body: [
      "JzarrTech keeps personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.",
      "We may retain inquiry records, client records, project communication, invoices, payment records, contracts, proposals, approvals, technical documentation, support records, and service history for business, legal, accounting, dispute resolution, tax, compliance, and operational purposes.",
      "We may retain website analytics and marketing data for performance measurement, reporting, campaign optimization, and business planning.",
      "We may delete, anonymize, or archive information when it is no longer needed, unless retention is necessary to comply with law, enforce agreements, resolve disputes, prevent fraud, protect legal rights, or maintain legitimate business records.",
    ],
  },
  {
    title: "15. Data Security",
    body: [
      "JzarrTech takes reasonable technical, administrative, and operational measures to protect personal information from unauthorized access, misuse, disclosure, alteration, loss, or destruction.",
      "Security measures may include access control, password protection, limited permissions, secure communication practices, role-based access, data backups, secure hosting practices, trusted service providers, internal confidentiality obligations, and reasonable monitoring of business systems.",
      "However, no website, server, email system, software platform, cloud provider, database, API, AI tool, payment processor, or internet transmission method can be guaranteed to be completely secure. JzarrTech cannot guarantee absolute security of personal information.",
      "Clients are responsible for maintaining secure passwords, enabling two-factor authentication, limiting account access, updating software, protecting their devices, avoiding phishing, and following cybersecurity best practices.",
    ],
  },
  {
    title: "16. Data Breach and Security Incidents",
    body: [
      "If JzarrTech becomes aware of a security incident affecting personal information under our control, we will take reasonable steps to investigate, contain, respond to, and reduce the impact of the incident.",
      "Where legally required, we may notify affected users, clients, service providers, regulators, law enforcement, or other relevant parties. The timing and content of any notification may depend on the nature of the incident, legal requirements, investigation status, risk level, and available information.",
      "JzarrTech is not responsible for security incidents caused by client-side negligence, weak passwords, unauthorized sharing of credentials, compromised client devices, third-party platform breaches, hosting failures, phishing attacks, malware installed by others, or unauthorized changes made outside JzarrTech's control.",
    ],
  },
  {
    title: "17. Your Privacy Rights",
    body: [
      "Depending on your location and applicable law, you may have certain rights regarding your personal information.",
      "These rights may include the right to request access to personal information we hold about you, request correction of inaccurate information, request deletion of certain information, request restriction of processing, object to certain processing, request data portability, withdraw consent, opt out of marketing communication, or request information about how your data is used or shared.",
      "Where applicable, California residents and users covered by similar privacy laws may have additional rights, such as the right to know what personal information is collected, the right to request deletion, the right to request correction, the right to opt out of certain sharing or targeted advertising, and the right not to be discriminated against for exercising privacy rights.",
      "To exercise privacy rights, you may contact JzarrTech using the contact details provided in this Privacy Policy. We may need to verify your identity before processing certain requests. We may refuse or limit requests where permitted by law, including where information must be retained for legal, accounting, security, contractual, dispute resolution, or legitimate business purposes.",
    ],
  },
  {
    title: "18. Marketing Communications",
    body: [
      "JzarrTech may send marketing emails, service updates, promotional offers, newsletters, business updates, or relevant communication to users who have contacted us, requested information, subscribed, or shown interest in our services.",
      "You may opt out of marketing emails at any time by following the unsubscribe instructions in the email or by contacting us directly. Even if you opt out of marketing communication, we may still send important non-marketing messages related to active projects, payments, invoices, service delivery, legal notices, security updates, or account-related matters.",
    ],
  },
  {
    title: "19. Children's Privacy",
    body: [
      "JzarrTech's website and services are intended for business users, companies, entrepreneurs, professionals, and adults seeking digital technology services. Our website is not intended for children, and we do not knowingly collect personal information from children under the age required by applicable law.",
      "If we become aware that a child has submitted personal information without appropriate consent, we may delete that information from our records where required. Parents or guardians who believe that a child has provided personal information to JzarrTech may contact us for review and removal.",
    ],
  },
  {
    title: "20. Sensitive Personal Information",
    body: [
      "JzarrTech does not intentionally request sensitive personal information unless it is necessary for a specific service and agreed with the client. Sensitive information may include government identification details, tax records, financial records, legal documents, health information, biometric data, precise location data, or other regulated information.",
      "Clients should not submit sensitive information unless it is directly required for the project or service. If sensitive information is required, the client must ensure that sharing it with JzarrTech is lawful, authorized, necessary, and supported by appropriate consent or legal basis.",
      "JzarrTech may refuse to process sensitive information if we believe the request is unlawful, excessive, insecure, unrelated to the service, or outside our professional scope.",
    ],
  },
  {
    title: "21. Third-Party Links",
    body: [
      "The JzarrTech website may contain links to third-party websites, tools, platforms, service providers, social media pages, payment processors, software providers, marketplace platforms, or external resources.",
      "This Privacy Policy does not apply to third-party websites or services. JzarrTech does not control and is not responsible for the privacy practices, security standards, cookies, content, policies, or data processing activities of third-party websites.",
      "You should review the privacy policies and terms of any third-party website or platform before submitting personal information or using their services.",
    ],
  },
  {
    title: "22. Client Websites and End-User Data",
    body: [
      "If JzarrTech builds, manages, optimizes, or supports a client website, app, CRM, Shopify store, WordPress website, eCommerce store, landing page, lead form, chatbot, or automation workflow, the client remains responsible for the privacy compliance of their own platform and their own end-user data.",
      "The client must provide their own Privacy Policy, Terms and Conditions, cookie notice, consent system, refund policy, data processing notice, and compliance documents where required.",
      "JzarrTech may assist with technical setup, but the client is responsible for ensuring that their website, ads, forms, tracking tools, customer data handling, email marketing, payment processing, and business practices comply with applicable privacy laws and platform policies.",
    ],
  },
  {
    title: "23. Accuracy of Information",
    body: [
      "You are responsible for ensuring that the information you provide to JzarrTech is accurate and up to date. If your contact details, billing details, project information, business information, or access details change, you should inform us promptly.",
      "JzarrTech is not responsible for missed communication, service delays, incorrect deliverables, payment issues, account problems, or legal issues caused by outdated or inaccurate information provided by the client.",
    ],
  },
  {
    title: "24. Do Not Track Signals",
    body: [
      "Some browsers may send \"Do Not Track\" signals. At this time, our website may not respond to all browser-based Do Not Track signals because there is no consistent industry standard for how such signals should be interpreted. You can still control cookies and tracking through your browser settings, device settings, platform privacy settings, and advertising preferences.",
    ],
  },
  {
    title: "25. Changes to This Privacy Policy",
    body: [
      "JzarrTech may update, revise, or replace this Privacy Policy at any time to reflect changes in our services, website, technology tools, legal requirements, business operations, or privacy practices.",
      "The updated version will be posted on this website with a revised \"Last Updated\" date. Your continued use of our website or services after the updated Privacy Policy is posted means that you accept the revised policy.",
      "We encourage users and clients to review this Privacy Policy periodically.",
    ],
  },
  {
    title: "26. Contact Information",
    body: [
      "If you have questions about this Privacy Policy, want to exercise your privacy rights, want to request correction or deletion of information, or want to contact us about data handling practices, you may reach JzarrTech through the official contact details below.",
      "Email: hello@jzarrtech.com",
      "Website: https://jzarrtech.com/",
      "When contacting us about privacy matters, please include your name, email address, relationship with JzarrTech, and a clear description of your request so we can respond properly.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <main className="terms-page">
        <section className="terms-hero">
          <div className="terms-hero__inner">
            <span className="terms-eyebrow">Privacy Notice</span>
            <h1>Privacy Policy</h1>
            <div className="terms-meta">
              <span>Effective Date: 30 June 2026</span>
              <span>Last Updated: 1st June 2026</span>
            </div>
          </div>
        </section>

        <section className="terms-content">
          <div className="terms-intro">
            <p>
              This Privacy Policy explains how JzarrTech collects, uses, stores, protects,
              shares, and manages personal information when you visit our website, contact
              us, submit a form, request a quotation, communicate with our team, purchase
              services, provide project information, use our digital solutions, or otherwise
              interact with JzarrTech.
            </p>
            <p>
              This Privacy Policy applies to the website operated by JzarrTech, including
              all pages, service pages, forms, landing pages, contact points, consultation
              requests, marketing communications, client communications, project onboarding
              processes, service delivery workflows, and any related online or offline
              interactions connected with JzarrTech services.
            </p>
            <p>
              By accessing our website, submitting your information, requesting a service,
              communicating with us, making payment, sharing project details, or using our
              services, you acknowledge that you have read and understood this Privacy
              Policy. If you do not agree with this Privacy Policy, you should not submit
              personal information to JzarrTech or use our services.
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

export default PrivacyPolicy;
