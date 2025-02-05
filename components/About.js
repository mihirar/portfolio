import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                <motion.div 
                    className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">About Me</h2>
                    <motion.div 
                        className="space-y-6 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <p className="text-xl leading-relaxed">
                            Hi, I&apos;m Mihir. As a computer science graduate from UCF, I currently drive digital transformation initiatives as an <b>Analyst at Deloitte</b> under the Enterprise Performance portfolio, leveraging my expertise in AI, machine learning, and software engineering to develop innovative technological solutions.
                        </p>
                        <p className="text-xl leading-relaxed">
                            With deep expertise in Python and cloud platforms, I&apos;m passionate about solving complex problems through the use of <b>cloud and generative AI</b>. My professional credentials include cloud and generative AI certifications from <b>AWS and NVIDIA</b>, underscoring my comprehensive knowledge in cloud computing and machine learning.
                        </p>
                        <p className="text-xl leading-relaxed">
                            With a <b>Secret Level Security Clearance</b>, I deliver transformative results by improving organizational efficiency and user engagement through strategic collaboration with teams, clients, and stakeholders, accelerating digital innovation and go-to-market technologies.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="/necessary-disorder tutorials.gif"
                        alt="Profile Gif"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    )
}
