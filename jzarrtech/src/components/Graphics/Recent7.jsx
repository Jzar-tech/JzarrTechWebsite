import React from "react";
import "./Recent7.css";

const projects = [
{
title: "2D Illustration",
image:
"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900",
},
{
title: "3D Architecture",
image:
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900",
},
{
title: "Product Rendering",
image:
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
},
{
title: "3D Character",
image:
"https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=900",
},
];

const Recent7 = () => {
return ( <section className="recent7">

```
  <div className="recent7-header">
    <span>OUR WORK</span>
    <h2>Featured Projects</h2>
  </div>

  <div className="recent7-grid">

    {projects.map((project, index) => (
      <div className="recent7-card" key={index}>

        <img
          src={project.image}
          alt={project.title}
        />

        <div className="project-overlay">
          <h3>{project.title}</h3>
        </div>

      </div>
    ))}

  </div>

</section>

);
};

export default Recent7;
