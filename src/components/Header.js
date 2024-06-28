import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-6 text-white text-center">
      <h1 className="text-4xl">Chelsea Crowson</h1>
      <p className="text-xl">Senior Software Engineer</p>
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
