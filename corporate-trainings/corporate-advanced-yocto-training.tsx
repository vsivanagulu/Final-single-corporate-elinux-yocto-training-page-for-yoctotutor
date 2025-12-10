
import React, { useState, useEffect, useRef } from 'react';
import TrainingsContact from '../trainings-contact';
import './corporate-advanced-yocto-training.css';

// --- Common Icons ---

const MicrochipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-18 0h1.5M12 21v-1.5m0-16.5V3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6.375a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125s-5.125-2.28-5.125-5.125a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125S0 9.22 0 6.375a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125" transform="translate(4.5 6)" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 17.625a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125s5.125 2.28 5.125 5.125a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125S24 14.78 24 17.625a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125" transform="translate(-4.5 -6)" />
    </svg>
);

const CalendarDaysIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" />
    </svg>
);

const BuildingOffice2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5m-1.5 3h1.5m9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
);

const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-18 0h1.5M12 21v-1.5m0-16.5V3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5v9H3.75v-9Z" />
    </svg>
);

const RocketLaunchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 0-7.38-5.84m2.56 5.84L6.16 20.34m0 0L2.34 16.54m3.82 3.8L10.22 10.22m5.37-5.37L16.54 2.34m3.8 3.82-3.44 3.44" /></svg>
);

const Cog6ToothIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 12h3m-7.5-3.75h12M4.5 6.75h15m-15 9h15m-6-15h.008v.008h-.008V6.75Zm.008 3h.008v.008h-.008v-.008Zm.008 3h.008v.008h-.008v-.008Zm.008 3h.008v.008h-.008v-.008Zm-3-3h.008v.008h-.008v-.008Zm-3 3h.008v.008H7.5v-.008Zm-3-3h.008v.008H4.5v-.008Zm0-3h.008v.008H4.5v-.008Zm3 0h.008v.008H7.5v-.008Zm3 0h.008v.008h-.008v-.008Zm3-3h.008v.008h-.008v-.008Zm-6 0h.008v.008h-.008v-.008Z" /></svg>
);

const CubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
);

const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.512 2.72a3 3 0 0 1-4.682-2.72 9.094 9.094 0 0 1 3.741-.479m-4.5-5.23a3 3 0 0 0 4.5 0m-4.5 0a3 3 0 0 1 4.5 0m0 0a3 3 0 0 0 4.5 0m-4.5 0a3 3 0 0 1 4.5 0m-9.75 1.5h9.75c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-9.75c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>
);

const HandRaisedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M10.5 2.25h3M4.166 10.5l-1.591-1.591M12 18.75V21.75m-5.834.166 1.591-1.591M3.75 10.5H6m4.5 11.25h3" /></svg>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
);

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
);

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
);

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
);

const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);

const CubeTransparentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
    </svg>
);

const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

// --- Data ---

const advancedYoctoSyllabusData = [
    { title: 'Module 1: Introduction to the Yocto Project', isHandsOn: true, duration: '0.5 Days', topics: [ 'Why Yocto project required?', 'Yocto project Directory structure', 'PC setup for Yocto build system', 'Core concepts: Layers, Recipes, Classes, and Configurations', ] },
    { title: 'Module 2: Bitbake', isHandsOn: true, duration: '0.5 Days', topics: [ 'Understanding the BitBake build engine', 'Bitbake commands usage', 'What happens when you run `bitbake <packagename>`', 'Building a `core-image-minimal`', 'Exploring the build output directory structure', ] },
    { title: 'Module 3: Apps development with build systems', isHandsOn: true, duration: '0.5 Days', topics: [ 'Simple dynamic library development', 'Makefiles examples', 'CMakefiles examples', 'Autotools examples', ] },
    { title: 'Module 4: Writing recipes (bb file)', isHandsOn: true, duration: '0.5 Days', topics: [ 'Create new metalayer', 'Write new recipe for C example', 'Write new recipe for C++ example', 'Write new recipe for dynamic library', 'Write new recipe for Makefile', 'Write new recipe for CMakefiles', 'Write new recipe for Autotools', 'Modifying existing recipes with `.bbappend` files', ] },
    { title: 'Module 5: Advanced Recipes', isHandsOn: true, duration: '0.5 Days', topics: [ 'Upgrade recipes to latest', 'Include and require files', 'Introduction to bbclass files', 'Inherit concepts', 'Virtual concepts', ] },
    { title: 'Module 6: Yocto rootfs Image', isHandsOn: true, duration: '0.5 Days', topics: [ 'Creating a custom software meta layer', 'Add packages to rootfs in conf files', 'Modify existing rootfs', 'Create New rootfs', 'Customizing the image with `IMAGE_FEATURES`', ] },
    { title: 'Module 7: Creating a Machine Custom BSP Layer', isHandsOn: true, duration: '0.5 Days', topics: [ 'Explore Machine conf files', 'Modify existing machine conf', 'Board Support Package (BSP) layer structure', 'Integrating your custom U-Boot build', 'Integrating your custom Linux kernel build', 'Creating a New machine configuration file', 'Customizing the MACHINE with `MACHINE_FEATURES`', 'Creating a new distro configuration file', 'Customizing the image with `DISTRO_FEATURES`', ] },
    { title: 'Module 8: Application Development & Final Project', isHandsOn: true, duration: '0.5 Days', topics: [ 'Introduction to Devtools', 'Generating and using the Application Development SDK', 'Cross-compiling and debugging user-space applications', 'Final Project: A complete BSP build for your hardware', ] }
];

