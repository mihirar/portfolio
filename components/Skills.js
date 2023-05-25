import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Skills() {
  const skills = [
    { name: "Python", icon: "icons/icons8-python.svg" },
    { name: "C", icon: "/icons/icons8-c-programming.svg" },
    { name: "Java", icon: "/icons/icons8-java.svg" },
    { name: "JavaScript", icon: "/icons/icons8-javascript.svg" },
    { name: "React/React Native", icon: "/icons/icons8-react-native.svg" },
    { name: "SQL/MySQL", icon: "/icons/icons8-mysql.svg" },
    { name: "HTML5", icon: "/icons/icons8-html5.svg" },
    { name: "Tailwind.css", icon: "/icons/icons8-tailwind-css.svg" },
    { name: "R", icon: "/icons/icons8-r-project.svg" },
    { name: "Firebase", icon: "/icons/icons8-firebase.svg" },
    { name: "Git", icon: "/icons/icons8-git.svg" },
    { name: "Microsoft Office", icon: "/icons/icons8-microsoft-office-2019.svg" },
    { name: "Jira", icon: "/icons/icons8-jira.svg" },
    { name: "Pandas", icon: "/icons/icons8-pandas.svg" },
    { name: "Slack", icon: "/icons/icons8-slack.svg" },
  ];
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <div id="skills" className="flex flex-col items-center justify-center bg-gray-100 py-10">
      <h2 className="text-4xl mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map(({ name, icon }) => (
          <div 
            key={name} 
            className="group flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-90"
          >
            <div className="group-hover:opacity-80 transition-all duration-300 ease-in-out transform hover:scale-90">
              <Image
                src={icon}
                alt={name}
                width={75}
                height={75}
              />
            </div>
            <p className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 ease-in-out scale-0 group-hover:scale-100">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
