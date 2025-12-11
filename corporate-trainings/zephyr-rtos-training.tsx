
import React, { useState, useEffect, useRef } from 'react';
import TrainingsContact from '../trainings-contact';
import './zephyr-rtos-training.css';

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
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5m9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
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

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor">
      <path
        d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm7.4 20.8a7.8 7.8 0 0 1-2.9 1.4 7.6 7.6 0 0 1-1.3.1 3.5 3.5 0 0 1-1.2-.2c-.4-.1-.8-.3-1.2-.5a12.6 12.6 0 0 1-4.2-3.8c-1.2-1.6-1.9-3.2-2.1-4.5a3.8 3.8 0 0 1 .4-2.1c.3-.6.7-1.1 1.2-1.4a1.4 1.4 0 0 1 .6-.2c.2 0 .4 0 .6.1.3.1.5.3.7.5l.4.5c.2.2.3.4.4.6.1.2.1.4.1.6a.9.9 0 0 1-.2.7l-1 1.7a1.5 1.5 0 0 0-.2 1.3c.2.5.5 1 .9 1.5.5.6 1 1.1 1.7 1.5.5.3.9.4 1.3.3.4-.1.7-.3.9-.5l.4-.5c.2-.2.5-.4.8-.4s.5.1.7.3l1.5 1.4c.2.2.4.5.5.8.1.3.1.6 0 .9a3 3 0 0 1-.6 1z"
      />
    </svg>
);

const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

// --- Data ---
const zephyrSyllabusData = [
    { title: 'Module 1: Introduction to Zephyr RTOS', isHandsOn: true, duration: '0.5 Days', topics: ['Why Zephyr?', 'Architecture & Kernel Services', 'Setting up the Development Environment (West, SDK)', 'Hello World & West commands'] },
    { title: 'Module 2: Device Tree & Kconfig', isHandsOn: true, duration: '0.5 Days', topics: ['Understanding Device Tree (DTS) in Zephyr', 'Overlays and Bindings', 'Kconfig system for configuration', 'Board support overview'] },
    { title: 'Module 3: Kernel Services', isHandsOn: true, duration: '1 Day', topics: ['Threads & Scheduling', 'Timers & Workqueues', 'Synchronization (Semaphores, Mutexes)', 'Data Passing (FIFOs, Pipes, Message Queues)'] },
    { title: 'Module 4: Device Driver Model', isHandsOn: true, duration: '1 Day', topics: ['Driver Initialization Levels', 'Device Driver API', 'GPIO, UART, I2C drivers', 'Writing a Custom Driver'] },
    { title: 'Module 5: Connectivity (BLE & Networking)', isHandsOn: true, duration: '0.5 Days', topics: ['Bluetooth Low Energy (BLE) Stack', 'BLE Advertising & Scanning', 'Networking Stack (Sockets)', 'CoAP / MQTT basics'] },
    { title: 'Module 6: Advanced Features', isHandsOn: true, duration: '0.5 Days', topics: ['Power Management', 'Shell & Logging', 'Debugging techniques', 'Porting Zephyr to new hardware'] },
];

const courseData = {
    id: 'zephyr-rtos',
    title: 'Zephyr RTOS Development',
    menuTitle: 'Zephyr RTOS Training',
    description: 'Master the fastest-growing RTOS for IoT. Learn Kernel services, Device Drivers, BLE, and Networking using the Zephyr ecosystem.',
    tags: ['4 Days', 'Online & On-Site', 'Modern RTOS'],
    icon: CpuChipIcon,
    hero: {
        title: 'Master Zephyr RTOS for Next-Gen IoT Devices',
        subtitle: 'Comprehensive training on Zephyr Kernel, Device Drivers, and Connectivity for embedded systems.',
        infoCards: [
            { icon: <CalendarDaysIcon className="w-8 h-8"/>, title: "Duration", text: "4 Days / 32 Hours" },
            { icon: <BuildingOffice2Icon className="w-8 h-8"/>, title: "Format", text: "Online / On-Site" },
            { icon: <CpuChipIcon className="w-8 h-8"/>, title: "Focus", text: "IoT & Connectivity" },
        ]
    },
    about: {
        description: [
            'Zephyr RTOS is rapidly becoming the industry standard for resource-constrained IoT devices. Backed by the Linux Foundation, it offers a modular, secure, and scalable real-time operating system.',
            'This course takes you from the basics of the "West" build system to advanced driver development and Bluetooth Low Energy (BLE) applications. You will learn how to leverage Zephyr\'s powerful device tree configuration and comprehensive driver subsystems to build robust embedded products.'
        ],
        highlights: [
            { icon: <CodeBracketIcon className="w-8 h-8 text-secondary" />, title: 'Modern Build System', description: 'Master "West", CMake, and Device Tree configuration.' },
            { icon: <CpuChipIcon className="w-8 h-8 text-secondary" />, title: 'Driver Model', description: 'Deep dive into Zephyr\'s unified device driver API.' },
            { icon: <RocketLaunchIcon className="w-8 h-8 text-secondary" />, title: 'Connectivity', description: 'Hands-on with BLE and Networking stacks.' },
            { icon: <ShieldCheckIcon className="w-8 h-8 text-secondary" />, title: 'IoT Ready', description: 'Security, Power Management, and Over-the-Air updates.' },
        ]
    },
    syllabus: zephyrSyllabusData
};

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="section-title-container">
      <h2 className={`section-title-text ${isWhiteText ? 'section-title-white' : 'section-title-dark'}`}>
        {title}
        <span className="section-title-underline"></span>
      </h2>
      <p className={`section-subtitle ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'section-subtitle-white' : 'section-subtitle-dark')}`}>{subtitle}</p>
    </div>
);

