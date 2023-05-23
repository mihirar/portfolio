import { Link as ScrollLink } from 'react-scroll';

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 p-8 flex justify-center">
      <div className="flex space-x-8">
        <ScrollLink to="about" className="nav-item cursor-pointer rounded-full px-6 py-2 hover:bg-gray-700 bg-white" smooth={true} duration={1000}>
          About
        </ScrollLink>
        <ScrollLink to="experience" className="nav-item cursor-pointer rounded-full px-6 py-2 hover:bg-gray-700 bg-white" smooth={true} duration={1000}>
          Experience
        </ScrollLink>
        <ScrollLink to="skills" className="nav-item cursor-pointer rounded-full px-6 py-2 hover:bg-gray-700 bg-white" smooth={true} duration={1000}>
          Skills
        </ScrollLink>
        <ScrollLink to="projects" className="nav-item cursor-pointer rounded-full px-6 py-2 hover:bg-gray-700 bg-white" smooth={true} duration={1000}>
          Projects
        </ScrollLink>
      </div>
    </div>
  );
}
