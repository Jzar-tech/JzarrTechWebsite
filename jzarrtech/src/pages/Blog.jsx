import React from "react";
import Navbar from "../components/Navbar";
import Bloghero from "../components/Bloghero";
import BlogContent from "../components/BlogContent";
import BlogSidebar from "../components/BlogSidebar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Bloghero />

      <section className="blog-page">
        <div className="container">
          <div className="row">

            <div className="col-lg-8">
              <BlogContent />
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

export default Blog;