const MAIN_HEADER_HEIGHT = 0; // Adjust if main header exists

const ZephyrRTOSTraining = () => {
    const course = courseData;

    const pageNavLinks = [
        { href: '#about', label: 'About' },
        { href: '#program-details', label: 'Details' },
        { href: '#syllabus', label: 'Syllabus' },
        { href: '#pricing', label: 'Pricing' },
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
            <div ref={navRef} className={`zephyr-nav-wrapper ${isSticky ? 'sticky' : ''}`}>
                <div className="zephyr-container">
                    <div className="zephyr-nav-content">
                        <span className="zephyr-nav-title md:hidden">Course Sections</span>
                        <nav className={`zephyr-nav-links ${isMenuOpen ? 'open' : ''}`}>
                            {pageNavLinks.map((link) => (
                                <a 
                                    key={link.href} 
                                    href={link.href}
                                    onClick={handleNavClick}
                                    className={`zephyr-nav-link ${activeLink === link.href ? 'active' : ''}`}>
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact" onClick={handleNavClick} className="zephyr-nav-cta">
                                Register
                            </a>
                        </nav>
                        <button onClick={toggleMenu} className="zephyr-nav-mobile-btn">
                            <span className="sr-only">Open menu</span>
                            <div className="zephyr-hamburger">
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
            <div className="zephyr-info-card group">
                <div className="zephyr-icon-wrapper">
                    {icon}
                </div>
                <div>
                    <h3 className="zephyr-card-title">{title}</h3>
                    <p className="zephyr-card-text">{text}</p>
                </div>
            </div>
        );
        
        const bgImage = "https://images.unsplash.com/photo-1555664424-778a696310b0"; 
        const bgSrcSet = `${bgImage}?q=80&w=640&auto=format&fit=crop 640w, ${bgImage}?q=80&w=1024&auto=format&fit=crop 1024w, ${bgImage}?q=80&w=2070&auto=format&fit=crop 2070w`;

        return (
            <section id="home" className="zephyr-hero">
                <div className="zephyr-hero-overlay"></div>
                <img 
                    src={`${bgImage}?q=80&w=2070&auto=format&fit=crop`} 
                    srcSet={bgSrcSet}
                    sizes="100vw"
                    alt="Background" 
                    className="zephyr-hero-bg"
                    loading="eager"
                />
                <div className="zephyr-hero-content">
                    <h1 className="zephyr-hero-title">
                        {course.hero.title}
                    </h1>
                    <p className="zephyr-hero-subtitle">
                        {course.hero.subtitle}
                    </p>
                    <div className="zephyr-cta-container">
                        <a href="#contact" className="zephyr-cta-btn">
                            Request a Corporate Quote
                        </a>
                    </div>
                    <div className="zephyr-hero-cards">
                        {course.hero.infoCards.map(card => <InfoCard key={card.title} {...card} />)}
                    </div>
                </div>
            </section>
        );
    };

    const About: React.FC = () => {
        const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
            <div className="zephyr-highlight-card">
                <div className="mb-2">{icon}</div>
                <h4 className="zephyr-highlight-title">{title}</h4>
                <p className="zephyr-highlight-desc">{description}</p>
            </div>
        );
        return (
            <section id="about" className="zephyr-section zephyr-bg-white">
                <div className="zephyr-container">
                    <SectionTitle title="About the Training" subtitle={course.title} />
                    <div className="zephyr-grid-2">
                        <div className="zephyr-text-block">
                            {course.about.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="zephyr-highlights-grid">
                            {course.about.highlights.map((item, index) => <HighlightCard key={index} {...item} />)}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ProgramDetails: React.FC = () => {
        return (
            <section id="program-details" className="zephyr-section zephyr-bg-light">
                <div className="zephyr-container">
                     <div className="text-center mb-10">
                        <h2 className="zephyr-section-title">Program Overview</h2>
                     </div>
                    <div className="zephyr-grid-2">
                        {/* Training Details */}
                        <div className="zephyr-details-card">
                            <div className="zephyr-details-icon-bg">
                                <AcademicCapIcon className="zephyr-icon-xl" />
                            </div>
                            <h3 className="zephyr-details-title">
                                <CalendarDaysIcon className="zephyr-icon-md zephyr-text-secondary" />
                                Training Details
                            </h3>
                            <ul className="zephyr-details-list">
                                <li className="zephyr-details-list-item">
                                    <div className="zephyr-details-bullet"><ClockIcon className="zephyr-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Duration</span>
                                        <span className="text-gray-600">4 Days / 32 Hours</span>
                                    </div>
                                </li>
                                <li className="zephyr-details-list-item">
                                    <div className="zephyr-details-bullet"><BuildingOffice2Icon className="zephyr-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Format</span>
                                        <span className="text-gray-600">On-Site or Online Live</span>
                                    </div>
                                </li>
                                <li className="zephyr-details-list-item">
                                    <div className="zephyr-details-bullet"><UserGroupIcon className="zephyr-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Batch Size</span>
                                        <span className="text-gray-600">Standard 5-10 Engineers</span>
                                    </div>
                                </li>
                                <li className="zephyr-details-list-item">
                                    <div className="zephyr-details-bullet"><CodeBracketIcon className="zephyr-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Methodology</span>
                                        <span className="text-gray-600">60% Hands-on, 40% Theory</span>
                                    </div>
                                </li>
                                <li className="zephyr-details-list-item">
                                    <div className="zephyr-details-bullet"><CpuChipIcon className="zephyr-icon-sm" /></div>
                                    <div>
                                        <span className="block font-bold">Hardware</span>
                                        <span className="text-gray-600">Nordic nRF52 / STM32 / ESP32</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Pre-requisites */}
                        <div className="zephyr-details-card accent-border">
                             <div className="zephyr-details-icon-bg">
                                <CodeBracketIcon className="zephyr-icon-xl" />
                            </div>
                            <h3 className="zephyr-details-title">
                                <CheckCircleIcon className="zephyr-icon-md zephyr-text-accent" />
                                Pre-requisites
                            </h3>
                            <ul className="zephyr-details-list">
                                <li className="zephyr-prereq-item">
                                    <div className="zephyr-dot"></div>
                                    <span className="font-medium">Strong C Programming</span>
                                </li>
                                <li className="zephyr-prereq-item">
                                    <div className="zephyr-dot"></div>
                                    <span className="font-medium">Basic Embedded Systems</span>
                                </li>
                                <li className="zephyr-prereq-item">
                                    <div className="zephyr-dot"></div>
                                    <span className="font-medium">Knowledge of RTOS Concepts</span>
                                </li>
                                <li className="zephyr-prereq-item">
                                    <div className="zephyr-dot"></div>
                                    <span className="font-medium">Linux Command Line Basics</span>
                                </li>
                                <li className="zephyr-prereq-item">
                                    <div className="zephyr-dot"></div>
                                    <span className="font-medium">Git Version Control (Optional)</span>
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
            <div className="zephyr-timeline-item">
                <div className="zephyr-timeline-line"></div>
                <div className="zephyr-timeline-marker">{index + 1}</div>
                <div className="zephyr-syllabus-card">
                    <button onClick={onClick} className="zephyr-syllabus-btn">
                        <h3 className="zephyr-syllabus-title">{module.title}</h3>
                        <div className="zephyr-syllabus-meta">
                            {module.duration && (<div className="zephyr-badge-blue"><ClockIcon className="zephyr-icon-sm" /><span>{module.duration}</span></div>)}
                            <ChevronDownIcon className={`zephyr-chevron ${isOpen ? 'rotate' : ''}`} />
                        </div>
                    </button>
                    <div className={`zephyr-accordion-grid ${isOpen ? 'open' : 'closed'}`}>
                        <div className="zephyr-accordion-inner">
                            <div className={`zephyr-accordion-content ${isOpen ? 'open' : 'closed'}`}>
                                {module.isHandsOn && (<div className="zephyr-tags-container"><div className="zephyr-badge-secondary"><HandRaisedIcon className="zephyr-icon-sm" /><span>Hands-on</span></div></div>)}
                                <ul className="zephyr-list">{module.topics.map((topic, i) => (<li key={i} className="zephyr-list-item"><span className="zephyr-list-bullet">▸</span><span className="zephyr-list-text">{topic}</span></li>))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <section id="syllabus" className="zephyr-section zephyr-bg-white">
                <div className="zephyr-container">
                    <SectionTitle title="Training Syllabus" subtitle="A comprehensive, hands-on curriculum" />
                    <div className="zephyr-timeline-container">{course.syllabus.map((module, index) => (<TimelineItem key={index} module={module} index={index} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
                </div>
            </section>
        );
    };

    const Pricing: React.FC = () => {
        const pricingData = [
            { tier: 'Online Corporate Training', price: 'Contact for Quote', duration: 'Flexible Schedule', features: ['Complete Syllabus', 'Live, interactive online sessions', 'Remote labs on QEMU / Hardware', 'Led by Zephyr experts', 'All course materials and source code', 'Post-training support'], highlight: false },
            { tier: 'On-Site Corporate Training', price: 'Contact for Quote', duration: 'Dedicated Schedule', features: ['Complete Syllabus', 'On-site training at your facility', 'Hands-on labs on your hardware', 'Led by Zephyr experts', 'All course materials and source code', 'Dedicated post-training support'], highlight: true }
        ];
        const PricingCard: React.FC<{ plan: typeof pricingData[0] }> = ({ plan }) => (
            <div className={`zephyr-pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                <h3 className="zephyr-pricing-title">{plan.tier}</h3>
                <div className="zephyr-pricing-amount-box"><div className="zephyr-price-tag">{plan.duration}</div><p className="zephyr-pricing-amount">{plan.price}</p></div>
                <ul className="zephyr-pricing-features">{plan.features.map((feature, index) => (<li key={index} className="zephyr-pricing-feature-item"><CheckCircleIcon className="zephyr-icon-check" /><span className="zephyr-pricing-text">{feature}</span></li>))}</ul>
                <div className="zephyr-pricing-cta-mt"><a href="#contact" className="zephyr-cta-btn w-full">Request a Quote</a></div>
            </div>
        );
        return (
            <section id="pricing" className="zephyr-section zephyr-bg-blue">
                <div className="zephyr-container">
                    <SectionTitle title="Corporate Training Packages" subtitle="Flexible training options to suit your team's needs" />
                    <div className="zephyr-pricing-grid">{pricingData.map((plan, index) => (<PricingCard key={index} plan={plan} />))}</div>
                </div>
            </section>
        );
    };

    const FAQ: React.FC = () => {
        const faqData = [
            { question: 'Who is this training for?', answer: 'This training is designed for corporate engineering teams (hardware, firmware, software) who are developing IoT products using Zephyr RTOS.' },
            { question: 'What are the prerequisites?', answer: 'Attendees should have a solid understanding of C programming. Experience with any RTOS or Embedded Linux is beneficial but not mandatory.' },
            { question: 'What hardware is required?', answer: 'We can use standard dev kits like Nordic nRF52840 DK, STM32 Nucleo boards, or ESP32. We can also train on your custom hardware if supported by Zephyr.' },
            { question: 'Can you customize the syllabus?', answer: 'Yes, we can tailor the syllabus to focus more on specific areas like BLE, Networking, or specific subsystems based on your project requirements.' },
        ];
        const [openIndex, setOpenIndex] = useState<number | null>(0);
        const handleClick = (index: number) => { setOpenIndex(openIndex === index ? null : index); };
        const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
            <div className="zephyr-faq-item">
                <button onClick={onClick} className="zephyr-faq-btn">
                    <span className="zephyr-faq-question">{item.question}</span>
                    <PlusIcon className={`zephyr-icon-plus ${isOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`zephyr-accordion-grid ${isOpen ? 'open' : 'closed'}`}><div className="zephyr-accordion-inner"><div className="zephyr-faq-inner">{item.answer}</div></div></div>
            </div>
        );
        return (
            <section id="faq" className="zephyr-section zephyr-bg-light">
                <div className="zephyr-container">
                    <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know" />
                    <div className="zephyr-faq-stack">{faqData.map((item, index) => (<FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
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
            <FAQ />
            <TrainingsContact title="Get Started with Zephyr" subtitle="Contact us for a customized corporate training proposal" />
        </>
    );
};

export default ZephyrRTOSTraining;
