
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="flex items-center gap-2 text-xl font-bold text-secondary-bright mb-4">
              <MicrochipIcon className="w-7 h-7" />
              YoctoTutor
            </h3>
            <p className="text-white/80 leading-relaxed">
              Professional embedded systems and IoT training for the next generation of engineers.
            </p>
          </div>
          <div className="md:col-span-1 md:justify-self-center">
            <h3 className="text-lg font-semibold text-secondary-bright mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white hover:underline">About</a></li>
              <li><a href="#syllabus" className="text-white/80 hover:text-white hover:underline">Syllabus</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-white hover:underline">Projects</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-1 md:justify-self-end">
            <h3 className="text-lg font-semibold text-secondary-bright mb-4">Contact</h3>
             <ul className="space-y-2 text-white/80">
                <li>siva.v@yoctotutor.com</li>
                <li>+91 9966635319</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} YoctoTutor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const MicrochipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-18 0h1.5M12 21v-1.5m0-16.5V3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6.375a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125s-5.125-2.28-5.125-5.125a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125S0 9.22 0 6.375a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125" transform="translate(4.5 6)" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 17.625a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125s5.125 2.28 5.125 5.125a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125S24 14.78 24 17.625a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125" transform="translate(-4.5 -6)" />
    </svg>
);


export default Footer;
