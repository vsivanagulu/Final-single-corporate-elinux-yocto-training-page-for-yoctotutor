
import React, { useState, useEffect, useRef } from 'react';
import TrainingsContact from '../trainings-contact';
import './embedded-linux-development.css';

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

const embeddedLinuxSyllabusData = [
    { title: 'Module 1: Introduction to Embedded Linux', isHandsOn: true, duration: '0.5 Days', topics: [ 'Embedded Systems Overview', 'Role of Linux in Embedded Systems', 'Architecture: Bootloader, Kernel, Rootfs, Applications', 'Host PC Setup for Development' ] },
    { title: 'Module 2: Toolchains & Cross-Compilation', isHandsOn: true, duration: '0.5 Days', topics: [ 'Understanding Cross-Compilers', 'GCC, Binutils, Glibc, and Newlib', 'Building a Toolchain (Crosstool-NG)', 'Cross-compiling Simple C Applications' ] },
    { title: 'Module 3: Bootloaders (U-Boot)', isHandsOn: true, duration: '1 Day', topics: [ 'Boot Sequence Explained', 'U-Boot Architecture & Commands', 'Configuring & Compiling U-Boot', 'Environment Variables & Boot Scripts', 'Flashing U-Boot to Target' ] },
    { title: 'Module 4: The Linux Kernel', isHandsOn: true, duration: '1 Day', topics: [ 'Kernel Architecture & Subsystems', 'Kconfig & Menuconfig', 'Device Tree (DTS) Basics', 'Compiling the Kernel (zImage, uImage)', 'Booting the Kernel via U-Boot' ] },
    { title: 'Module 5: Root Filesystems', isHandsOn: true, duration: '0.5 Days', topics: [ 'Root File System Structure (FHS)', 'BusyBox: Configuration & Compilation', 'Init Systems (SysVinit, Systemd)', 'Creating a Minimal Rootfs from Scratch' ] },
    { title: 'Module 6: Build Systems (Buildroot)', isHandsOn: true, duration: '0.5 Days', topics: [ 'Introduction to Build Systems', 'Configuring Buildroot', 'Adding Custom Packages', 'Generating Complete System Images' ] },
    { title: 'Module 7: Storage & Filesystems', isHandsOn: true, duration: '0.5 Days', topics: [ 'Block Devices vs MTD', 'Filesystem Types: ext4, JFFS2, UBIFS', 'Partitioning Storage (eMMC/SD)', 'Mounting & Managing Filesystems' ] },
    { title: 'Module 8: Device Drivers & App Dev', isHandsOn: true, duration: '0.5 Days', topics: [ 'Kernel Modules (Hello World)', 'Character Device Driver Basics', 'Interacting with Hardware (GPIO/I2C)', 'Application Debugging (GDB, Strace)' ] }
];

const courseData = {
    id: 'embedded-linux-dev',
    title: 'Embedded Linux Development',
    description: 'A comprehensive course for working professionals to master Embedded Linux, from toolchains to bootloaders, kernels, and root filesystems.',
    tags: ['5 Days / Weekend', 'Online', 'For Professionals'],
    icon: MicrochipIcon,
    hero: {
        title: 'Embedded Linux Development for Professionals',
        subtitle: 'Master the art of building embedded systems from scratch. Designed specifically for working professionals.',
        infoCards: [
            { icon: <CalendarDaysIcon className="w-8 h-8"/>, title: "Duration", text: "5 Days / 40 Hours" },
            { icon: <BuildingOffice2Icon className="w-8 h-8"/>, title: "Format", text: "Online / Weekend" },
            { icon: <AcademicCapIcon className="w-8 h-8"/>, title: "Focus", text: "Career Growth" },
        ]
    },
    about: {
        description: [
            'Are you a working professional looking to transition into Embedded Linux or upgrade your existing skills? This course is tailored for you.',
            'We cover the complete Embedded Linux ecosystem without getting tied to a specific proprietary vendor. You will learn how to build a system from scratch, understanding every component from the cross-compiler to the application layer. This "bottom-up" approach ensures you have the deep understanding required for senior engineering roles.'
        ],
        highlights: [
            { icon: <CodeBracketIcon className="w-8 h-8 text-secondary" />, title: 'From Scratch', description: 'Build your own toolchain, bootloader, and kernel images.' },
            { icon: <CpuChipIcon className="w-8 h-8 text-secondary" />, title: 'System Architecture', description: 'Deep dive into how hardware and software interact.' },
            { icon: <CubeTransparentIcon className="w-8 h-8 text-secondary" />, title: 'Buildroot & BusyBox', description: 'Master industry-standard tools for filesystem creation.' },
            { icon: <UserGroupIcon className="w-8 h-8 text-secondary" />, title: 'Professional Network', description: 'Connect with other engineers and industry experts.' },
        ]
    },
    syllabus: embeddedLinuxSyllabusData
};

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="elinux-section-header">
      <h2 className={`elinux-title ${isWhiteText ? 'white' : 'dark'}`}>
        {title}
        <span className="elinux-title-underline"></span>
      </h2>
      <p className={`elinux-subtitle ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'white' : 'dark')}`}>{subtitle}</p>
    </div>
);

