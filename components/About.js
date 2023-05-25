import Image from 'next/image';

export default function About() {
    return (
      <div id="about" className="py-10 sm:py-20 bg-gray-100 flex flex-col sm:flex-row justify-between items-center px-5 sm:px-20">
        <div className="max-w-prose w-full sm:w-1/2 text-center sm:text-left mb-10 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl mb-5 text-black">About Me</h2>
            <p className="text-base sm:text-lg text-black leading-relaxed">
                I&apos;m a computer science student at the University of Central Florida, with a great interest in software engineering, artificial intelligence, and quantitative finance. 
                <br/>
                <br/>
                My strong foundation in computer science, combined with my dedication to continuous learning and growth, has driven me to excel in my coursework and projects.
                <br/>
                <br/>
                Aside from academics, my leadership role as the President of Delta Epsilon Psi Fraternity, Inc. has honed my skills in leadership and financial management. 
            </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
            <div className="rounded-full overflow-hidden inline-block">
                <Image
                    src="/memoji.png" // replace with your image path
                    alt="Profile Picture"
                    width={200}
                    height={200}
                />
            </div>
        </div>

      </div>
    )
}
