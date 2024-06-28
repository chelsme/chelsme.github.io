import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="p-6 bg-gray-100">
      <h2 className="text-2xl border-b-2 border-gray-800 pb-2">Experience</h2>
      <ul className="mt-4">
        <li className="mb-4">
          <h3 className="text-xl">Umbrage, Part of Bain and Company</h3>
          <p className="text-gray-600">Senior Software Engineer</p>
          <p className="text-gray-600">Sep 2021 - Present</p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl">Accenture</h3>
          <p className="text-gray-600">Software Engineer</p>
          <p className="text-gray-600">May 2019 - Sep 2021</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
