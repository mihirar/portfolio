import NavBar from './NavBar'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // import the download icon

export default function Landing() {
    return (
      <div className="relative h-screen flex">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <NavBar />
          <div className="text-center text-white mx-10">
          <p className="text-xl mb-5">Hi, my name is</p>
         <h1 className="text-5xl mb-5">Mihir Araveeti.</h1>
         <p className="text-xl mb-5">I’m a computer science student specializing in building exceptional digital experiences.
          Currently, I’m a Wealth Platform Developer Intern at SEI. </p>
            <div className="mb-10">
              <a href="https://www.linkedin.com/in/mihir-ar/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/mihirar" target="_blank" rel="noopener noreferrer" className="ml-10">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
            <a href="/Mihir_Araveeti_Fall_2023.pdf" target="_blank"
             rel="noopener noreferrer" 
             class="inline-flex items-center h-10 px-5 mt-1/2 transition-colors duration-150
              bg-white text-black rounded-full focus:shadow-outline hover:bg-gray-400">
                <FontAwesomeIcon icon={faDownload} />
                <span className="ml-2">Download Resume</span>
            </a>

          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          {/* Placeholder for profile picture */}
          <Image
            src="/me.jpg" // Path to your image
            alt="Profile"
            width={200} // replace with your image's width
            height={200} // replace with your image's height
            className="rounded-full"
          />
        </div>
      </div>
    )
}
