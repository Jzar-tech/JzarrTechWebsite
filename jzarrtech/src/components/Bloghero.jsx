// component of blog import React from "react";
import "./Bloghero.css";
import { FaBookOpen, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section className="blog-hero">

      <div className="blob blob-left"></div>
      <div className="blob blob-right"></div>

      <div className="wave-pattern"></div>

      <div className="blog-hero-content">

        <div className="blog-badge">
          <FaBookOpen />
          <span>LATEST INSIGHTS & RESOURCES</span>
        </div>

        <h1>Blog</h1>

        <p>
          Explore insights, technology trends,
          and practical solutions for growing
          your business online.
        </p>

       <div className="blog-breadcrumb">

  <Link to="/" className="breadcrumb-link">
    JZARR Tech
  </Link>

  <FaChevronRight />

  <span className="active">
    Blog
  </span>

</div>

      </div>

    </section>
  );
};

export default BlogHero;