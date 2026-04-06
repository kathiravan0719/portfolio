'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <>
      <Loader />
      <main className="noise-overlay">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
