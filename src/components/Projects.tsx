import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SwapHub",
    description: "A full-stack e-commerce app to sell and buy pre-owned items",
    image: "/swaphub.png",
    tech: ["React", "Nextjs", "MongoDB"],
    github: "",
    live: ""
  },
  {
    title: "Jeopardy Game",
    description: "A fun Jeopardy game built with React and API",
    image: "/Jeopardy.png",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/bettygitbie/Jeopardy-API",
    live: "https://bettyjeopardygame.netlify.app/"
  },
  {
    title: "Butterfly Blog",
    description: "A quick blogging website using ejs and express",
    image: "/Butterfly-Blog.png",
    tech: ["Express", "EJS", "MongoDB"],
    github: "https://github.com/bettygitbie/Butterfly-blog",
    live: "https://github.com/bettygitbie/Butterfly-blog"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}