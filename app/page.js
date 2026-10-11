'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FreeInitiative from '../components/FreeInitiative'
import Services from '../components/Services'
import Projects from '../components/Projects'
import HowItWorks from '../components/HowItWorks'
import WhyWorkWithMe from '../components/WhyWorkWithMe'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import WhatsAppFAB from '../components/WhatsAppFAB'

export default function Home() {
  return (
    <>
      <Loader />
      <main className="noise-overlay">
        <Navbar />
        <Hero />
        <FreeInitiative />
        <Services />
        <Projects />
        <HowItWorks />
        <WhyWorkWithMe />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
        <WhatsAppFAB />
        <Footer />
      </main>
    </>
  )
}