const MAIN_HEADER_HEIGHT = 0; // Adjust if header height changes

const EmbeddedLinuxDevelopment = () => {
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
            <div ref={navRef} className={`elinux-nav-wrapper ${isSticky ? 'sticky' : ''}`}>
                <div className="elinux-container">
                    <div className="elinux-nav-content">
                        <span className="elinux-nav-title md:hidden">Course Sections</span>
                        <nav className={`elinux-nav-links ${isMenuOpen ? 'open' : ''}`}>
                            {pageNavLinks.map((link) => (
                                <a 
                                    key={link.href} 
                                    href={link.href}
                                    onClick={handleNavClick}
                                    className={`elinux-nav-link ${activeLink === link.href ? 'active' : ''}`}>
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact" onClick={handleNavClick} className="elinux-nav-cta">
                                Register
                            </a>
                        </nav>
                        <button onClick={toggleMenu} className="elinux-nav-mobile-btn">
                            <span className="sr-only">Open menu</span>
                            <div className="elinux-hamburger">
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
            <div className="elinux-info-card group">
                <div className="elinux-icon-wrapper">
                    {icon}
                </div>
                <div>
                    <h3 className="elinux-card-title">{title}</h3>
                    <p className="elinux-card-text">{text}</p>
                </div>
            </div>
        );
        
        const bgImage = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0"; // Tech background
        const bgSrcSet = `${bgImage}?q=80&w=640&auto=format&fit=crop 640w, ${bgImage}?q=80&w=1024&auto=format&fit=crop 1024w, ${bgImage}?q=80&w=2070&auto=format&fit=crop 2070w`;

        return (
            <section id="home" className="elinux-hero">
                <div className="elinux-hero-overlay"></div>
                <img 
                    src={`${bgImage}?q=80&w=2070&auto=format&fit=crop`} 
                    srcSet={bgSrcSet}
                    sizes="100vw"
                    alt="Background" 
                    className="elinux-hero-bg"
                    loading="eager"
                />
                <div className="elinux-hero-content">
                    <h1 className="elinux-hero-title">
                        {course.hero.title}
                    </h1>
                    <p className="elinux-hero-subtitle">
                        {course.hero.subtitle}
                    </p>
                    <div className="elinux-cta-container">
                        <a href="#contact" className="elinux-cta-btn">
                            Enroll Now
                        </a>
                    </div>
                    <div className="elinux-hero-cards">
                        {course.hero.infoCards.map(card => <InfoCard key={card.title} {...card} />)}
                    </div>
                </div>
            </section>
        );
    };

    const About: React.FC = () => {
        const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
            <div className="elinux-highlight-card">
                <div className="mb-2">{icon}</div>
                <h4 className="elinux-highlight-title">{title}</h4>
                <p className="elinux-highlight-desc">{description}</p>
            </div>
        );
        return (
            <section id="about" className="elinux-section elinux-bg-white">
                <div className="elinux-container">
                    <SectionTitle title="About the Course" subtitle={course.title} />
                    <div className="elinux-grid-2">
                        <div className="elinux-text-block">
                            {course.about.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="elinux-highlights-grid">
                            {course.about.highlights.map((item, index) => <HighlightCard key={index} {...item} />)}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ProgramDetails: React.FC = () => {
        return (
            <section id="program-details" className="elinux-section elinux-bg-light">
                <div className="elinux-container">
                     <div className="elinux-centered-header">
                        <h2 className="elinux-section-title">Program Overview</h2>
                     </div>
                    <div className="elinux-grid-2">
                        {/* Training Details */}
                        <div className="elinux-details-card">
                            <div className="elinux-details-icon-bg">
                                <AcademicCapIcon className="elinux-icon-xl" />
                            </div>
                            <h3 className="elinux-details-title">
                                <CalendarDaysIcon className="elinux-icon-md elinux-text-secondary" />
                                Training Details
                            </h3>
                            <ul className="elinux-details-list">
                                <li className="elinux-details-list-item">
                                    <div className="elinux-details-bullet"><ClockIcon className="elinux-icon-sm" /></div>
                                    <div>
                                        <span className="elinux-details-label">Duration</span>
                                        <span className="elinux-details-value">5 Days / 40 Hours</span>
                                    </div>
                                </li>
                                <li className="elinux-details-list-item">
                                    <div className="elinux-details-bullet"><BuildingOffice2Icon className="elinux-icon-sm" /></div>
                                    <div>
                                        <span className="elinux-details-label">Format</span>
                                        <span className="elinux-details-value">Online / Weekend</span>
                                    </div>
                                </li>
                                <li className="elinux-details-list-item">
                                    <div className="elinux-details-bullet"><UserGroupIcon className="elinux-icon-sm" /></div>
                                    <div>
                                        <span className="elinux-details-label">Batch Size</span>
                                        <span className="elinux-details-value">5-10 Engineers</span>
                                    </div>
                                </li>
                                <li className="elinux-details-list-item">
                                    <div className="elinux-details-bullet"><CodeBracketIcon className="elinux-icon-sm" /></div>
                                    <div>
                                        <span className="elinux-details-label">Methodology</span>
                                        <span className="elinux-details-value">70% Hands-on, 30% Theory</span>
                                    </div>
                                </li>
                                <li className="elinux-details-list-item">
                                    <div className="elinux-details-bullet"><CpuChipIcon className="elinux-icon-sm" /></div>
                                    <div>
                                        <span className="elinux-details-label">Hardware</span>
                                        <span className="elinux-details-value">QEMU / BeagleBone / RPi</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Pre-requisites */}
                        <div className="elinux-details-card accent-border">
                             <div className="elinux-details-icon-bg">
                                <CodeBracketIcon className="elinux-icon-xl" />
                            </div>
                            <h3 className="elinux-details-title">
                                <CheckCircleIcon className="elinux-icon-md elinux-text-accent" />
                                Pre-requisites
                            </h3>
                            <ul className="elinux-details-list">
                                <li className="elinux-prereq-item">
                                    <div className="elinux-dot"></div>
                                    <span className="elinux-prereq-text">C Programming</span>
                                </li>
                                <li className="elinux-prereq-item">
                                    <div className="elinux-dot"></div>
                                    <span className="elinux-prereq-text">Basic Linux User Commands</span>
                                </li>
                                <li className="elinux-prereq-item">
                                    <div className="elinux-dot"></div>
                                    <span className="elinux-prereq-text">Microcontroller/Architecture basics</span>
                                </li>
                                <li className="elinux-prereq-item">
                                    <div className="elinux-dot"></div>
                                    <span className="elinux-prereq-text">PC with Ubuntu (VirtualBox is fine)</span>
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
            <div className="elinux-timeline-item">
                <div className="elinux-timeline-line"></div>
                <div className="elinux-timeline-marker">{index + 1}</div>
                <div className="elinux-syllabus-card">
                    <button onClick={onClick} className="elinux-syllabus-btn">
                        <h3 className="elinux-syllabus-title">{module.title}</h3>
                        <div className="elinux-syllabus-meta">
                            {module.duration && (<div className="elinux-badge-blue"><ClockIcon className="elinux-icon-sm" /><span>{module.duration}</span></div>)}
                            <ChevronDownIcon className={`elinux-chevron ${isOpen ? 'rotate' : ''}`} />
                        </div>
                    </button>
                    <div className={`elinux-accordion-grid ${isOpen ? 'open' : 'closed'}`}>
                        <div className="elinux-accordion-inner">
                            <div className={`elinux-accordion-content ${isOpen ? 'open' : 'closed'}`}>
                                {module.isHandsOn && (<div className="elinux-tags-container"><div className="elinux-badge-secondary"><HandRaisedIcon className="elinux-icon-sm" /><span>Hands-on</span></div></div>)}
                                <ul className="elinux-list">{module.topics.map((topic, i) => (<li key={i} className="elinux-list-item"><span className="elinux-list-bullet">▸</span><span className="elinux-list-text">{topic}</span></li>))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <section id="syllabus" className="elinux-section elinux-bg-white">
                <div className="elinux-container">
                    <SectionTitle title="Course Curriculum" subtitle="From Fundamentals to Advanced Concepts" />
                    <div className="elinux-timeline-container">{course.syllabus.map((module, index) => (<TimelineItem key={index} module={module} index={index} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
                </div>
            </section>
        );
    };

    const Pricing: React.FC = () => {
        const pricingData = [
            { tier: 'Standard Professional', price: 'Contact for Pricing', duration: 'Live Online', features: ['Complete Syllabus', 'Live, interactive online sessions', 'Weekend Batches available', 'Recorded sessions access', 'Course completion certificate'], highlight: false },
            { tier: 'Career Accelerator', price: 'Contact for Pricing', duration: 'Online + Mentorship', features: ['Complete Syllabus', 'One-on-one career mentorship', 'Resume review & Mock Interviews', 'Priority support', 'Advanced project review'], highlight: true }
        ];
        const PricingCard: React.FC<{ plan: typeof pricingData[0] }> = ({ plan }) => (
            <div className={`elinux-pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                <h3 className="elinux-pricing-title">{plan.tier}</h3>
                <div className="elinux-pricing-amount-box"><div className="elinux-price-tag">{plan.duration}</div><p className="elinux-pricing-amount">{plan.price}</p></div>
                <ul className="elinux-pricing-features">{plan.features.map((feature, index) => (<li key={index} className="elinux-pricing-feature-item"><CheckCircleIcon className="elinux-icon-check" /><span className="elinux-pricing-text">{feature}</span></li>))}</ul>
                <div className="elinux-pricing-cta-mt"><a href="#contact" className="elinux-cta-btn w-full">Register Now</a></div>
            </div>
        );
        return (
            <section id="pricing" className="elinux-section elinux-bg-blue">
                <div className="elinux-container">
                    <SectionTitle title="Training Packages" subtitle="Choose the plan that fits your career goals" />
                    <div className="elinux-pricing-grid">{pricingData.map((plan, index) => (<PricingCard key={index} plan={plan} />))}</div>
                </div>
            </section>
        );
    };

    const Testimonials: React.FC = () => {
        const testimonialsData = [
            {
                name: "James L.",
                role: "Senior Firmware Engineer",
                company: "Smart Metering Co.",
                quote: "The hands-on approach with Buildroot was a game changer. I finally understand how the rootfs is actually put together."
            },
            {
                name: "Priya S.",
                role: "Embedded Systems Lead",
                company: "Automotive Tier-1",
                quote: "Perfect for professionals. The weekend schedule allowed me to upskill without taking time off. The driver development module is top-notch."
            },
            {
                name: "Michael T.",
                role: "IoT Developer",
                company: "Industrial IoT Startup",
                quote: "I was stuck in Arduino/ESP32 land. This course gave me the confidence to design full Linux-based gateways. Highly recommended."
            }
        ];

        return (
            <section id="testimonials" className="elinux-section elinux-bg-white">
                <div className="elinux-container">
                    <SectionTitle title="What Our Students Say" subtitle="Join hundreds of successful engineers" />
                    <div className="elinux-grid-3">
                        {testimonialsData.map((t, i) => (
                            <div key={i} className="elinux-testimonial-card">
                                <div className="elinux-quote-icon">"</div>
                                <div className="elinux-stars">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
                                </div>
                                <p className="elinux-testimonial-text">"{t.quote}"</p>
                                <div className="elinux-testimonial-author">
                                     <div className="elinux-author-avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="elinux-author-name">{t.name}</h4>
                                        <p className="elinux-author-role">{t.role}</p>
                                        <p className="elinux-author-company">{t.company}</p>
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
            { question: 'Is this course suitable for beginners?', answer: 'This course assumes some basic knowledge of C programming and Linux command line. It is ideal for working professionals in other domains (like MCU/RTOS) wanting to move into Embedded Linux.' },
            { question: 'Do I need hardware for this course?', answer: 'We simulate most environments using QEMU so you can learn without specific hardware. However, concepts apply directly to boards like BeagleBone or Raspberry Pi if you have them.' },
            { question: 'Is this schedule flexible for working professionals?', answer: 'Yes, we offer weekend batches specifically designed for working professionals to attend without disrupting their work schedule.' },
            { question: 'What is the difference between this and the Corporate BSP course?', answer: 'The Corporate BSP course focuses heavily on "Porting" to custom hardware (Board Bring-up). This course focuses on "Development" - understanding the OS, writing drivers, and building applications, which are the core skills needed for most job roles.' },
        ];
        const [openIndex, setOpenIndex] = useState<number | null>(0);
        const handleClick = (index: number) => { setOpenIndex(openIndex === index ? null : index); };
        const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
            <div className="elinux-faq-item">
                <button onClick={onClick} className="elinux-faq-btn">
                    <span className="elinux-faq-question">{item.question}</span>
                    <PlusIcon className={`elinux-icon-plus ${isOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`elinux-accordion-grid ${isOpen ? 'open' : 'closed'}`}><div className="elinux-accordion-inner"><div className="elinux-faq-inner">{item.answer}</div></div></div>
            </div>
        );
        return (
            <section id="faq" className="elinux-section elinux-bg-light">
                <div className="elinux-container">
                    <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know" />
                    <div className="elinux-faq-stack">{faqData.map((item, index) => (<FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
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
            <TrainingsContact title="Advance Your Career" subtitle="Join the next batch of Embedded Linux Professionals" />
        </>
    );
};

export default EmbeddedLinuxDevelopment;
