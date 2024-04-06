import Image from 'next/image';

export default function About() {
    return (
      <div id="about" className="py-10 sm:py-20 bg-black flex flex-col sm:flex-row justify-between items-center px-5 sm:px-20 min-h-screen">
        <div className="max-w-prose w-full sm:w-1/2 text-center sm:text-left mb-10 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl mb-5 text-white">About Me</h2>
            <p className="text-base sm:text-lg text-white leading-relaxed">
                I&apos;m a computer science student at the University of Central Florida, graduating in May 2024. My strong foundation in computer science, combined with my dedication to continuous learning and growth, has driven me to excel in my coursework and projects.
                <br/>
                <br/>
                My coursework includes Data Structures &amp; Algorithms, Machine Learning, Artificial Intelligence, Object-Oriented Programming, Systems Software, Discrete Structures, Prompt Engineering, Security in Computing, and Processes of Object-Oriented Software.
                <br/>
                <br/>
                As the President of Delta Epsilon Psi Fraternity, Inc., Lambda Chapter, I have honed my leadership skills in strategic planning, philanthropic initiatives, and community service. I&apos;m passionate about fostering leadership development and making a positive impact in my community.
                <br/>
                <br/>
                With my strong technical background, diverse skill set, and leadership experience, I&apos;m well-equipped to tackle complex challenges and contribute to innovative projects at the intersection of software engineering and artificial intelligence.
            </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
            <Image
                src="/necessary-disorder tutorials.gif" // replace with your gif path
                alt="Profile Gif"
                width={400}
                height={400}
            />
        </div>
      </div>
    )
}
