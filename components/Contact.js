import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl mb-4 text-gray-400">Let&apos;s connect,</p>
            <motion.h2 
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in Touch!
            </motion.h2>
            <p className="text-xl mb-8 text-gray-300">Have any questions or want to reach out?</p>
            <div className="flex justify-center space-x-4">
              <motion.a 
                href="mailto:mihiraraveeti@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email Me
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/mihir-ar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.footer 
          className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="https://github.com/mihirar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition duration-300"
          >
            Made with Next.js + Tailwind
          </a>
        </motion.footer>
      </section>
    )
  }
