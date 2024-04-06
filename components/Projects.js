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
    "ACEE (Artificial Cognitive Entity for Enterprises)": {
      "desc": "AI chatbot that consolidates enterprise data into a searchable repository",
      "techStack": "Next.js, Typescript, Google Cloud Vision API & Embeddings Models, SingleStoreDB Vector Database, Apache Airflow",
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
    <div id="projects" className="py-20 bg-black text-white text-center px-10 sm:px-20">
      <h2 className="text-4xl mb-5">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.keys(projects).map((key, i) => (
          <li key={key} className="bg-gray-800 rounded-lg shadow-lg p-4 transform transition duration-500 hover:bg-gray-900 hover:-translate-y-2 text-white">
            <div className="flex justify-between items-center">
              <div>
                <FontAwesomeIcon icon={faFolderOpen} size="2x"/>
              </div>
              <div>
                <a href={projects[key]["link"]} target="_blank" rel="noopener noreferrer" className="ml-10 text-white">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>
            <h3 className="text-xl mb-2 mt-2 font-bold text-white">{key}</h3>
            <p className="mb-2">{projects[key]["desc"]}</p>
            <p className="text-white">{projects[key]["techStack"]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
