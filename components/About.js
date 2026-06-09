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
                            I&apos;m a Data Scientist II currently at Booz Allen Hamilton, where I build production data and AI systems for top federal clients. My work spans machine learning pipelines, AI application development, and data infrastructure in Department of War environments.
                        </p>
                        <p className="text-xl leading-relaxed">
                            I hold an AWS Solutions Architect certification and an NVIDIA Generative AI certification, and I&apos;ve built independent projects involving vector embeddings, multimodal retrieval, and full-stack AI applications. 
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
