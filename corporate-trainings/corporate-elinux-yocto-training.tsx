
import React, { useState } from 'react';
import TrainingsContact from '../trainings-contact';
import './corporate-elinux-yocto-training.css';

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
const bspSyllabusData = [
    { title: 'Module 1: Embedded Systems & ARM Fundamentals', isHandsOn: true, duration: '0.5 Days', topics: [ 'Overview of ARM Architecture and ARM ARCH Family', 'Introduction to ARM Cortex cores (Cortex-A, Cortex-R, Cortex-M)', 'Embedded Systems Overview - Hardware and Software types', 'ARM Board Details and Schematic Overview', 'Understanding the X86 vs. ARM Boot Process', ] },
    { title: 'Module 2: Deep Dive: Boot Process for NXP, TI, Microchip', isHandsOn: true, duration: '0.5 Days', topics: [ 'Boot Process for NXP IMX9', 'Boot Process for NXP IMX6', 'Boot Process for TI Am335x', 'Boot Process for Microchip SAMA5D27', ] },
    { title: 'Module 3: Development Environment & Toolchain', isHandsOn: true, duration: '0.5 Days', topics: [ 'Host PC Setup for Embedded Linux Development', 'ARM Cross Toolchain and its Components', 'Cross-compiling a "Hello World" application', 'Deploying and running applications on the target hardware', ] },
    { title: 'Module 4: Flash Prebuilt Images on Hardware', isHandsOn: true, duration: '0.5 Days', topics: [ 'Hardware Introduction', 'Download Prebuild images', 'Make SDCard boot partitions', 'Explore .wic files', 'SDBoot Boot setup', 'NAND Boot setup', 'U-Boot env setup', ] },
    { title: 'Module 5: U-Boot Core Concepts', isHandsOn: true, duration: '0.5 Days', topics: [ 'Introduction to Bootloaders and their role', 'U-Boot Source Directory Architecture & Configuration', 'U-Boot Source Code Flow - from power-on to kernel boot', 'Flashing Bootloader on Custom ARM Hardware', 'U-Boot Header and environment setup & commands', ] },
    { title: 'Module 6: Customizing U-Boot for New Hardware', isHandsOn: true, duration: '0.5 Days', topics: [ 'Patching Bootloader for bug fixes and features', 'Modifying U-Boot features using menuconfig', 'Adding a New Custom Command in U-Boot', 'Creating a New `defconfig` for a custom machine', 'Developing a Board Support Package (BSP) file for new hardware', ] },
    { title: 'Module 7: Linux Kernel Fundamentals', isHandsOn: true, duration: '0.5 Days', topics: [ 'Kernel architecture and key subsystems', 'Configuring and building the kernel (defconfig, menuconfig)', 'Booting the kernel on the target hardware', 'Debugging kernel with serial console', ] },
    { title: 'Module 8: Device Trees & Drivers', isHandsOn: true, duration: '0.5 Days', topics: [ 'Device Tree syntax and overlays', 'Configuring Device Trees for custom hardware peripherals', 'Writing and enabling simple platform device drivers', 'Kernel module development and debugging', ] },
    { title: 'Module 9: Apps development with build systems', isHandsOn: true, duration: '0.5 Days', topics: [ 'Simple dynamic library development', 'Makefiles examples', 'CMakefiles examples', 'Autotools examples', ] },
    { title: 'Module 10: Introduction to the Yocto Project', isHandsOn: true, duration: '0.5 Days', topics: [ 'Why Yocto project required?', 'Yocto project Directory structure', 'PC setup for Yocto build system', 'Core concepts: Layers, Recipes, Classes, and Configurations', ] },
    { title: 'Module 11: Bitbake', isHandsOn: true, duration: '0.5 Days', topics: [ 'Understanding the BitBake build engine', 'Bitbake commands usage', 'What happens when you run `bitbake <packagename>`', 'Building a `core-image-minimal`', 'Exploring the build output directory structure', ] },
    { title: 'Module 12: Writing recipes (bb file)', isHandsOn: true, duration: '0.5 Days', topics: [ 'Create new metalayer', 'Write new recipe for C example', 'Write new recipe for C++ example', 'Write new recipe for dynamic library', 'Write new recipe for Makefile', 'Write new recipe for CMakefiles', 'Write new recipe for Autotools', 'Modifying existing recipes with `.bbappend` files', ] },
    { title: 'Module 13: Advanced Recipes', isHandsOn: true, duration: '0.5 Days', topics: [ 'Upgrade recipes to latest', 'Include and require files', 'Introduction to bbclass files', 'Inherit concepts', 'Virtual concepts', ] },
    { title: 'Module 14: Yocto rootfs Image', isHandsOn: true, duration: '0.5 Days', topics: [ 'Creating a custom software meta layer', 'Add packages to rootfs in conf files', 'Modify existing rootfs', 'Create New rootfs', 'Customizing the image with `IMAGE_FEATURES`', ] },
    { title: 'Module 15: Creating a Machine Custom BSP Layer', isHandsOn: true, duration: '0.5 Days', topics: [ 'Explore Machine conf files', 'Modify existing machine conf', 'Board Support Package (BSP) layer structure', 'Integrating your custom U-Boot build', 'Integrating your custom Linux kernel build', 'Creating a New machine configuration file', 'Customizing the MACHINE with `MACHINE_FEATURES`', 'Creating a new distro configuration file', 'Customizing the image with `DISTRO_FEATURES`', ] },
    { title: 'Module 16: Application Development & Final Project', isHandsOn: true, duration: '0.5 Days', topics: [ 'Introduction to Devtools', 'Generating and using the Application Development SDK', 'Cross-compiling and debugging user-space applications', 'Final Project: A complete BSP build for your hardware', ] }
];

