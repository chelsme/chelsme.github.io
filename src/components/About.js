import React from 'react';
import { personalData } from '../data';

const About = () => {
  return (
    <section id="about" className="p-6">
      <h2 className="text-2xl border-b-2 border-gray-800 pb-2">About Me</h2>
      <p className="mt-4">{personalData.bio}</p>
    </section>
  );
};

export default About;
