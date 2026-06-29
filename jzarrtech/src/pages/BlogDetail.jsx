import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSidebar from "../components/BlogSidebar";

import "./BlogDetail.css";

const BlogDetail = () => {
const { id } = useParams();

const articles = {
1: {
title:
"Why Every Business Needs a Professional Website in 2026",


  image:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

  content: `


A professional website is one of the most valuable business assets in 2026.
Customers search online before making purchasing decisions and businesses without a professional website lose credibility.

A modern website builds trust, generates leads, improves customer experience and creates a strong online presence.

With proper SEO, businesses can attract targeted visitors from search engines and convert them into paying customers.

A responsive design ensures visitors have a seamless experience across desktop, tablet and mobile devices.

Businesses that invest in professional web development gain a competitive advantage and create long-term growth opportunities.
`,
},


2: {
  title:
    "Creating Better Digital Experiences Through UI/UX Design",

  image:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5",

  content: `


User Experience (UX) and User Interface (UI) design directly influence how users interact with digital products.

A well-designed interface improves engagement, increases conversions and enhances customer satisfaction.

Businesses that prioritize usability create products that are easier to use and more enjoyable for customers.

Effective UI/UX design reduces friction, improves navigation and helps users achieve their goals quickly.

Companies investing in better digital experiences often see improved retention rates and stronger brand loyalty.
`,
},


3: {
  title:
    "The Future Of AI In Business Operations",

  image:
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",

  content: `


Artificial Intelligence is transforming the way businesses operate.

AI-powered tools automate repetitive tasks, improve customer support and provide valuable business insights.

Organizations are using AI for predictive analytics, marketing optimization, workflow automation and decision making.

Businesses that adopt AI early can improve efficiency, reduce costs and scale operations faster.

The future of business will increasingly rely on intelligent systems that enhance productivity and create competitive advantages.
`,
},
};

const article = articles[id];

return (
<> <Navbar />

```
  <section className="blog-detail-section">
    <div className="container">
      <div className="row">

        <div className="col-lg-8">

          <div className="blog-detail-card">

            <img
              src={article.image}
              alt={article.title}
            />

            <h1>{article.title}</h1>

            <p>{article.content}</p>

          </div>

        </div>

        <div className="col-lg-4">
          <BlogSidebar />
        </div>

      </div>
    </div>
  </section>

  <Footer />
</>


);
};

export default BlogDetail;
