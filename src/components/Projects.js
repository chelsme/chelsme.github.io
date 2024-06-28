import React from 'react';
import { projectData } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="p-6">
      <h2 className="text-2xl border-b-2 border-gray-800 pb-2">Projects</h2>
      <p className="text-lg mt-4 mb-6">
        Throughout my career, I have primarily worked in consulting, which has given me a wealth of experience across a variety of short-term projects. This dynamic environment has required me to quickly scale up and adapt to new technologies and project requirements, enhancing my versatility and expertise.
      </p>
      <ul className="mt-4">
        {projectData.map((project, index) => (
          <li className="mb-4" key={index}>
            <h3 className="text-xl">Project {index + 1}</h3>
            <div className="flex flex-wrap gap-2 my-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="pill">
                  {tech}
                </span>
              ))}
            </div>
            <p>{project.description}</p>
            <p className="mt-2 text-sm text-gray-600">Period: {project.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