const coursesData: { [key: string]: any } = {
    'yocto-bsp': {
        id: 'yocto-bsp',
        title: 'Porting Embedded Linux BSP Using Yocto Project',
        menuTitle: 'Embedded Linux Training',
        description: 'An intensive 8-day course to master U-Boot, Kernel, and Yocto for your custom hardware. From power-on to a production-ready system.',
        tags: ['8 Days', 'On-Site & Online', 'Custom Hardware Focus'],
        icon: CpuChipIcon,
        hero: {
            title: 'Master Embedded Linux & Yocto for Your Custom Hardware',
            subtitle: 'Intensive 8-Day Corporate Training to Bring Your Custom Hardware to Start.',
            infoCards: [
                { icon: <CalendarDaysIcon className="w-8 h-8"/>, title: "Duration", text: "8 Days / 64 Hours", tooltip: "8 hours of training per day" },
                { icon: <BuildingOffice2Icon className="w-8 h-8"/>, title: "Format", text: "On-Site & Online" },
                { icon: <CpuChipIcon className="w-8 h-8"/>, title: "Focus", text: "Custom BSP Porting" },
            ]
        },
        about: {
            description: [
                'Have you created custom hardware and need to bring it to life with Linux? Our intensive 8-day corporate training is designed specifically for companies like yours.',
                'We guide your engineering team through the entire Board Support Package (BSP) porting process, using either your custom hardware or standard evaluation boards. You\'ll master porting U-Boot, customizing the Linux Kernel, and building a complete, production-ready embedded Linux distribution using the Yocto Project.'
            ],
            highlights: [
                { icon: <RocketLaunchIcon className="w-8 h-8 corp-bsp-text-secondary" />, title: 'U-Boot Porting', description: 'Bring up your board from power-on with a custom U-Boot bootloader.' },
                { icon: <Cog6ToothIcon className="w-8 h-8 corp-bsp-text-secondary" />, title: 'Kernel Customization', description: 'Configure the Linux Kernel with drivers specific to your hardware.' },
                { icon: <CubeIcon className="w-8 h-8 corp-bsp-text-secondary" />, title: 'Yocto Project Mastery', description: 'Create custom layers, recipes, and images for your product.' },
                { icon: <UserGroupIcon className="w-8 h-8 corp-bsp-text-secondary" />, title: 'Corporate Focus', description: 'Training tailored to your team\'s specific hardware and project goals.' },
            ]
        },
        syllabus: bspSyllabusData
    }
};


// --- Common Components ---

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="corp-bsp-section-header">
      <h2 className={`corp-bsp-title ${isWhiteText ? 'white' : 'dark'}`}>
        {title}
        <span className="corp-bsp-title-underline"></span>
      </h2>
      <p className={`corp-bsp-subtitle ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'white' : 'dark')}`}>{subtitle}</p>
    </div>
);


