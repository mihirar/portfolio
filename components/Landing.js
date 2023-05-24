import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function SidebarNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const links = [
    { href: "about", label: "About" },
    { href: "experience", label: "Experience" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" }
  ];

  return (
    <nav className="fixed top-0 right-0 p-5 md:top-1/2 md:right-10 transform md:-translate-y-1/2 z-50">
      <button 
        onClick={handleToggle} 
        className="md:hidden flex items-center px-3 py-2 border rounded text-white border-black hover:text-black hover:border-black transition duration-200 ease-in-out"
      >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
          {isExpanded ? (
            // 'X' icon when expanded
            <path fill="currentColor" d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0 c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.229,0-1.697s1.229-0.469,1.697,0L10,8.183l2.651-3.031 c0.469-0.469,1.229-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15C14.817,13.62,14.817,14.38,14.348,14.849z" />
          ) : (
            // 'Hamburger' icon when not expanded
            <path fill="currentColor" d="M0,3h20v2H0V3z M0,9h20v2H0V9z M0,15h20v2H0V15z" />
          )}
        </svg>
      </button>

      <div className={`md:flex ${isExpanded ? 'block' : 'hidden'}`}>
        <div className="space-y-5 md:space-y-8">
          {links.map((link) => (
            <ScrollLink 
              key={link.href} 
              to={link.href} 
              className="block bg-gray-100 text-black hover:bg-white hover:text-black py-2 px-4 rounded-full md:text-right md:font-bold" 
              smooth={true} 
              duration={1000}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function Landing() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <SidebarNav />
      <div className="w-full flex flex-col justify-center items-center p-8 md:p-0">
        <div className="text-center text-white mx-10">
          <p className="text-xl mb-5">Hi, my name is</p>
          <h1 className="text-5xl mb-5">Mihir Araveeti.</h1>
          <p className="text-xl mb-5">I’m a computer science student specializing in building exceptional digital experiences.<br/>
            Currently, I’m a Wealth Platform Developer Intern at SEI. </p>
          <div className="mb-10">
            <a href="https://www.linkedin.com/in/mihir-ar/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/mihirar" target="_blank" rel="noopener noreferrer" className="ml-10">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <a href="/Mihir_Araveeti_Fall_2023.pdf" target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-10 mb-5 px-5 mt-1/2 transition-colors duration-150
            bg-white text-black rounded-full focus:shadow-outline hover:bg-gray-400">
            <FontAwesomeIcon icon={faDownload} />
            <span className="ml-2">Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  )
}
