import React from 'react';
import { personalData } from '../data';

const Header = () => {
  return (
    <header className="bg-gray-800 p-6 text-white text-center">
      <h1 className="text-4xl">{personalData.name}</h1>
      <p className="text-xl">{personalData.title}</p>
      <p className="text-xl">{personalData.location}</p>
      <nav className="mt-4">
        <a href="#about" className="mx-2 text-white">About</a>
        <a href="#experience" className="mx-2 text-white">Experience</a>
        <a href="#projects" className="mx-2 text-white">Projects</a>
        <a href="#contact" className="mx-2 text-white">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
