import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAws, FaCertificate, FaPython, FaCode, FaJava, FaJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaFire, FaGit, FaJira, FaBitbucket, FaSearch } from 'react-icons/fa';
import { SiPostman, SiConfluence, SiMysql } from 'react-icons/si';

export default function Skills() {
  const languages = [
    { name: "Python", icon: FaPython },
    { name: "C", icon: FaCode },
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: FaJs },
    { name: "React Native", icon: FaReact },
    { name: "R", icon: FaCode },
    { name: "SQL", icon: SiMysql },
    { name: "HTML/CSS", icon: () => (<><FaHtml5 /><FaCss3Alt /></>) },
  ];

  const technologies = [
    { name: "Firebase", icon: FaFire },
    { name: "Git", icon: FaGit },
    { name: "Postman", icon: SiPostman },
    { name: "Jira", icon: FaJira },
    { name: "Bitbucket", icon: FaBitbucket },
    { name: "Confluence", icon: SiConfluence },
    { name: "Vector Databases", icon: FaDatabase },
    { name: "Embeddings", icon: FaCode },
    { name: "Semantic Search", icon: FaSearch },
  ];

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", icon: FaAws },
    { name: "AWS Certified Solutions Architect", icon: FaAws },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      id="skills" 
      className="flex flex-col items-center justify-center bg-black to-black text-white py-20 px-8 sm:px-20"
    >
      <h2 className="text-4xl mb-5">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-screen-lg">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl mb-6 font-semibold text-blue-400">Languages</h3>
          <div className="grid grid-cols-2 gap-4">
            {languages.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center space-x-2">
                <div className="text-2xl text-blue-400">
                  {typeof Icon === 'function' ? <Icon /> : <Icon size={24} />}
                </div>
                <p className="text-lg">{name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl mb-6 font-semibold text-green-400">Technologies</h3>
          <div className="grid grid-cols-2 gap-4">
            {technologies.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center space-x-2">
                <div className="text-2xl text-green-400">
                  <Icon size={24} />
                </div>
                <p className="text-lg">{name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl mb-6 font-semibold text-yellow-400">Certifications</h3>
          <div className="space-y-4">
            {certifications.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center space-x-2">
                <div className="text-2xl text-yellow-400">
                  <Icon size={24} />
                </div>
                <p className="text-lg">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
