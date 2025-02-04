import React from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-black text-white">
      <motion.div 
        className="text-center text-white mx-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p className="text-xl mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>Hi, my name is</motion.p>
        <motion.h1 
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text leading-tight"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 1 }}
        >
          Mihir Araveeti.
        </motion.h1>
        <motion.p className="text-xl text-gray-400 max-w-2xl mx-auto animated-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
          I specialize in building applications combining my skills in software engineering and artificial intelligence.
        </motion.p>

        <motion.div className="flex justify-center space-x-6 mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
          <motion.a
            href="https://www.linkedin.com/in/mihir-ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </motion.a>
          <motion.a
            href="https://github.com/mihirar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bouncing Arrow */}
      <motion.div 
        className="absolute bottom-20 animate-bounce"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="about" smooth={true} duration={800}>
          <FontAwesomeIcon icon={faArrowDown} className="h-8 w-8 text-gray-400 hover:text-white" />
        </Link>
      </motion.div>
    </div>
  );
}
