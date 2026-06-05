'use client';

import { Suspense, lazy } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import DevOpsJourney from '@/components/sections/DevOpsJourney';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import CursorGlow from '@/components/ui/CursorGlow';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <DevOpsJourney />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
