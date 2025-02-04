import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            date: "Sep 2024 - Present",
            title: "Technology Analyst | Deloitte",
            description: "Executing a $230 billion S/4HANA digital transformation initiative while implementing cybersecurity measures for a 300,000+ user client base, facilitating interactive workshops that increased client engagement by 20%."
        },
        {
            date: "Sep 2023 - Nov 2023",
            title: "Data Science Intern | AI Camp",
            description: "Led a 6-person team in developing an AI-powered web application that improved student engagement by 30% and educational outcomes by 25% using Agile methodologies."
        },
        {
            date: "Jun 2023 - Aug 2023",
            title: "Software Engineer Intern | SEI",
            description: "Designed Java APIs and automated browser testing workflows, reducing data retrieval time by 43% and exploring generative AI applications with actionable insights for leadership."
        }
    ];

    return (
        <section id="experience" className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-8">
                <motion.h2 
                    className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Experience
                </motion.h2>
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            className="mb-16 relative pl-12 border-l-4 border-blue-400"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="absolute w-6 h-6 bg-blue-400 rounded-full -left-3 top-1"></div>
                            <time className="text-lg text-gray-400 mb-2 block font-semibold">{exp.date}</time>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">{exp.title}</h3>
                            <p className="text-xl text-gray-300 leading-relaxed">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}