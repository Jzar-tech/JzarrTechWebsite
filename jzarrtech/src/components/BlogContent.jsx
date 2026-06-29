import React from "react";
import "./BlogContent.css";
import { useNavigate } from "react-router-dom";

const blogs = [
{
id: 1,
image:
"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
title:
"Why Every Business Needs a Professional Website in 2026",
description:
"A professional website helps businesses build trust, attract customers, and increase sales. Learn how modern web design can support business growth and improve customer engagement.",
},

{
id: 2,
image:
"https://images.unsplash.com/photo-1561070791-2526d30994b5",
title:
"Creating Better Digital Experiences Through UI/UX Design",
description:
"Discover how modern UI/UX principles help businesses improve conversions, customer retention, and user satisfaction.",
},

{
id: 3,
image:
"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
title:
"The Future Of AI In Business Operations",
description:
"Explore how artificial intelligence is transforming automation, customer service, analytics, and business growth.",
},
];

const BlogContent = () => {
const navigate = useNavigate();

return ( <section className="blog-section"> <div className="container"> <div className="row">

```
      <div className="col-lg-12">

        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>

            <img
              src={blog.image}
              alt={blog.title}
            />

            <h2>{blog.title}</h2>

            <p>{blog.description}</p>

            <button
              className="article-btn"
              onClick={() =>
                navigate(`/blog/${blog.id}`)
              }
            >
              Explore The Article
            </button>

          </div>
        ))}

      </div>

    </div>
  </div>
</section>


);
};

export default BlogContent;
