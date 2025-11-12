import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Prerequisites from './components/Prerequisites';
import Syllabus from './components/Syllabus';
import Projects from './components/Projects';
import TrainingOutcome from './components/TrainingOutcome';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-light font-sans text-dark-text leading-relaxed">
      <main>
        <Hero />
        <Header />
        <About />
        <Benefits />
        <Prerequisites />
        <Syllabus />
        <Projects />
        <TrainingOutcome />
        <Pricing />
        <Testimonials />
        <Clients />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;