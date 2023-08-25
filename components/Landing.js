import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

function SidebarNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded(!isExpanded);

  const links = [
    { href: "about", label: "About" },
    { href: "experience", label: "Experience" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" }
  ];

  return (
    <>
      <nav className="fixed lg:top-1/2 lg:right-5 transform lg:-translate-y-1/2 z-50 lg:flex hidden">
        <div className="space-y-5 lg:space-y-8">
          {links.map((link) => (
            <ScrollLink 
              key={link.href} 
              to={link.href} 
              className="block bg-gray-100 text-black hover:bg-white hover:text-black py-2 px-4 rounded-full lg:text-right lg:font-bold" 
              smooth={true} 
              duration={1000}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </nav>

      <div className={`fixed top-0 left-0 w-full h-full p-5 bg-black text-white transition-transform duration-200 ease-in-out z-50 ${isExpanded ? 'block' : 'hidden'} lg:hidden`}>
        <div className="space-y-5">
          {links.map((link) => (
            <ScrollLink 
              key={link.href} 
              to={link.href} 
              className="block bg-gray-800 text-white hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full text-left font-bold"
              smooth={true} 
              duration={1000}
              onClick={handleToggle}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </div>

      <button onClick={handleToggle} className={`fixed top-0 right-0 m-5 p-2 w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full z-50 ${isExpanded ? 'hidden' : 'block'} lg:hidden`}>
        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
          <path fill="currentColor" d="M0,3h20v2H0V3z M0,9h20v2H0V9z M0,15h20v2H0V15z" />
        </svg>
      </button>
    </>
  );
}


//Testing

export default function Landing() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <SidebarNav />
      <div className="w-full flex flex-col justify-center items-center p-8 md:p-0">
        <motion.div 
          className="text-center text-white mx-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p className="text-xl mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>Hi, my name is</motion.p>
          <motion.h1 className="text-5xl mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>Mihir Araveeti.</motion.h1>
          <motion.p className="text-xl mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>I specialize in building exceptional digital experiences.<br/>
            Currently, I’m an intern at AI Camp. </motion.p>
            <motion.div className="mb-10 flex space-x-4 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
              <a href="https://www.linkedin.com/in/mihir-ar/" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </motion.div>
              </a>
              <a href="https://github.com/mihirar" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </motion.div>
              </a>
            </motion.div>

          <motion.a 
            href="/Mihir_Araveeti_Resume-Main.pdf" target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-10 mb-5 px-5 mt-1/2 transition-colors duration-150
            bg-white text-black rounded-full focus:shadow-outline hover:bg-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span className="ml-2">Download Resume</span>
          </motion.a>
        </motion.div>
        <motion.div 
          className="absolute bottom-5 animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-white"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1, duration: 1 }}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </motion.div>

      </div>
    </div>
  )
}