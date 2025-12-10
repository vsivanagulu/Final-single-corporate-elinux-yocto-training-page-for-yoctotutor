
import React, { useState } from 'react';
import TrainingsContact from '../trainings-contact';
import './corporate-linux-drivers-training.css';

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

// --- Data ---

const linuxDriversSyllabusData = [
    { title: 'Module 1: Kernel Development Environment Setup', isHandsOn: true, duration: '0.5 Days', topics: ['Kernel Source Code Overview', 'Configuring, Compiling, and Installing a Custom Kernel', 'Introduction to Loadable Kernel Modules (LKMs)', 'Creating a "Hello World" Kernel Module & Makefile'] },
    { title: 'Module 2: Character Device Drivers', isHandsOn: true, duration: '1 Day', topics: ['Major/Minor Numbers', 'Device File Creation (mknod, udev)', 'File Operations (open, read, write, release)', 'Accessing User Space Data (copy_to/from_user)'] },
    { title: 'Module 3: Concurrency and Race Conditions', isHandsOn: true, duration: '0.5 Days', topics: ['Understanding Concurrency', 'Mutexes and Semaphores', 'Spinlocks', 'Atomic Operations'] },
    { title: 'Module 4: Platform Drivers & Device Tree', isHandsOn: true, duration: '1 Day', topics: ['Device Tree Syntax and Compilation', 'Binding Documentation', 'Writing a Platform Driver', 'Accessing Device Tree Properties from a Driver'] },
    { title: 'Module 5: I2C and SPI Drivers', isHandsOn: true, duration: '1 Day', topics: ['I2C/SPI Subsystem Architecture', 'Writing an I2C Client Driver', 'Writing a SPI Client Driver', 'Interacting with Real Hardware Sensors'] },
    { title: 'Module 6: Interrupt Handling', isHandsOn: true, duration: '0.5 Days', topics: ['Requesting and Freeing IRQs', 'Top Halves vs. Bottom Halves', 'Tasklets and Workqueues'] },
    { title: 'Module 7: Advanced Topics & Debugging', isHandsOn: true, duration: '0.5 Days', topics: ['Memory Management in Kernel Space (kmalloc, vmalloc)', 'Using debugfs and sysfs for debugging', 'Kernel Oops Analysis'] }
];

const coursesData: { [key: string]: any } = {
    'linux-drivers': {
        id: 'linux-drivers',
        title: 'Linux Device Driver Development',
        description: 'Learn to write, debug, and integrate custom kernel drivers for various device types like platform, I2C, and SPI devices.',
        tags: ['5 Days', 'On-Site & Online', 'Kernel Development'],
        icon: CodeBracketIcon,
        hero: {
            title: 'Linux Device Driver Development',
            subtitle: 'Master the art of writing, debugging, and integrating custom kernel drivers.',
            infoCards: [
                { icon: <CalendarDaysIcon className="w-8 h-8"/>, title: "Duration", text: "5 Days" },
                { icon: <BuildingOffice2Icon className="w-8 h-8"/>, title: "Format", text: "On-Site & Online" },
                { icon: <CodeBracketIcon className="w-8 h-8"/>, title: "Focus", text: "Kernel Programming" },
            ]
        },
        about: {
            description: [
                'Unlock the full potential of your hardware by writing custom Linux device drivers. This hands-on course covers the entire lifecycle of kernel module development.',
                'From simple character drivers to complex bus-based drivers for I2C and SPI, you will learn the essential APIs, concurrency management techniques, and debugging strategies to write stable and efficient kernel code.'
            ],
            highlights: [
                { icon: <CodeBracketIcon className="w-8 h-8 ldd-text-secondary" />, title: 'Character Drivers', description: 'Master the fundamental file_operations structure for userspace interaction.' },
                { icon: <CpuChipIcon className="w-8 h-8 ldd-text-secondary" />, title: 'Platform & DT', description: 'Write modern drivers using the device tree for hardware description.' },
                { icon: <Cog6ToothIcon className="w-8 h-8 ldd-text-secondary" />, title: 'Bus Drivers', description: 'Interface with real-world hardware using the I2C and SPI subsystems.' },
                { icon: <ShieldCheckIcon className="w-8 h-8 ldd-text-secondary" />, title: 'Concurrency', description: 'Learn to handle interrupts and write race-free code with kernel primitives.' },
            ]
        },
        syllabus: linuxDriversSyllabusData
    }
};


// --- Common Components ---

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="ldd-section-header">
      <h2 className={`ldd-title ${isWhiteText ? 'white' : 'dark'}`}>
        {title}
        <span className="ldd-title-underline"></span>
      </h2>
      <p className={`ldd-subtitle ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'white' : 'dark')}`}>{subtitle}</p>
    </div>
);


