import React from 'react';
import { personalData } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="p-6 bg-gray-100">
      <h2 className="text-2xl border-b-2 border-gray-800 pb-2">Contact</h2>
      <p className="mt-4"><a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">
        {personalData.email}
      </a></p>
      <p className="mt-4"><a href={personalData.linkedin} className="text-blue-500">LinkedIn</a></p>
    </section>
  );
};

export default Contact;
