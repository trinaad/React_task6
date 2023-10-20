import React from "react";

const projectData = [
  {
    title: "Portfolio Website",
    description: "A simple portfolio website created using React.",
    image: "portfolio.png",
  },
  {
    title: "Task Management App",
    description: "A task management application built with React and Redux.",
    image: "task-app.png",
  },
  {
    title: "E-commerce Website",
    description:
      "An e-commerce website with product listings and a shopping cart.",
    image: "ecommerce.jpg",
  },
  {
    title: "Blog Website",
    description: "A blog website with articles and user comments.",
    image: "blog.png",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