const CorporateLinuxDriversTraining = () => {
    const course = coursesData['linux-drivers'];

    const Hero: React.FC = () => {
        const InfoCard: React.FC<{icon: React.ReactNode, title: string, text: string}> = ({ icon, title, text }) => (
            <div className="ldd-info-card group">
                <div className="ldd-icon-wrapper">
                    {icon}
                </div>
                <div>
                    <h3 className="ldd-card-title">{title}</h3>
                    <p className="ldd-card-text">{text}</p>
                </div>
            </div>
        );
        
        const bgImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c";
        const bgSrcSet = `${bgImage}?q=80&w=640&auto=format&fit=crop 640w, ${bgImage}?q=80&w=1024&auto=format&fit=crop 1024w, ${bgImage}?q=80&w=2070&auto=format&fit=crop 2070w`;

        return (
            <section id="home" className="ldd-hero">
                <div className="ldd-hero-overlay"></div>
                <img 
                    src={`${bgImage}?q=80&w=2070&auto=format&fit=crop`} 
                    srcSet={bgSrcSet}
                    sizes="100vw"
                    alt="Background" 
                    className="ldd-hero-bg"
                    loading="eager"
                />
                <div className="ldd-hero-content">
                    <h1 className="ldd-hero-title">
                        {course.hero.title}
                    </h1>
                    <p className="ldd-hero-subtitle">
                        {course.hero.subtitle}
                    </p>
                    <div className="ldd-cta-container">
                        <a href="#contact" className="ldd-cta-btn">
                            Request a Corporate Quote
                        </a>
                    </div>
                    <div className="ldd-hero-cards">
                        {course.hero.infoCards.map(card => <InfoCard key={card.title} {...card} />)}
                    </div>
                </div>
            </section>
        );
    };

    const About: React.FC = () => {
        const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
            <div className="ldd-highlight-card">
                <div className="mb-2">{icon}</div>
                <h4 className="ldd-highlight-title">{title}</h4>
                <p className="ldd-highlight-desc">{description}</p>
            </div>
        );
        return (
            <section id="about" className="ldd-section ldd-bg-white">
                <div className="ldd-container">
                    <SectionTitle title="About the Training" subtitle={course.title} />
                    <div className="ldd-grid-2">
                        <div className="ldd-text-block">
                            {course.about.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="ldd-highlights-grid">
                            {course.about.highlights.map((item, index) => <HighlightCard key={index} {...item} />)}
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
            <div className="ldd-timeline-item">
                <div className="ldd-timeline-line"></div>
                <div className="ldd-timeline-marker">{index + 1}</div>
                <div className="ldd-syllabus-card">
                    <button onClick={onClick} className="ldd-syllabus-btn">
                        <h3 className="ldd-syllabus-title">{module.title}</h3>
                        <div className="ldd-syllabus-meta">
                            {module.duration && (<div className="ldd-badge-blue"><ClockIcon className="ldd-icon-sm" /><span>{module.duration}</span></div>)}
                            <ChevronDownIcon className={`ldd-chevron ${isOpen ? 'rotate' : ''}`} />
                        </div>
                    </button>
                    <div className={`ldd-accordion-grid ${isOpen ? 'open' : 'closed'}`}>
                        <div className="ldd-accordion-inner">
                            <div className={`ldd-accordion-content ${isOpen ? 'open' : 'closed'}`}>
                                {module.isHandsOn && (<div className="ldd-tags-container"><div className="ldd-badge-secondary"><HandRaisedIcon className="ldd-icon-sm" /><span>Hands-on</span></div></div>)}
                                <ul className="ldd-list">{module.topics.map((topic, i) => (<li key={i} className="ldd-list-item"><span className="ldd-list-bullet">▸</span><span className="ldd-list-text">{topic}</span></li>))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <section id="syllabus" className="ldd-section ldd-bg-light">
                <div className="ldd-container">
                    <SectionTitle title="Training Syllabus" subtitle="A comprehensive, hands-on curriculum" />
                    <div className="ldd-timeline-container">{course.syllabus.map((module, index) => (<TimelineItem key={index} module={module} index={index} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
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
            <div className={`ldd-pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                <h3 className="ldd-pricing-title">{plan.tier}</h3>
                <div className="ldd-pricing-amount-box"><div className="ldd-price-tag">{plan.duration}</div><p className="ldd-pricing-amount">{plan.price}</p></div>
                <ul className="ldd-pricing-features">{plan.features.map((feature, index) => (<li key={index} className="ldd-pricing-feature-item"><CheckCircleIcon className="ldd-icon-check" /><span className="ldd-pricing-text">{feature}</span></li>))}</ul>
                <div className="ldd-pricing-cta-mt"><a href="#contact" className="ldd-cta-btn w-full">Request a Quote</a></div>
            </div>
        );
        return (
            <section id="pricing" className="ldd-section ldd-bg-blue">
                <div className="ldd-container">
                    <SectionTitle title="Corporate Training Packages" subtitle="Flexible training options to suit your team's needs" />
                    <div className="ldd-pricing-grid">{pricingData.map((plan, index) => (<PricingCard key={index} plan={plan} />))}</div>
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
            <div className="ldd-faq-item">
                <button onClick={onClick} className="ldd-faq-btn">
                    <span className="ldd-faq-question">{item.question}</span>
                    <PlusIcon className={`ldd-icon-plus ${isOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`ldd-accordion-grid ${isOpen ? 'open' : 'closed'}`}><div className="ldd-accordion-inner"><div className="ldd-faq-inner">{item.answer}</div></div></div>
            </div>
        );
        return (
            <section id="faq" className="ldd-section ldd-bg-light">
                <div className="ldd-container">
                    <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know" />
                    <div className="ldd-faq-stack">{faqData.map((item, index) => (<FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
                </div>
            </section>
        );
    };

    return (
        <>
            <Hero />
            <About />
            <Syllabus />
            <Pricing />
            <FAQ />
            <TrainingsContact />
        </>
    );
};

export default CorporateLinuxDriversTraining;
