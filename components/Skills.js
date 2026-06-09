import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, FaCode, FaJava, FaJs, FaReact, FaDatabase, 
  FaHtml5, FaCss3Alt, FaGit, FaJira, FaAws, FaLinux, FaBitbucket
} from 'react-icons/fa';
import { 
  SiPostman, SiMysql, SiTypescript, SiVisualstudiocode, 
  SiVercel, SiGooglecloud, SiNodedotjs, SiNextdotjs, SiPytorch,
  SiConfluence, SiR
} from 'react-icons/si';
import { TbBrandOpenai, TbVector, TbBrain } from 'react-icons/tb';

export default function Skills() {
  const languages = [
    { name: "Python", icon: FaPython },
    { name: "SQL/MySQL", icon: SiMysql },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: FaJs },
    { name: "Java", icon: FaJava },
    { name: "R", icon: SiR },
    { name: "HTML/CSS", icon: () => (
      <div className="flex space-x-1">
        <FaHtml5 /><FaCss3Alt />
      </div>
    )},
  ];

  const aiml = [
    { name: "PyTorch", icon: SiPytorch },
    { name: "LangChain", icon: TbBrain },
    { name: "Hugging Face", icon: TbBrain },
    { name: "Vector Embeddings", icon: TbVector },
    { name: "RAG Pipelines", icon: TbVector },
    { name: "Palantir Foundry", icon: FaDatabase },
    { name: "Palantir AIP", icon: TbBrandOpenai },
  ];

  const developerTools = [
    { name: "AWS", icon: FaAws },
    { name: "Google Cloud Platform", icon: SiGooglecloud },
    { name: "Linux / RHEL", icon: FaLinux },
    { name: "Apache Airflow", icon: FaDatabase },
    { name: "Git", icon: FaGit },
    { name: "Jira", icon: FaJira },
    { name: "Postman", icon: SiPostman },
    { name: "VS Code", icon: SiVisualstudiocode },
    { name: "Vercel", icon: SiVercel },
  ];

  const frameworks = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "React Native", icon: FaReact },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4 text-white"
        >
          <SkillCategory title="Languages" items={languages} color="blue" icon="fas fa-code" />
          <SkillCategory title="AI / ML" items={aiml} color="blue" icon="fas fa-brain" />
          <SkillCategory title="Tools & Platforms" items={developerTools} color="blue" icon="fas fa-tools" />
          <SkillCategory title="Frameworks" items={frameworks} color="blue" icon="fas fa-layer-group" />
        </motion.div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items, color, icon }) {
  return (
    <div className="bg-gray-900 shadow-lg rounded-lg p-8">
      <h3 className={`text-3xl font-extrabold mb-6 text-${color}-400 flex items-center border-b-2 border-${color}-400 pb-3`}>
        <i className={`${icon} mr-4 text-3xl`}></i> {title}
      </h3>
      <ul className="space-y-4 text-lg">
        {items.map(({ name, icon: Icon }) => (
          <li key={name} className="flex items-center">
            <div className={`text-${color}-400 text-2xl mr-4`}>
              {typeof Icon === 'function' ? <Icon /> : <Icon size={28} />}
            </div>
            <span className="text-xl">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}