const courseData = {
    id: 'advanced-yocto',
    title: 'Advanced Yocto Project Development',
    menuTitle: 'Advanced Yocto Training',
    description: 'Deep dive into advanced topics like eSDK, package management, security, and creating custom distributions for complex products.',
    tags: ['5 Days', 'Online', 'Advanced'],
    icon: CubeIcon,
    hero: {
        title: 'Advanced Yocto Project Development',
        subtitle: 'Deep dive into eSDK, security, package management, and custom distributions.',
        infoCards: [
            { icon: <CalendarDaysIcon className="w-8 h-8"/>, title: "Duration", text: "5 Days" },
            { icon: <BuildingOffice2Icon className="w-8 h-8"/>, title: "Format", text: "Online" },
            { icon: <CubeIcon className="w-8 h-8"/>, title: "Focus", text: "Advanced Yocto" },
        ]
    },
    about: {
        description: [
            'Ready to take your Yocto Project skills to the next level? This course is for experienced developers who want to master advanced features for building robust, secure, and maintainable Linux distributions.',
            'We cover topics like creating extensible SDKs for application teams, implementing robust security measures, managing complex software licenses, and architecting custom distributions for product lines.'
        ],
        highlights: [
            { icon: <CodeBracketIcon className="w-8 h-8 adyocto-text-secondary" />, title: 'eSDK & Toolchains', description: 'Create powerful SDKs for your application development teams.' },
            { icon: <ShieldCheckIcon className="w-8 h-8 adyocto-text-secondary" />, title: 'System Security', description: 'Harden your system with features like read-only rootfs and package signing.' },
            { icon: <CubeTransparentIcon className="w-8 h-8 adyocto-text-secondary" />, title: 'Custom Distributions', description: 'Design and build your own Poky-like distribution for your products.' },
            { icon: <Cog6ToothIcon className="w-8 h-8 adyocto-text-secondary" />, title: 'Advanced BitBake', description: 'Master complex variable overrides, classes, and tasks.' },
        ]
    },
    syllabus: advancedYoctoSyllabusData
};


// --- Common Components ---

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="adyocto-section-header">
      <h2 className={`adyocto-title ${isWhiteText ? 'white' : 'dark'}`}>
        {title}
        <span className="adyocto-title-underline"></span>
      </h2>
      <p className={`adyocto-subtitle ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'white' : 'dark')}`}>{subtitle}</p>
    </div>
);

const MAIN_HEADER_HEIGHT = 0; // Adjust if needed

