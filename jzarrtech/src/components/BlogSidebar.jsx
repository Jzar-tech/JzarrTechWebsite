import React from "react";
import "./BlogSidebar.css";

const recentPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title:
      "Building Scalable Websites for Modern Businesses",
    date: "November 8, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    title:
      "Creating Better Digital Experiences UI/UX",
    date: "November 16, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title:
      "The Future Of AI In Business Operations",
    date: "November 16, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title:
      "Building Scalable Websites for Modern Businesses",
    date: "November 8, 2025",
  },
];

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">

      {/* SEARCH */}

      <div className="sidebar-card">
        <h3>Search</h3>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
          />

          <button>
            🔍
          </button>
        </div>
      </div>

      {/* RECENT POSTS */}

      <div className="sidebar-card">
        <h3>Recent Posts</h3>

        {recentPosts.map((post, index) => (
          <div
            className="recent-post"
            key={index}
          >
            <img
              src={post.image}
              alt={post.title}
            />

            <div>
              <small>{post.date}</small>

              <p>{post.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CATEGORIES */}

      <div className="sidebar-card">
        <h3>Categories</h3>

        <div className="category-item">
          <span>Web Development</span>
          <span>(7)</span>
        </div>

        <div className="category-item">
          <span>Artificial Intelligence</span>
          <span>(3)</span>
        </div>

        <div className="category-item">
          <span>Mobile App Development</span>
          <span>(4)</span>
        </div>

        <div className="category-item">
          <span>WordPress & Shopify</span>
          <span>(5)</span>
        </div>

        <div className="category-item">
          <span>UI/UX Design</span>
          <span>(8)</span>
        </div>

        <div className="category-item">
          <span>API Integrations</span>
          <span>(6)</span>
        </div>

        <div className="category-item">
          <span>Technology Insights</span>
          <span>(4)</span>
        </div>

        <div className="category-item">
          <span>SEO & Digital Marketing</span>
          <span>(5)</span>
        </div>
      </div>

      {/* TAGS */}

      <div className="sidebar-card">
        <h3>Tags</h3>

        <div className="tags-wrap">

          <span className="tag">
            Development
          </span>

          <span className="tag">
            Artificial Intelligence
          </span>

          <span className="tag">
            Shopify
          </span>

          <span className="tag">
            UI/UX Design
          </span>

          <span className="tag">
            Mobile Apps
          </span>

          <span className="tag">
            WordPress
          </span>

        </div>
      </div>

    </div>
  );
};

export default BlogSidebar;