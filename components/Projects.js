import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  const projects = {
    "Plantify Mobile": {
      "desc": "A user-friendly mobile app using React Native, which leverages AI-powered Plant.id API for plant identification and Firebase for data storage and authentication.",
      "techStack": "React Native, Firebase, Git",
      "link": "https://github.com/PlantifyPOOSD/Plantify-Mobile",
    },
    "Amazon Q Clone": {
      "desc": "AI chatbot that consolidates enterprise data into a searchable repository.",
      "techStack": "Next.js, Typescript, Google Cloud Vision API & Embeddings Models, SingleStoreDB Vector Database, Apache Airflow",
      "link": "https://github.com/Artificial-Cognitive-Entity/acee-api",
    },
    "PDF AI": {
      "desc": "Interpret and accurately answer queries from PDF content.",
      "techStack": "Python, LangChain, OpenAI's GPT-3.5 Turbo, Facebook's FAISS",
      "link": "https://github.com/mihirar/PDF-AI",
      
    },
    "Portfolio Website": {
      "desc": "A sleek & responsive portfolio website built with the power of Next.js and Tailwind for modern web interactivity and performance.",
      "techStack": "React, Tailwind, Vercel",
      "link": "https://github.com/mihirar/portfolio",
      
    },
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {Object.entries(projects).map(([key, project], index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg rounded-lg p-8 flex flex-col justify-between h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-800"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-blue-400 text-3xl font-bold">{key}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.desc}</p>
              </div>
              <div className="mt-auto">
                <p className="text-gray-400 text-base font-medium">Tech Stack: {project.techStack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}