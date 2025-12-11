
import React, { useState, useEffect } from 'react';
import CorporateELinuxYoctoTraining from './corporate-trainings/corporate-elinux-yocto-training';
import CorporateAdvancedYoctoTraining from './corporate-trainings/corporate-advanced-yocto-training';
import CorporateLinuxDriversTraining from './corporate-trainings/corporate-linux-drivers-training';
import EmbeddedLinuxDevelopment from './corporate-trainings/embedded-linux-development';
import FirmwareToLinuxMigration from './corporate-trainings/firmware-to-linux-migration';
import ZephyrRTOSTraining from './corporate-trainings/zephyr-rtos-training';
import QNXRTOSTraining from './corporate-trainings/qnx-rtos-training';
import TrainingsClients from './TrainingsClients';
import TrainingsContact from './trainings-contact';
import './home.css';


// --- Icons from courseData ---

const MicrochipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-18 0h1.5M12 21v-1.5m0-16.5V3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6.375a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125s-5.125-2.28-5.125-5.125a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125S0 9.22 0 6.375a4.125 4.125 0 0 1 8.25 0c0 2.845-2.28 5.125-5.125 5.125" transform="translate(4.5 6)" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 17.625a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125s5.125 2.28 5.125 5.125a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125S24 14.78 24 17.625a4.125 4.125 0 0 1-8.25 0c0-2.845 2.28-5.125 5.125-5.125" transform="translate(-4.5 -6)" />
    </svg>
);

const RocketLaunchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 0-7.38-5.84m2.56 5.84L6.16 20.34m0 0L2.34 16.54m3.82 3.8L10.22 10.22m5.37-5.37L16.54 2.34m3.8 3.82-3.44 3.44" /></svg>
);

const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);

const CubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
);

const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-18 0h1.5M12 21v-1.5m0-16.5V3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5v9H3.75v-9Z" />
    </svg>
);

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
);

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

// --- Data from courseData ---

const coursesData: { [key: string]: any } = {
    'firmware-to-linux': {
        id: 'firmware-to-linux',
        title: 'Firmware to Embedded Linux Job Assistance Program',
        menuTitle: 'Firmware to Embedded Linux Job Program',
        description: 'Dedicated job assistance program for firmware engineers to switch to Embedded Linux. Includes custom hardware training and job assistance.',
        tags: ['Job Assistance', 'Real Hardware', 'Professionals Only'],
        icon: RocketLaunchIcon,
        image: "https://yoctotutor.com/images/Trainings-siva/are-you-firmware.webp"
    },
    'yocto-bsp': {
        id: 'yocto-bsp',
        title: 'Porting Embedded Linux BSP Using Yocto Project',
        menuTitle: 'Corporate Embedded Linux',
        description: 'An intensive 8-day corporate course to master U-Boot, Kernel, and Yocto for your custom hardware. From power-on to a production-ready system.',
        tags: ['8 Days', 'On-Site & Online', 'For Companies'],
        icon: CpuChipIcon,
        image: "https://yoctotutor.com/images/Trainings-siva/porting-linux-image.webp"
    },
    'qnx-rtos': {
        id: 'qnx-rtos',
        title: 'QNX Neutrino RTOS Development',
        menuTitle: 'QNX RTOS Training',
        description: 'Master the industry-standard RTOS for Automotive and Critical Systems. Learn Microkernel architecture, IPC, Resource Managers, and Safety.',
        tags: ['5 Days', 'Automotive Focus', 'Safety Critical'],
        icon: CpuChipIcon,
        image: "https://yoctotutor.com/images/Trainings-siva/qnx-image.webp"
    },
    'zephyr-rtos': {
        id: 'zephyr-rtos',
        title: 'Zephyr RTOS Development',
        menuTitle: 'Zephyr RTOS Training',
        description: 'Master the fastest-growing RTOS for IoT. Learn Kernel services, Device Drivers, BLE, and Networking using the Zephyr ecosystem.',
        tags: ['4 Days', 'Online & On-Site', 'Modern RTOS'],
        icon: CpuChipIcon,
        image: "https://yoctotutor.com/images/Trainings-siva/zephyr-image.webp"
    },
    'embedded-linux-dev': {
        id: 'embedded-linux-dev',
        title: 'Embedded Linux Development',
        menuTitle: 'Embedded Linux Development',
        description: 'Comprehensive training for working professionals. Master toolchains, U-Boot, Kernel, and Rootfs from scratch.',
        tags: ['Weekend/Online', 'Career Growth', 'For Professionals'],
        icon: MicrochipIcon,
        image: "https://yoctotutor.com/images/Trainings-siva/elinux-block-image.webp"
    },
    'advanced-yocto': {
        id: 'advanced-yocto',
        title: 'Advanced Yocto Project Development',
        description: 'Deep dive into advanced topics like eSDK, package management, security, and creating custom distributions for complex products.',
        tags: ['5 Days', 'Online', 'Advanced'],
        icon: CubeIcon,
        image: "https://yoctotutor.com/images/Trainings-siva/yt-orange.webp"
    },
    'linux-drivers': {
        id: 'linux-drivers',
        title: 'Linux Device Driver Development',
        description: 'Learn to write, debug, and integrate custom kernel drivers for various device types like platform, I2C, and SPI.',
        tags: ['5 Days', 'On-Site & Online', 'Kernel Development'],
        icon: CodeBracketIcon,
        image: "https://yoctotutor.com/images/Trainings-siva/ldd-image.webp"
    }
};

