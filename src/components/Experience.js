import React from 'react';
import { experienceData } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="p-6 bg-gray-100">
      <h2 className="text-2xl border-b-2 border-gray-800 pb-2">Experience</h2>
      <ul className="mt-4">
        {experienceData.map((job, index) => (
          <li className="mb-4" key={index}>
            <h3 className="text-xl">{job.company}</h3>
            <p className="text-gray-600">{job.role}</p>
            <p className="text-gray-600">{job.period}</p>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-600">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
