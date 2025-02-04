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
                            I'm a Computer Science graduate from the University of Central Florida, currently working as an Analyst at Deloitte in the Enterprise Performance portfolio, where I drive digital transformation initiatives. My strong foundation in AI, machine learning, and software engineering is complemented by hands-on experience in developing innovative solutions and implementing cutting-edge technologies.
                        </p>
                        <p className="text-xl leading-relaxed">
                            Skilled in Python, Java, and cloud platforms (AWS, GCP), I'm passionate about leveraging AI to solve complex problems. I hold certifications including AWS Solutions Architect, AWS Cloud Practitioner, and NVIDIA-Certified Associate in Generative AI LLMs, demonstrating my expertise in cloud computing and machine learning.
                        </p>
                        <p className="text-xl leading-relaxed">
                            As a Secret Level Security Clearance holder, I have a proven track record of improving efficiency and user engagement in professional settings. My experience includes working effectively with teams, clients, and stakeholders to deliver go-to-market technologies and drive digital innovation.
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
