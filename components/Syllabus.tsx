
import React, { useState, useEffect, useRef } from 'react';

const syllabusData = [
  {
    title: 'Module 1: Embedded Systems & ARM Fundamentals',
    isHandsOn: true,
    topics: [
      'Overview of ARM Architecture and ARM ARCH Family',
      'Introduction to ARM Cortex cores (Cortex-A, Cortex-R, Cortex-M)',
      'Embedded Systems Overview - Hardware and Software types',
      'ARM Board Details and Schematic Overview',
      'Understanding the X86 vs. ARM Boot Process',
    ]
  },
  {
    title: 'Module 2: Deep Dive: Boot Process for NXP, TI, Microchip',
    isHandsOn: true,
    topics: [
      'Boot Process for NXP IMX9',
      'Boot Process for NXP IMX6',
      'Boot Process for TI Am335x',
      'Boot Process for Microchip SAMA5D27',
    ]
  },
  {
    title: 'Module 3: Development Environment & Toolchain',
    isHandsOn: true,
    topics: [
      'Host PC Setup for Embedded Linux Development',
      'ARM Cross Toolchain and its Components',
      'Cross-compiling a "Hello World" application',
      'Deploying and running applications on the target hardware',
    ]
  },
  {
    title: 'Module 4: Flash Prebuilt Images on Hardware',
    isHandsOn: true,
    topics: [
      'Hardware Introduction',
      'Download Prebuild images',
      'Make SDCard boot partitions',
      'Explore .wic files',
      'SDBoot Boot setup',
      'NAND Boot setup',
      'U-Boot env setup',
    ]
  },
  {
    title: 'Module 5: U-Boot Core Concepts',
    isHandsOn: true,
    topics: [
      'Introduction to Bootloaders and their role',
      'U-Boot Source Directory Architecture & Configuration',
      'U-Boot Source Code Flow - from power-on to kernel boot',
      'Flashing Bootloader on Custom ARM Hardware',
      'U-Boot Header and environment setup & commands',
    ]
  },
  {
    title: 'Module 6: Customizing U-Boot for New Hardware',
    isHandsOn: true,
    topics: [
      'Patching Bootloader for bug fixes and features',
      'Modifying U-Boot features using menuconfig',
      'Adding a New Custom Command in U-Boot',
      'Creating a New `defconfig` for a custom machine',
      'Developing a Board Support Package (BSP) file for new hardware',
    ]
  },
  {
    title: 'Module 7: Linux Kernel Fundamentals',
    isHandsOn: true,
    topics: [
      'Kernel architecture and key subsystems',
      'Configuring and building the kernel (defconfig, menuconfig)',
      'Booting the kernel on the target hardware',
      'Debugging kernel with serial console',
    ]
  },
  {
    title: 'Module 8: Device Trees & Drivers',
    isHandsOn: true,
    topics: [
      'Device Tree syntax and overlays',
      'Configuring Device Trees for custom hardware peripherals',
      'Writing and enabling simple platform device drivers',
      'Kernel module development and debugging',
    ]
  },
  {
    title: 'Module 9: Apps development with build systems',
    isHandsOn: true,
    topics: [
      'Simple dynamic library development',
      'Makefiles examples',
      'CMakefiles examples',
      'Autotools examples',
    ]
  },
  {
    title: 'Module 10: Introduction to the Yocto Project',
    isHandsOn: true,
    topics: [
      'Why Yocto project required?',
      'Yocto project Directory structure',
      'PC setup for Yocto build system',
      'Core concepts: Layers, Recipes, Classes, and Configurations',
    ]
  },
  {
    title: 'Module 11: Bitbake',
    isHandsOn: true,
    topics: [
      'Understanding the BitBake build engine',
      'Bitbake commands usage',
      'What happens when you run `bitbake <packagename>`',
      'Building a `core-image-minimal`',
      'Exploring the build output directory structure',
    ]
  },
  {
    title: 'Module 12: Writing recipes (bb file)',
    isHandsOn: true,
    topics: [
      'Create new metalayer',
      'Write new recipe for C example',
      'Write new recipe for C++ example',
      'Write new recipe for dynamic library',
      'Write new recipe for Makefile',
      'Write new recipe for CMakefiles',
      'Write new recipe for Autotools',
      'Modifying existing recipes with `.bbappend` files',
    ]
  },
  {
    title: 'Module 13: Advanced Recipes',
    isHandsOn: true,
    topics: [
      'Upgrade recipes to latest',
      'Include and require files',
      'Introduction to bbclass files',
      'Inherit concepts',
      'Virtual concepts',
    ]
  },
  {
    title: 'Module 14: Yocto rootfs Image',
    isHandsOn: true,
    topics: [
      'Creating a custom software meta layer',
      'Add packages to rootfs in conf files',
      'Modify existing rootfs',
      'Create New rootfs',
      'Customizing the image with `IMAGE_FEATURES`',
    ]
  },
  {
    title: 'Module 15: Creating a Machine Custom BSP Layer',
    isHandsOn: true,
    topics: [
      'Explore Machine conf files',
      'Modify existing machine conf',
      'Board Support Package (BSP) layer structure',
      'Integrating your custom U-Boot build',
      'Integrating your custom Linux kernel build',
      'Creating a New machine configuration file',
      'Customizing the MACHINE with `MACHINE_FEATURES`',
      'Creating a new distro configuration file',
      'Customizing the image with `DISTRO_FEATURES`',
    ]
  },
  {
    title: 'Module 16: Application Development & Final Project',
    isHandsOn: true,
    topics: [
      'Introduction to Devtools',
      'Generating and using the Application Development SDK',
      'Cross-compiling and debugging user-space applications',
      'Final Project: A complete BSP build for your hardware',
    ]
  }
];

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark relative inline-block">
      {title}
      <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-full"></span>
    </h2>
    <p className="mt-6 text-lg text-light-text">{subtitle}</p>
  </div>
);