const CorporateAdvancedYoctoTraining = () => {
    const course = courseData;

    const pageNavLinks = [
        { href: '#about', label: 'About' },
        { href: '#program-details', label: 'Details' },
        { href: '#syllabus', label: 'Syllabus' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#faq', label: 'FAQ' },
    ];

    const PageNav: React.FC = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isSticky, setIsSticky] = useState(false);
        const [activeLink, setActiveLink] = useState('');
        const navRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const nav = navRef.current;
            if (!nav) return;

            const navTop = nav.offsetTop;

            const handleScroll = () => {
                if (window.scrollY >= navTop - MAIN_HEADER_HEIGHT) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }

                const pageNavHeight = nav.offsetHeight;
                const scrollPosition = window.scrollY + MAIN_HEADER_HEIGHT + pageNavHeight + 20;

                let currentSectionId = '';
                for (const link of pageNavLinks) {
                    const section = document.querySelector(link.href);
                    if (section) {
                        const htmlSection = section as HTMLElement;
                        if (htmlSection.offsetTop <= scrollPosition) {
                            currentSectionId = link.href;
                        }
                    }
                }
                setActiveLink(currentSectionId);
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); 
            
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
        const closeMenu = () => setIsMenuOpen(false);

        const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            if (!targetId) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const pageNavHeight = navRef.current?.offsetHeight ?? 0;
                const totalOffset = MAIN_HEADER_HEIGHT + (isSticky ? pageNavHeight : 0);
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                if (isMenuOpen) closeMenu();
            }
        };
        
        return (
            <>
            <div ref={navRef} className={`adyocto-nav-wrapper ${isSticky ? 'sticky' : ''}`}>
                <div className="adyocto-container">
                    <div className="adyocto-nav-content">
                        <span className="adyocto-nav-title md:hidden">Course Sections</span>
                        <nav className={`adyocto-nav-links ${isMenuOpen ? 'open' : ''}`}>
                            {pageNavLinks.map((link) => (
                                <a 
                                    key={link.href} 
                                    href={link.href}
                                    onClick={handleNavClick}
                                    className={`adyocto-nav-link ${activeLink === link.href ? 'active' : ''}`}>
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact" onClick={handleNavClick} className="adyocto-nav-cta">
                                Register
                            </a>
                        </nav>
                        <button onClick={toggleMenu} className="adyocto-nav-mobile-btn">
                            <span className="sr-only">Open menu</span>
                            <div className="adyocto-hamburger">
                                <span className={`line ${isMenuOpen ? 'rotate-down' : ''}`}></span>
                                <span className={`line ${isMenuOpen ? 'fade-out' : ''}`}></span>
                                <span className={`line ${isMenuOpen ? 'rotate-up' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {isSticky && <div style={{ height: navRef.current?.offsetHeight }} />}
            </>
        );
    };

    const Hero: React.FC = () => {
        const InfoCard: React.FC<{icon: React.ReactNode, title: string, text: string}> = ({ icon, title, text }) => (
            <div className="adyocto-info-card group">
                <div className="adyocto-icon-wrapper">
                    {icon}
                </div>
                <div>
                    <h3 className="adyocto-card-title">{title}</h3>
                    <p className="adyocto-card-text">{text}</p>
                </div>
            </div>
        );
        
        const bgImage = "https://images.unsplash.com/photo-1518770660439-4636190af475"; // Tech circuit background

        return (
            <section id="home" className="adyocto-hero">
                <div className="adyocto-hero-overlay"></div>
                <img 
                    src={`${bgImage}?q=80&w=2070&auto=format&fit=crop`} 
                    alt="Background" 
                    className="adyocto-hero-bg"
                    loading="eager"
                />
                
                <div className="adyocto-hero-content">
                    <div className="adyocto-hero-grid">
                        {/* Content Column */}
                        <div className="adyocto-hero-text-col">
                             <div className="adyocto-hero-badge">
                                Advanced Level Course
                            </div>
                            <h1 className="adyocto-hero-title">
                                {course.hero.title}
                            </h1>
                            <p className="adyocto-hero-subtitle">
                                {course.hero.subtitle}
                            </p>
                            <div className="adyocto-cta-container">
                                <a href="#contact" className="adyocto-cta-btn">
                                    Request a Corporate Quote
                                </a>
                            </div>
                        </div>

                        {/* Image Block Column */}
                        <div className="adyocto-hero-img-col">
                             <div className="adyocto-hero-image-block group">
                                <div className="adyocto-hero-image-overlay"></div>
                                
                                {/* Placeholder Content */}
                                <div className="adyocto-hero-placeholder-content">
                                   <div className="adyocto-hero-icon-circle">
                                      <CubeIcon className="w-12 h-12 text-white" />
                                   </div>
                                   <h3 className="adyocto-hero-placeholder-title">Yocto Project® Mastery</h3>
                                   <p className="adyocto-hero-placeholder-text">
                                       Advanced configuration, security hardening, and eSDK workflows.
                                   </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="adyocto-hero-cards">
                        {course.hero.infoCards.map(card => <InfoCard key={card.title} {...card} />)}
                    </div>
                </div>
            </section>
        );
    };

    const About: React.FC = () => {
        const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
            <div className="adyocto-highlight-card">
                <div className="mb-2">{icon}</div>
                <h4 className="adyocto-highlight-title">{title}</h4>
                <p className="adyocto-highlight-desc">{description}</p>
            </div>
        );
        return (
            <section id="about" className="adyocto-section adyocto-bg-white">
                <div className="adyocto-container">
                    <SectionTitle title="About the Training" subtitle={course.title} />
                    <div className="adyocto-grid-2">
                        <div className="adyocto-text-block">
                            {course.about.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="adyocto-highlights-grid">
                            {course.about.highlights.map((item, index) => <HighlightCard key={index} {...item} />)}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ProgramDetails: React.FC = () => {
        return (
            <section id="program-details" className="adyocto-section adyocto-bg-light">
                <div className="adyocto-container">
                     <div className="adyocto-centered-header">
                        <h2 className="adyocto-section-title">Program Overview</h2>
                     </div>
                    <div className="adyocto-grid-2">
                        {/* Training Details */}
                        <div className="adyocto-details-card">
                            <div className="adyocto-details-icon-bg">
                                <AcademicCapIcon className="adyocto-icon-xl" />
                            </div>
                            <h3 className="adyocto-details-title">
                                <CalendarDaysIcon className="adyocto-icon-md adyocto-text-secondary" />
                                Training Details
                            </h3>
                            <ul className="adyocto-details-list">
                                <li className="adyocto-details-list-item">
                                    <div className="adyocto-details-bullet"><ClockIcon className="adyocto-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Duration</span>
                                        <span className="text-gray-600">5 Days / 40 Hours</span>
                                    </div>
                                </li>
                                <li className="adyocto-details-list-item">
                                    <div className="adyocto-details-bullet"><BuildingOffice2Icon className="adyocto-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Format</span>
                                        <span className="text-gray-600">Online Live</span>
                                    </div>
                                </li>
                                <li className="adyocto-details-list-item">
                                    <div className="adyocto-details-bullet"><UserGroupIcon className="adyocto-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Batch Size</span>
                                        <span className="text-gray-600">5-10 Engineers</span>
                                    </div>
                                </li>
                                <li className="adyocto-details-list-item">
                                    <div className="adyocto-details-bullet"><CodeBracketIcon className="adyocto-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Methodology</span>
                                        <span className="text-gray-600">60% Hands-on, 40% Theory</span>
                                    </div>
                                </li>
                                <li className="adyocto-details-list-item">
                                    <div className="adyocto-details-bullet"><CpuChipIcon className="adyocto-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Focus</span>
                                        <span className="text-gray-600">Advanced Topics & Customization</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Pre-requisites */}
                        <div className="adyocto-details-card accent-border">
                             <div className="adyocto-details-icon-bg">
                                <CodeBracketIcon className="adyocto-icon-xl" />
                            </div>
                            <h3 className="adyocto-details-title">
                                <CheckCircleIcon className="adyocto-icon-md adyocto-text-accent" />
                                Pre-requisites
                            </h3>
                            <ul className="adyocto-details-list">
                                <li className="adyocto-prereq-item">
                                    <div className="adyocto-dot"></div>
                                    <span className="font-medium">Solid understanding of Yocto Basics</span>
                                </li>
                                <li className="adyocto-prereq-item">
                                    <div className="adyocto-dot"></div>
                                    <span className="font-medium">Experience with Bitbake</span>
                                </li>
                                <li className="adyocto-prereq-item">
                                    <div className="adyocto-dot"></div>
                                    <span className="font-medium">Linux Command Line mastery</span>
                                </li>
                                <li className="adyocto-prereq-item">
                                    <div className="adyocto-dot"></div>
                                    <span className="font-medium">C/C++ Programming</span>
                                </li>
                                <li className="adyocto-prereq-item">
                                    <div className="adyocto-dot"></div>
                                    <span className="font-medium">Understanding of Build Systems</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    
    const Syllabus: React.FC = () => {
        const [openIndex, setOpenIndex] = useState<number | null>(null);
        const handleClick = (index: number) => setOpenIndex(openIndex === index ? null : index);
        const TimelineItem: React.FC<{ module: typeof course.syllabus[0]; index: number; isOpen: boolean; onClick: () => void; }> = ({ module, index, isOpen, onClick }) => (
            <div className="adyocto-timeline-item">
                <div className="adyocto-timeline-line"></div>
                <div className="adyocto-timeline-marker">{index + 1}</div>
                <div className="adyocto-syllabus-card">
                    <button onClick={onClick} className="adyocto-syllabus-btn">
                        <h3 className="adyocto-syllabus-title">{module.title}</h3>
                        <div className="adyocto-syllabus-meta">
                            {module.duration && (<div className="adyocto-badge-blue"><ClockIcon className="adyocto-icon-sm" /><span>{module.duration}</span></div>)}
                            <ChevronDownIcon className={`adyocto-chevron ${isOpen ? 'rotate' : ''}`} />
                        </div>
                    </button>
                    <div className={`adyocto-accordion-grid ${isOpen ? 'open' : 'closed'}`}>
                        <div className="adyocto-accordion-inner">
                            <div className={`adyocto-accordion-content ${isOpen ? 'open' : 'closed'}`}>
                                {module.isHandsOn && (<div className="adyocto-tags-container"><div className="adyocto-badge-secondary"><HandRaisedIcon className="adyocto-icon-sm" /><span>Hands-on</span></div></div>)}
                                <ul className="adyocto-list">{module.topics.map((topic, i) => (<li key={i} className="adyocto-list-item"><span className="adyocto-list-bullet">▸</span><span className="adyocto-list-text">{topic}</span></li>))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <section id="syllabus" className="adyocto-section adyocto-bg-white">
                <div className="adyocto-container">
                    <SectionTitle title="Training Syllabus" subtitle="A comprehensive, hands-on curriculum" />
                    <div className="adyocto-timeline-container">{course.syllabus.map((module, index) => (<TimelineItem key={index} module={module} index={index} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
                </div>
            </section>
        );
    };

    const Pricing: React.FC = () => {
        const pricingData = [
            { tier: 'Online Corporate Training', price: 'Contact for Quote', duration: 'Flexible Schedule', features: ['Complete Syllabus', 'Live, interactive online sessions', 'Remote labs on your hardware or eval boards', 'Led by industry experts', 'All course materials and source code', 'Post-training support'], highlight: false },
            { tier: 'On-Site Corporate Training', price: 'Contact for Quote', duration: 'Dedicated Schedule', features: ['Complete Syllabus', 'On-site training at your facility', 'Hands-on labs with your custom hardware', 'Led by industry experts', 'All course materials and source code', 'Dedicated post-training support'], highlight: true }
        ];
        const PricingCard: React.FC<{ plan: typeof pricingData[0] }> = ({ plan }) => (
            <div className={`adyocto-pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                <h3 className="adyocto-pricing-title">{plan.tier}</h3>
                <div className="adyocto-pricing-amount-box"><div className="adyocto-price-tag">{plan.duration}</div><p className="adyocto-pricing-amount">{plan.price}</p></div>
                <ul className="adyocto-pricing-features">{plan.features.map((feature, index) => (<li key={index} className="adyocto-pricing-feature-item"><CheckCircleIcon className="adyocto-icon-check" /><span className="adyocto-pricing-text">{feature}</span></li>))}</ul>
                <div className="adyocto-pricing-cta-mt"><a href="#contact" className="adyocto-cta-btn w-full">Request a Quote</a></div>
            </div>
        );
        return (
            <section id="pricing" className="adyocto-section adyocto-bg-blue">
                <div className="adyocto-container">
                    <SectionTitle title="Corporate Training Packages" subtitle="Flexible training options to suit your team's needs" />
                    <div className="adyocto-pricing-grid">{pricingData.map((plan, index) => (<PricingCard key={index} plan={plan} />))}</div>
                </div>
            </section>
        );
    };

    const Testimonials: React.FC = () => {
        const testimonialsData = [
            {
                name: "Vikram S.",
                role: "Senior BSP Engineer",
                company: "Telecom Solutions",
                quote: "The module on eSDK was a game changer for us. We can now provide a streamlined SDK to our application team, saving hours of compilation time. The deep dive into devtool was also very practical."
            },
            {
                name: "Elena R.",
                role: "Security Architect",
                company: "IoT Security Firm",
                quote: "We needed to harden our Yocto-based Linux distribution. The security module covered everything from read-only rootfs to signed images. The instructor's expertise in security best practices is commendable."
            },
            {
                name: "John D.",
                role: "Lead Embedded Developer",
                company: "Automotive Tier-1",
                quote: "Creating a custom distribution layer seemed daunting until this training. We now have our own distro layer that inherits from Poky but is perfectly tailored to our product line. Highly recommended for advanced users."
            }
        ];

        return (
            <section id="testimonials" className="adyocto-section adyocto-bg-white">
                <div className="adyocto-container">
                    <SectionTitle title="What Our Clients Say" subtitle="Trusted by Engineering Teams Worldwide" />
                    <div className="adyocto-grid-3">
                        {testimonialsData.map((t, i) => (
                            <div key={i} className="adyocto-testimonial-card">
                                <div className="adyocto-quote-icon">"</div>
                                <div className="adyocto-stars">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
                                </div>
                                <p className="adyocto-testimonial-text">"{t.quote}"</p>
                                <div className="adyocto-testimonial-author">
                                     <div className="adyocto-author-avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="adyocto-author-name">{t.name}</h4>
                                        <p className="adyocto-author-role">{t.role}</p>
                                        <p className="adyocto-author-company">{t.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const FAQ: React.FC = () => {
        const faqData = [
            { question: 'Who is this training for?', answer: 'This training is designed for corporate engineering teams (hardware, firmware, software) who are developing a product based on custom hardware that needs to run Embedded Linux.' },
            { question: 'What are the prerequisites?', answer: 'Attendees should have a solid understanding of C programming and basic Linux command-line usage. Experience with embedded systems is highly beneficial. No prior Yocto Project or kernel development experience is required for the BSP course.' },
            { question: 'What is the training format?', answer: 'We offer flexible training formats. Choose between an intensive on-site program at your facility or a live, interactive online course. Both formats cover the same comprehensive curriculum and are tailored to your project.' },
            { question: 'How do we get a quote?', answer: 'Please fill out the contact form with your company details, and we will contact you to discuss your specific needs and provide a detailed quote for the corporate training package.' },
        ];
        const [openIndex, setOpenIndex] = useState<number | null>(0);
        const handleClick = (index: number) => { setOpenIndex(openIndex === index ? null : index); };
        const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
            <div className="adyocto-faq-item">
                <button onClick={onClick} className="adyocto-faq-btn">
                    <span className="adyocto-faq-question">{item.question}</span>
                    <PlusIcon className={`adyocto-icon-plus ${isOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`adyocto-accordion-grid ${isOpen ? 'open' : 'closed'}`}><div className="adyocto-accordion-inner"><div className="adyocto-faq-inner">{item.answer}</div></div></div>
            </div>
        );
        return (
            <section id="faq" className="adyocto-section adyocto-bg-light">
                <div className="adyocto-container">
                    <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know" />
                    <div className="adyocto-faq-stack">{faqData.map((item, index) => (<FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
                </div>
            </section>
        );
    };

    return (
        <>
            <Hero />
            <PageNav />
            <About />
            <ProgramDetails />
            <Syllabus />
            <Pricing />
            <Testimonials />
            <FAQ />
            <TrainingsContact subtitle="Let's discuss bringing up your custom hardware with Yocto and Linux" />
        </>
    );
};

export default CorporateAdvancedYoctoTraining;
