import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#prerequisites', label: 'Prerequisites' },
  { href: '#syllabus', label: 'Syllabus' },
  { href: '#projects', label: 'Projects' },
  { href: '#outcomes', label: 'Outcomes' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#clients', label: 'Clients' },
  { href: '#faq', label: 'FAQ' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 border-b-4 border-secondary ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-2 text-primary text-2xl font-display font-bold">
            <MicrochipIcon className="w-8 h-8 text-secondary" />
            YoctoTutor
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-base font-medium text-dark-text hover:text-secondary transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-gradient-accent text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Register
            </a>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-primary focus:outline-none">
              <span className="sr-only">Open menu</span>
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="pt-24 px-8">
            <nav className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu} className="text-xl font-medium text-dark-text hover:text-secondary transition-colors">
                    {link.label}
                </a>
                ))}
                <a href="#contact" onClick={closeMenu} className="bg-gradient-accent text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4">
                Register
                </a>
            </nav>
        </div>
      </div>
    </header>
  );
};

const MicrochipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-18 0h1.5M12 21v-1.5m0-16.5V3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6.375a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125s-5.125-2.28-5.125-5.125a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125S0 9.22 0 6.375a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125" transform="translate(4.5 6)" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 17.625a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125s5.125 2.28 5.125 5.125a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125S24 14.78 24 17.625a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125" transform="translate(-4.5 -6)" />
    </svg>
);


export default Header;