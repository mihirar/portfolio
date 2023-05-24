import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Projects() {
  const projects = {
    "Plantify Mobile": {
      "desc": "A user-friendly mobile app using React Native, which leverages AI-powered Plant.id API for plant identification and Firebase for data storage and authentication.",
      "techStack": "React Native, Firebase, Git",
      "link": "https://github.com/PlantifyPOOSD/Plantify-Mobile",
      "open": "https://project1.com"
    },
    "PDF AI": {
      "desc": "A Python-based application that uses AI/ML technologies like LangChain, OpenAI's GPT-3.5 Turbo, and Facebook's FAISS to interpret and accurately answer queries from PDF content.",
      "techStack": "Python, LangChain, OpenAI API, Facebook AI Similarity Search",
      "link": "https://github.com/mihirar/PDF-AI",
      "open": "https://project2.com"
    },
    "Portfolio Website": {
      "desc": "A sleek, responsive portfolio website designed to showcase my skills and projects, built with the power of React and Tailwind for modern web interactivity and performance.",
      "techStack": "React, Tailwind, Vercel",
      "link": "https://github.com/mihirar/portfolio",
      "open": "https://project2.com"
    },
    // add more projects...
  };

  return (
    <div id="projects" className="py-20 bg-gray-100 text-center px-5 md:px-20 lg:px-40">
      <h2 className="text-4xl mb-5">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.keys(projects).map((key, i) => (
          <li key={key} className="bg-white rounded-lg shadow-lg p-4 transform transition duration-500 hover:bg-blue-200 hover:-translate-y-2">
            <div className="flex justify-between items-center">
              <div>
                <FontAwesomeIcon icon={faFolderOpen} size="2x"/>
              </div>
              <div>
                <a href={projects[key]["link"]} target="_blank" rel="noopener noreferrer" className="ml-10">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>
            <h3 className="text-xl mb-2 mt-2 font-bold text-black">{key}</h3>
            <p className="mb-2">{projects[key]["desc"]}</p>
            <p className="text-black">{projects[key]["techStack"]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
