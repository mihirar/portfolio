import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import NavBar from '../components/NavBar'
import '../app/globals.css'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <div className="text-black">
        <Landing />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Analytics />
    </>
  )
}
