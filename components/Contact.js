import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

export default function Contact() {
    return (
      <div id="contact" className="grid grid-rows-auto-1fr-auto items-center bg-black text-white py-10">
        <div className="text-center text-white mx-10 mt-5 mb-20 row-start-1 row-end-2">
          <p className="text-xl mb-5">Let&apos;s connect,</p>
          <h1 className="text-5xl mb-5">Get in Touch!</h1>
          <p className="text-xl mb-5">Have any questions or want to reach out?</p>
          <a href="mailto:mihiraraveeti@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center h-10 px-5 transition-colors duration-150 bg-white text-black rounded-full focus:shadow-outline hover:bg-gray-500">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="ml-2">Email Me</span>
          </a>
        </div>
        <footer className="w-full text-center border-t border-grey p-4 py-5 row-start-3 row-end-4 text-white">
          <a href="https://github.com/mihirar" target="_blank" rel="noopener noreferrer" className='hover:text-gray-400 focus:shadow-outline'>
            Made with Next.js + Tailwind
          </a>
        </footer>
      </div>
    )
  }
  