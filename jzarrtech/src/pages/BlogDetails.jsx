import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../components/Bloghero";
import BlogSidebar from "../components/BlogSidebar";


const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <BlogHero />

      <section className="blog-details-section">
        <div className="container">
          <div className="row">

            {/* LEFT CONTENT */}

            <div className="col-lg-8">

              <div className="article-card">

                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                  alt=""
                />

                <h1>
                  Why Every Business Needs a Professional Website in 2026
                </h1>

                <p>
                  In today's digital world, your website is often the first
                  impression customers have of your business. A professional
                  website builds trust, improves credibility, and helps
                  businesses generate more leads and sales.
                </p>

                <p>
                  Modern websites are no longer just online brochures. They
                  act as powerful sales tools that help businesses attract
                  customers through SEO, user-friendly experiences, and
                  conversion-focused design.
                </p>

                <h2>Benefits of a Professional Website</h2>

                <ul>
                  <li>Builds trust and credibility</li>
                  <li>Improves search engine visibility</li>
                  <li>Generates leads 24/7</li>
                  <li>Provides better customer experience</li>
                  <li>Increases conversions and revenue</li>
                </ul>

                <p>
                  Businesses that invest in professional web development gain
                  a competitive advantage and position themselves for
                  long-term growth.
                </p>

              </div>

            </div>

            {/* RIGHT SIDEBAR */}

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

export default BlogDetails;