const TimelineItem: React.FC<{ module: { title: string; isHandsOn: boolean; topics: string[] }; index: number; isOpen: boolean; onClick: () => void; }> = ({ module, index, isOpen, onClick }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-5');
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

  return (
    <div ref={itemRef} className="relative pl-12 pb-8 opacity-0 translate-y-5 transition-all duration-500" style={{ transitionDelay: `${index * 100}ms` }}>
      {/* Timeline Line */}
      <div className="absolute left-[18px] top-4 bottom-0 w-0.5 bg-secondary"></div>
      
      {/* Timeline Marker */}
      <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
        {index + 1}
      </div>
      
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <button
            onClick={onClick}
            className="w-full p-6 text-left flex justify-between items-center gap-4"
        >
            <h3 className="font-display text-xl font-semibold text-primary">{module.title}</h3>
            <ChevronDownIcon className={`w-6 h-6 text-secondary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <div className={`grid transition-[grid-template-rows] duration-250 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
                <div className={`px-6 pb-6 transition-opacity delay-100 duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {module.isHandsOn && (
                      <div className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-semibold py-1 px-3 rounded-full mb-4">
                        <HandRaisedIcon className="w-4 h-4" />
                        <span>Hands-on</span>
                      </div>
                    )}
                    
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-secondary font-bold mr-2">▸</span>
                          <span className="text-light-text">{topic}</span>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Syllabus: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  
  return (
    <section id="syllabus" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Training Syllabus" subtitle="A comprehensive, hands-on curriculum for BSP development" />
        
        <div className="max-w-3xl mx-auto">
          {syllabusData.map((module, index) => (
            <TimelineItem 
                key={index} 
                module={module} 
                index={index} 
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const HandRaisedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M10.5 2.25h3M4.166 10.5l-1.591-1.591M12 18.75V21.75m-5.834.166 1.591-1.591M3.75 10.5H6m4.5 11.25h3" /></svg>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
);

export default Syllabus;