const CorporateELinuxYoctoTraining = () => {
    const course = coursesData['yocto-bsp'];

    // Placeholder for future sticky nav implementation
    const pageNavLinks = [
        { href: '#about', label: 'About' },
        { href: '#program-details', label: 'Details' },
        { href: '#syllabus', label: 'Syllabus' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#faq', label: 'FAQ' },
    ];

    const Hero: React.FC = () => {
        const InfoCard: React.FC<{icon: React.ReactNode, title: string, text: string, tooltip?: string}> = ({ icon, title, text, tooltip }) => (
            <div className={`corp-bsp-info-card group ${tooltip ? 'cursor-help' : ''}`}>
                <div className="corp-bsp-icon-wrapper">
                    {icon}
                </div>
                <div>
                    <h3 className="corp-bsp-card-title">{title}</h3>
                    <p className="corp-bsp-card-text">{text}</p>
                </div>
                {tooltip && (
                    <div className="corp-bsp-tooltip">
                        {tooltip}
                        <div className="corp-bsp-tooltip-arrow"></div>
                    </div>
                )}
            </div>
        );
        
        const bgImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c";
        const bgSrcSet = `${bgImage}?q=80&w=640&auto=format&fit=crop 640w, ${bgImage}?q=80&w=1024&auto=format&fit=crop 1024w, ${bgImage}?q=80&w=2070&auto=format&fit=crop 2070w`;

        return (
            <section id="home" className="corp-bsp-hero">
                <div className="corp-bsp-hero-overlay"></div>
                <img 
                    src={`${bgImage}?q=80&w=2070&auto=format&fit=crop`} 
                    srcSet={bgSrcSet}
                    sizes="100vw"
                    alt="Background" 
                    className="corp-bsp-hero-bg"
                    loading="eager"
                />
                <div className="corp-bsp-hero-content">
                    <h1 className="corp-bsp-hero-title">
                        {course.hero.title}
                    </h1>
                    <p className="corp-bsp-hero-subtitle">
                        {course.hero.subtitle}
                    </p>
                    <div className="corp-bsp-cta-container">
                        <a href="#contact" className="corp-bsp-cta-btn">
                            Request a Corporate Quote
                        </a>
                    </div>
                    <div className="corp-bsp-hero-cards">
                        {course.hero.infoCards.map(card => <InfoCard key={card.title} {...card} />)}
                    </div>
                </div>
            </section>
        );
    };

    const About: React.FC = () => {
        const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
            <div className="corp-bsp-highlight-card">
                <div className="mb-2">{icon}</div>
                <h4 className="corp-bsp-highlight-title">{title}</h4>
                <p className="corp-bsp-highlight-desc">{description}</p>
            </div>
        );
        return (
            <section id="about" className="corp-bsp-section corp-bsp-bg-white">
                <div className="corp-bsp-container">
                    <SectionTitle title="About the Training" subtitle={course.title} />
                    <div className="corp-bsp-grid-2">
                        <div className="corp-bsp-text-block">
                            {course.about.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="corp-bsp-highlights-grid">
                            {course.about.highlights.map((item, index) => <HighlightCard key={index} {...item} />)}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ProgramDetails: React.FC = () => {
        return (
            <section id="program-details" className="corp-bsp-section corp-bsp-bg-light">
                <div className="corp-bsp-container">
                     <div className="corp-bsp-centered-header">
                        <h2 className="corp-bsp-section-title">Program Overview</h2>
                     </div>
                    <div className="corp-bsp-grid-2">
                        {/* Training Details */}
                        <div className="corp-bsp-details-card">
                            <div className="corp-bsp-details-icon-bg">
                                <AcademicCapIcon className="corp-bsp-icon-xl" />
                            </div>
                            <h3 className="corp-bsp-details-title">
                                <CalendarDaysIcon className="corp-bsp-icon-md corp-bsp-text-secondary" />
                                Training Details
                            </h3>
                            <ul className="corp-bsp-details-list">
                                <li className="corp-bsp-details-list-item">
                                    <div className="corp-bsp-details-bullet"><ClockIcon className="corp-bsp-icon-sm" /></div>
                                    <div>
                                        <span className="corp-bsp-details-label">Duration</span>
                                        <span className="corp-bsp-details-value">8 Days / 64 Hours</span>
                                    </div>
                                </li>
                                <li className="corp-bsp-details-list-item">
                                    <div className="corp-bsp-details-bullet"><BuildingOffice2Icon className="corp-bsp-icon-sm" /></div>
                                    <div>
                                        <span className="corp-bsp-details-label">Format</span>
                                        <span className="corp-bsp-details-value">On-Site or Online Live</span>
                                    </div>
                                </li>
                                <li className="corp-bsp-details-list-item">
                                    <div className="corp-bsp-details-bullet"><UserGroupIcon className="corp-bsp-icon-sm" /></div>
                                    <div>
                                        <span className="corp-bsp-details-label">Batch Size</span>
                                        <span className="corp-bsp-details-value">Standard 5-10 Engineers</span>
                                    </div>
                                </li>
                                <li className="corp-bsp-details-list-item">
                                    <div className="corp-bsp-details-bullet"><CodeBracketIcon className="corp-bsp-icon-sm" /></div>
                                    <div>
                                        <span className="corp-bsp-details-label">Methodology</span>
                                        <span className="corp-bsp-details-value">60% Hands-on, 40% Theory</span>
                                    </div>
                                </li>
                                <li className="corp-bsp-details-list-item">
                                    <div className="corp-bsp-details-bullet"><CpuChipIcon className="corp-bsp-icon-sm" /></div>
                                    <div>
                                        <span className="corp-bsp-details-label">Hardware</span>
                                        <span className="corp-bsp-details-value">Your Custom Board or Eval Kits</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Pre-requisites */}
                        <div className="corp-bsp-details-card accent-border">
                             <div className="corp-bsp-details-icon-bg">
                                <CodeBracketIcon className="corp-bsp-icon-xl" />
                            </div>
                            <h3 className="corp-bsp-details-title">
                                <CheckCircleIcon className="corp-bsp-icon-md corp-bsp-text-accent" />
                                Pre-requisites
                            </h3>
                            <ul className="corp-bsp-details-list">
                                <li className="corp-bsp-prereq-item">
                                    <div className="corp-bsp-dot"></div>
                                    <span className="corp-bsp-prereq-text">Solid C Programming skills</span>
                                </li>
                                <li className="corp-bsp-prereq-item">
                                    <div className="corp-bsp-dot"></div>
                                    <span className="corp-bsp-prereq-text">Linux Command Line familiarity</span>
                                </li>
                                <li className="corp-bsp-prereq-item">
                                    <div className="corp-bsp-dot"></div>
                                    <span className="corp-bsp-prereq-text">Basic Embedded Systems knowledge</span>
                                </li>
                                <li className="corp-bsp-prereq-item">
                                    <div className="corp-bsp-dot"></div>
                                    <span className="corp-bsp-prereq-text">Experience with Microcontrollers</span>
                                </li>
                                <li className="corp-bsp-prereq-item">
                                    <div className="corp-bsp-dot"></div>
                                    <span className="corp-bsp-prereq-text">Understanding of Hardware Schematics</span>
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
            <div className="corp-bsp-timeline-item">
                <div className="corp-bsp-timeline-line"></div>
                <div className="corp-bsp-timeline-marker">{index + 1}</div>
                <div className="corp-bsp-syllabus-card">
                    <button onClick={onClick} className="corp-bsp-syllabus-btn">
                        <h3 className="corp-bsp-syllabus-title">{module.title}</h3>
                        <div className="corp-bsp-syllabus-meta">
                            {module.duration && (<div className="corp-bsp-badge-blue"><ClockIcon className="corp-bsp-icon-sm" /><span>{module.duration}</span></div>)}
                            <ChevronDownIcon className={`corp-bsp-chevron ${isOpen ? 'rotate' : ''}`} />
                        </div>
                    </button>
                    <div className={`corp-bsp-accordion-grid ${isOpen ? 'open' : 'closed'}`}>
                        <div className="corp-bsp-accordion-inner">
                            <div className={`corp-bsp-accordion-content ${isOpen ? 'open' : 'closed'}`}>
                                {module.isHandsOn && (<div className="corp-bsp-tags-container"><div className="corp-bsp-badge-secondary"><HandRaisedIcon className="corp-bsp-icon-sm" /><span>Hands-on</span></div></div>)}
                                <ul className="corp-bsp-list">{module.topics.map((topic, i) => (<li key={i} className="corp-bsp-list-item"><span className="corp-bsp-list-bullet">▸</span><span className="corp-bsp-list-text">{topic}</span></li>))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <section id="syllabus" className="corp-bsp-section corp-bsp-bg-light">
                <div className="corp-bsp-container">
                    <SectionTitle title="Training Syllabus" subtitle="A comprehensive, hands-on curriculum" />
                    <div className="corp-bsp-timeline-container">{course.syllabus.map((module, index) => (<TimelineItem key={index} module={module} index={index} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
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
            <div className={`corp-bsp-pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                <h3 className="corp-bsp-pricing-title">{plan.tier}</h3>
                <div className="corp-bsp-pricing-amount-box"><div className="corp-bsp-price-tag">{plan.duration}</div><p className="corp-bsp-pricing-amount">{plan.price}</p></div>
                <ul className="corp-bsp-pricing-features">{plan.features.map((feature, index) => (<li key={index} className="corp-bsp-pricing-feature-item"><CheckCircleIcon className="corp-bsp-icon-check" /><span className="corp-bsp-pricing-text">{feature}</span></li>))}</ul>
                <div className="corp-bsp-pricing-cta-mt"><a href="#contact" className="corp-bsp-cta-btn w-full">Request a Quote</a></div>
            </div>
        );
        return (
            <section id="pricing" className="corp-bsp-section corp-bsp-bg-blue">
                <div className="corp-bsp-container">
                    <SectionTitle title="Corporate Training Packages" subtitle="Flexible training options to suit your team's needs" />
                    <div className="corp-bsp-pricing-grid">{pricingData.map((plan, index) => (<PricingCard key={index} plan={plan} />))}</div>
                </div>
            </section>
        );
    };

    const Testimonials: React.FC = () => {
        const testimonialsData = [
            {
                name: "Rajesh K.",
                role: "Sr. Engineering Manager",
                company: "Automotive Tier-1",
                quote: "The team was struggling with custom board bring-up on i.MX8. After the 8-day training, our engineers confidently ported U-Boot and Kernel within weeks. Highly recommended for corporate teams."
            },
            {
                name: "Sarah Jenkins",
                role: "Lead Embedded Architect",
                company: "IoT Solutions Inc.",
                quote: "We moved from buildroot to Yocto and needed a fast-track course. The training was perfectly tailored to our hardware. The instructor's deep knowledge of Bitbake and recipes saved us months of learning curve."
            },
            {
                name: "David Chen",
                role: "Principal Firmware Engineer",
                company: "Medical Devices Co.",
                quote: "Excellent hands-on approach. We worked directly on our custom board during the training. By the end of the week, we had a booting system with a custom rootfs. Exactly what we needed."
            }
        ];

        return (
            <section id="testimonials" className="corp-bsp-section corp-bsp-bg-light">
                <div className="corp-bsp-container">
                    <SectionTitle title="What Our Clients Say" subtitle="Trusted by Engineering Teams Worldwide" />
                    <div className="corp-bsp-grid-3">
                        {testimonialsData.map((t, i) => (
                            <div key={i} className="corp-bsp-testimonial-card">
                                <div className="corp-bsp-quote-icon">"</div>
                                <div className="corp-bsp-stars">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
                                </div>
                                <p className="corp-bsp-testimonial-text">"{t.quote}"</p>
                                <div className="corp-bsp-testimonial-author">
                                     <div className="corp-bsp-author-avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="corp-bsp-author-name">{t.name}</h4>
                                        <p className="corp-bsp-author-role">{t.role}</p>
                                        <p className="corp-bsp-author-company">{t.company}</p>
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
            <div className="corp-bsp-faq-item">
                <button onClick={onClick} className="corp-bsp-faq-btn">
                    <span className="corp-bsp-faq-question">{item.question}</span>
                    <PlusIcon className={`corp-bsp-icon-plus ${isOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`corp-bsp-accordion-grid ${isOpen ? 'open' : 'closed'}`}><div className="corp-bsp-accordion-inner"><div className="corp-bsp-faq-inner">{item.answer}</div></div></div>
            </div>
        );
        return (
            <section id="faq" className="corp-bsp-section corp-bsp-bg-light">
                <div className="corp-bsp-container">
                    <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know" />
                    <div className="corp-bsp-faq-stack">{faqData.map((item, index) => (<FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
                </div>
            </section>
        );
    };

    return (
        <>
            <Hero />
            <About />
            <ProgramDetails />
            <Syllabus />
            <Pricing />
            <Testimonials />
            <FAQ />
            <TrainingsContact subtitle="Request a corporate quote for your team" />
        </>
    );
};

export default CorporateELinuxYoctoTraining;
