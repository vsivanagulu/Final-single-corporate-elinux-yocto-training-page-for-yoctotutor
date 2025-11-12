import React from 'react';

// Fix: Add icon component definitions
const CalendarDaysIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" />
    </svg>
);

const BuildingOffice2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
);

const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
);

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor">
      <path
        d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm7.4 20.8a7.8 7.8 0 0 1-2.9 1.4 7.6 7.6 0 0 1-1.3.1 3.5 3.5 0 0 1-1.2-.2c-.4-.1-.8-.3-1.2-.5a12.6 12.6 0 0 1-4.2-3.8c-1.2-1.6-1.9-3.2-2.1-4.5a3.8 3.8 0 0 1 .4-2.1c.3-.6.7-1.1 1.2-1.4a1.4 1.4 0 0 1 .6-.2c.2 0 .4 0 .6.1.3.1.5.3.7.5l.4.5c.2.2.3.4.4.6.1.2.1.4.1.6a.9.9 0 0 1-.2.7l-1 1.7a1.5 1.5 0 0 0-.2 1.3c.2.5.5 1 .9 1.5.5.6 1 1.1 1.7 1.5.5.3.9.4 1.3.3.4-.1.7-.3.9-.5l.4-.5c.2-.2.5-.4.8-.4s.5.1.7.3l1.5 1.4c.2.2.4.5.5.8.1.3.1.6 0 .9a3 3 0 0 1-.6 1z"
      />
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative text-white py-20 md:py-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fadeInUp space-y-6 max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
              Porting Embedded Linux BSP using Yocto Project
            </h1>
            <div className="text-secondary-bright text-xl md:text-2xl font-medium">
              <p className="mb-4">
                <span className="bg-accent-light/90 text-primary-dark px-3 py-1 rounded-md shadow-lg animate-pulse-glow transition-transform duration-300 hover:scale-105">
                  Is Your Company Has Developed Custom Hardware?
                </span>
              </p>
              <p> Need to Port U-Boot, Linux Kernel, and Yocto BSP?</p>
            </div>
            
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              YoctoTutor provides enterprise-grade BSP porting, corporate training, and hands-on bring-up services — tailored to your actual board. Reduce time-to-boot and move faster to production with our proven workflows and expert trainers.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CalendarDaysIcon className="w-5 h-5 text-accent-light" />
                <span>8 Full Days</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <BuildingOffice2Icon className="w-5 h-5 text-accent-light" />
                <span>Corporate Focused</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <AcademicCapIcon className="w-5 h-5 text-accent-light" />
                <span>Expert-Led Training</span>
              </div>
            </div>

            <div className="pt-6">
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#contact" className="inline-flex items-center gap-3 bg-gradient-accent text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        Connect With Us <ArrowRightIcon className="w-5 h-5" />
                    </a>
                     <a 
                        href="https://wa.me/message/55NF67U3BP3WN1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl"
                    >
                        <WhatsAppIcon className="w-6 h-6" /> Chat on WhatsApp
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;