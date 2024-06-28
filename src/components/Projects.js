import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-6">
      <h2 className="text-2xl border-b-2 border-gray-800 pb-2">Projects</h2>
      <ul className="mt-4">
        <li className="mb-4">
          <h3 className="text-xl">Project A</h3>
          <p>Description of Project A</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl">Project B</h3>
          <p>Description of Project B</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl">Project C</h3>
          <p>Description of Project C</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