// Split trainings into Featured and Standard with specific order
const featuredIds = ['firmware-to-linux', 'yocto-bsp'];
const featuredTrainings = featuredIds.map(id => coursesData[id]);

// Standard trainings in specific order
const standardIds = [
    'advanced-yocto',
    'embedded-linux-dev',
    'linux-drivers',
    'zephyr-rtos',
    'qnx-rtos'
];
const standardTrainings = standardIds.map(id => coursesData[id]);


// --- Common Components ---

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="section-title-container">
      <h2 className={`section-title-text ${isWhiteText ? 'section-title-white' : 'section-title-dark'}`}>
        {title}
        <span className="section-title-underline"></span>
      </h2>
      <p className={`section-subtitle ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'section-subtitle-white' : 'section-subtitle-dark')}`}>{subtitle}</p>
    </div>
);

const CourseCard: React.FC<{ training: any; onNavigate: (page: string, courseId: string) => void }> = ({ training, onNavigate }) => (
    <div className={`course-card group ${featuredIds.includes(training.id) ? 'featured-card' : ''}`}>
        {/* Image Section */}
        <div className="course-card-image-box">
            <div className="course-card-image-overlay"></div>
            <img 
                src={training.image} 
                alt={training.title} 
                className="course-card-image"
            />
            <div className="course-card-icon">
                <training.icon />
            </div>
        </div>
        
        {/* Content Section */}
        <div className="course-card-body">
            <h3 className="course-card-title">{training.title}</h3>
            <p className="course-card-desc">{training.description}</p>
            
            <div className="course-tags">
                {training.tags.map((tag: string) => (
                    <span key={tag} className={`course-tag ${tag === 'For Companies' || tag === 'Job Assistance' ? 'tag-highlight' : ''}`}>
                        {tag}
                    </span>
                ))}
            </div>
            
            <button onClick={() => onNavigate('training', training.id)} className="course-btn">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Rahul M.",
            role: "Senior Firmware Engineer",
            quote: "The Embedded Linux course was a game-changer for my career. The hands-on approach with Yocto and Device Drivers helped me crack interviews at top Tier-1 companies."
        },
        {
            name: "Sneha P.",
            role: "IoT Developer",
            quote: "I was transitioning from a bare-metal background. The training provided the exact bridge I needed to understand the Linux kernel internals and user-space programming."
        },
        {
            name: "David K.",
            role: "Engineering Manager",
            quote: "Excellent corporate training. The instructor tailored the syllabus to our custom board requirements, which accelerated our product development significantly."
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="section-container">
                <SectionTitle title="Success Stories" subtitle="Hear from our students and corporate partners" isWhiteText={true} />
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="testimonial-quote-icon">"</div>
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
                            </div>
                            <p className="testimonial-text">"{t.quote}"</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">
                                    {t.name.charAt(0)}
                                </div>
                                <div className="testimonial-info">
                                    <span className="testimonial-name">{t.name}</span>
                                    <span className="testimonial-role">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQSection: React.FC = () => {
    const faqData = [
        {
            question: "Do you offer corporate training for teams?",
            answer: "Yes, we specialize in corporate training. We can customize the curriculum to match your team's specific project requirements and hardware. We offer both on-site and online training options."
        },
        {
            question: "What is the mode of training?",
            answer: "We offer both live online instructor-led training and on-site corporate training. Our public batches are typically conducted online on weekends to suit working professionals."
        },
        {
            question: "Do I need specific hardware for the courses?",
            answer: "For most courses like Embedded Linux and Yocto, we use QEMU which simulates hardware on your PC. However, concepts are directly applicable to physical boards. For corporate training, we can use your specific target hardware."
        },
        {
            question: "Do you provide job assistance?",
            answer: "Yes, our 'Firmware to Embedded Linux Job Assistance Program' is specifically designed with placement support. For other courses, we provide career guidance and resume review support."
        },
        {
            question: "Can I get a recording of the sessions?",
            answer: "Yes, for online batches, recordings of the live sessions are provided for a limited time for revision purposes."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-trainings bg-white">
            <div className="section-container">
                <SectionTitle title="Frequently Asked Questions" subtitle="Common queries about our training programs" />
                
                <div className="home-faq-stack">
                    {faqData.map((item, index) => (
                        <div key={index} className="home-faq-item">
                            <button 
                                className="home-faq-btn"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="home-faq-question">{item.question}</span>
                                <PlusIcon className={`home-faq-icon ${openIndex === index ? 'rotate' : ''}`} />
                            </button>
                            <div 
                                className={`home-faq-content ${openIndex === index ? 'open' : 'closed'}`}
                            >
                                <div className="home-faq-inner">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- Trainings Page Component ---

const TrainingsPage: React.FC<{ onNavigate: (page: string, courseId: string) => void }> = ({ onNavigate }) => {
    return (
        <>
            <div className="trainings-page-wrapper">
                <div className="section-container">
                     <div className="trainings-page-header">
                        <span className="trainings-page-sub">Grow Your Skills</span>
                        <h1 className="trainings-page-title">Our Training Programs</h1>
                        <p className="trainings-page-desc">Explore our specialized courses in Embedded Linux, Yocto Project, RTOS, and Device Drivers designed for professionals and teams.</p>
                     </div>
                    
                    {/* Featured Section */}
                    <div className="mb-16">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-primary-dark border-l-4 border-accent pl-4">Flagship Career Programs</h2>
                        </div>
                        <div className="trainings-grid-featured">
                            {featuredTrainings.map(training => (
                                <CourseCard key={training.id} training={training} onNavigate={onNavigate} />
                            ))}
                        </div>
                    </div>

                    {/* Standard Section */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-primary-dark border-l-4 border-secondary pl-4">Skill Upgradation Courses</h2>
                        </div>
                        <div className="trainings-grid">
                            {standardTrainings.map(training => (
                                <CourseCard key={training.id} training={training} onNavigate={onNavigate} />
                            ))}
                        </div>
                    </div>
                </div>
                <TrainingsContact title="Need Custom Training?" subtitle="We can tailor a curriculum for your corporate team's specific requirements." />
            </div>
        </>
    );
};


// --- Home Page Component ---
const HomeHero: React.FC = () => {
    const bgImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97";
    const bgSrcSet = `${bgImage}?q=80&w=640&auto=format&fit=crop 640w, ${bgImage}?q=80&w=1024&auto=format&fit=crop 1024w, ${bgImage}?q=80&w=2070&auto=format&fit=crop 2070w`;

    return (
        <section id="home-hero" className="home-hero">
            <div className="home-hero-overlay"></div>
            <img 
                src={`${bgImage}?q=80&w=2070&auto=format&fit=crop`} 
                srcSet={bgSrcSet}
                sizes="100vw"
                alt="Background" 
                className="home-hero-bg-img"
                loading="eager"
            />
            <div className="home-hero-content">
                <h1 className="home-hero-title">
                    Expert-Led Corporate Training for Embedded Systems
                </h1>
                <p className="home-hero-subtitle">
                    Accelerate your product development with our intensive, hands-on courses in Embedded Linux, Yocto Project, and more.
                </p>
            </div>
        </section>
    );
};

const TrainingList: React.FC<{ onNavigate: (page: string, courseId: string) => void }> = ({ onNavigate }) => (
    <>
        {/* Featured Section - White Background */}
        <section id="featured-programs" className="section-trainings bg-white">
            <div className="section-container">
                <SectionTitle title="Flagship Career Programs" subtitle="Job-oriented training on real hardware for maximum impact" />
                <div className="trainings-grid-featured">
                    {featuredTrainings.map(training => (
                        <CourseCard key={training.id} training={training} onNavigate={onNavigate} />
                    ))}
                </div>
            </div>
        </section>

        {/* Standard Section - Light Background */}
        <section id="other-trainings" className="section-trainings">
            <div className="section-container">
                <SectionTitle title="Skill Upgradation Courses" subtitle="Specialized modules for working professionals and corporate teams" />
                <div className="trainings-grid">
                    {standardTrainings.map(training => (
                        <CourseCard key={training.id} training={training} onNavigate={onNavigate} />
                    ))}
                </div>
            </div>
        </section>
    </>
);

const HomePage: React.FC<{ onNavigate: (page: string, courseId: string) => void }> = ({ onNavigate }) => {
    return (
        <>
            <HomeHero />
            <TrainingList onNavigate={onNavigate} />
            <TrainingsClients />
            <Testimonials />
            <FAQSection />
            <TrainingsContact />
        </>
    );
};

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [currentCourseId, setCurrentCourseId] = useState('');

    // Listener for hash changes to support deep linking and browser navigation
    useEffect(() => {
        const handleHashChange = () => {
            // Remove the '#' character
            const hash = window.location.hash.replace('#', '');
            
            // Default to home if empty or explicitly home
            if (!hash || hash === 'home' || hash === '/') {
                setCurrentPage('home');
                setCurrentCourseId('');
                window.scrollTo(0, 0);
            } else if (hash === 'trainings') {
                setCurrentPage('trainings');
                setCurrentCourseId('');
                window.scrollTo(0, 0);
            } else if (hash.startsWith('training/')) {
                const courseId = hash.split('/')[1];
                if (coursesData[courseId]) {
                    setCurrentPage('training');
                    setCurrentCourseId(courseId);
                    window.scrollTo(0, 0);
                } else {
                    // Fallback for invalid course ID
                    setCurrentPage('home');
                    window.scrollTo(0, 0);
                }
            } 
            // If the hash is an internal link (e.g. #contact, #about), do not change the page state.
            // This allows scrolling to sections within the current page to work naturally.
        };

        // Listen for changes
        window.addEventListener('hashchange', handleHashChange);
        
        // Handle initial load
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleNavigate = (page: string, courseId: string = '') => {
        // Update the URL hash which triggers the listener to update state
        if (page === 'home') {
            window.location.hash = 'home';
        } else if (page === 'trainings') {
            window.location.hash = 'trainings';
        } else if (page === 'training' && courseId) {
            window.location.hash = `training/${courseId}`;
        }
    };

    if (currentPage === 'trainings') {
        return <TrainingsPage onNavigate={handleNavigate} />;
    }

    if (currentPage === 'training') {
        const renderCourse = () => {
            switch (currentCourseId) {
                case 'yocto-bsp': return <CorporateELinuxYoctoTraining />;
                case 'advanced-yocto': return <CorporateAdvancedYoctoTraining />;
                case 'linux-drivers': return <CorporateLinuxDriversTraining />;
                case 'embedded-linux-dev': return <EmbeddedLinuxDevelopment />;
                case 'firmware-to-linux': return <FirmwareToLinuxMigration />;
                case 'zephyr-rtos': return <ZephyrRTOSTraining />;
                case 'qnx-rtos': return <QNXRTOSTraining />;
                default: return <div>Course not found</div>;
            }
        };

        return (
            <>
                <div className="back-btn-wrapper">
                    <button 
                        onClick={() => handleNavigate('home')}
                        className="back-btn group"
                        title="Back to Home"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="back-btn-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </button>
                </div>
                {renderCourse()}
            </>
        );
    }

    return <HomePage onNavigate={handleNavigate} />;
};

export default App;
