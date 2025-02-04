import Head from 'next/head';
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import '../app/globals.css'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mihir Araveeti - Software Engineering</title>
        <meta name="description" content="Mihir Araveeti's portfolio, showcasing skills, experience, and projects. Specializing in building exceptional digital experiences." />
        <meta name="keywords" content="Mihir Araveeti, Software Engineering, Portfolio, Projects, Skills, Experience" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="text-black">
        <Sidebar />
        <Landing />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </div>
      <Analytics />
    </>
  )
}
