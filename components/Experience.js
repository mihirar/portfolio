import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Experience() {
    return (
        <div id="experience" className="py-10 sm:py-20 bg-black text-white text-center">
            <h2 className="text-3xl sm:text-4xl mb-5 text-white">Experience</h2>
            <div className="px-5 sm:px-20 max-w-prose mx-auto text-left">
                <ol className="relative border-l border-gray-500">                  
                    <li className="mb-10 ml-1 sm:ml-4">
                        <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-2 sm:mt-1.5 -left-1.5 sm:-left-1.5 border border-white"></div>
                        <time className="mb-1 ml-4 sm:ml-0 text-center sm:text-left text-sm font-normal leading-none text-white">May 2023 - Present</time>
                        <h3 className="text-base sm:text-lg font-semibold text-white">Wealth Platform Developer Intern - SEI</h3>
                        <p className="mb-4 text-sm sm:text-base font-normal text-white">Participating in a 10-week internship on an agile delivery team, assisting in platform development and wealth management solutions.</p>
                    </li>
                    <li className="mb-10 ml-1 sm:ml-4">
                        <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-2 sm:mt-1.5 -left-1.5 sm:-left-1.5 border border-white"></div>
                        <time className="mb-1 ml-4 sm:ml-0 text-sm font-normal leading-none text-white">May 2022 - Aug 2022</time>
                        <h3 className="text-base sm:text-lg font-semibold text-white">Java Developer Intern - BioKemp</h3>
                        <p className="mb-4 text-sm sm:text-base font-normal text-white">Interned at a biotechnology startup, where I applied my technical skills to develop an order management system with the Amazon and Etsy APIs</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}
