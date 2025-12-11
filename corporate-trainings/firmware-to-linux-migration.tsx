
import React, { useState, useEffect, useRef } from 'react';
import TrainingsContact from '../trainings-contact';
import './firmware-to-linux-migration.css';

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

const BuildingOfficeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m-1.5 3h1.5m9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
);

const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
);

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.99-.554-1.348l-5.12-5.12a1.125 1.125 0 0 0-1.59 0L9 13.5m0 0h-2.25a2.25 2.25 0 0 1-2.25-2.25V6.75" /></svg>
);

const PaperAirplaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
);

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor">
      <path
        d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm7.4 20.8a7.8 7.8 0 0 1-2.9 1.4 7.6 7.6 0 0 1-1.3.1 3.5 3.5 0 0 1-1.2-.2c-.4-.1-.8-.3-1.2-.5a12.6 12.6 0 0 1-4.2-3.8c-1.2-1.6-1.9-3.2-2.1-4.5a3.8 3.8 0 0 1 .4-2.1c.3-.6.7-1.1 1.2-1.4a1.4 1.4 0 0 1 .6-.2c.2 0 .4 0 .6.1.3.1.5.3.7.5l.4.5c.2.2.3.4.4.6.1.2.1.4.1.6a.9.9 0 0 1-.2.7l-1 1.7a1.5 1.5 0 0 0-.2 1.3c.2.5.5 1 .9 1.5.5.6 1 1.1 1.7 1.5.5.3.9.4 1.3.3.4-.1.7-.3.9-.5l.4-.5c.2-.2.5-.4.8-.4s.5.1.7.3l1.5 1.4c.2.2.4.5.5.8.1.3.1.6 0 .9a3 3 0 0 1-.6 1z"
      />
    </svg>
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

const DocumentTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
  </svg>
);

const ChatBubbleLeftRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
);

// --- Data ---

const syllabusData = [
    { 
        title: 'ARM Architecture', 
        isHandsOn: false, 
        duration: 'Module 1', 
        description: 'Comprehensive overview of ARM Architecture versions and the ARM family of processors.' 
    },
    { 
        title: 'Embedded OS Fundamentals', 
        isHandsOn: false, 
        duration: 'Module 2', 
        description: 'Understand the fundamental architectural differences and use-cases for Baremetal, RTOS, and Embedded Linux.' 
    },
    { 
        title: 'Toolchains', 
        isHandsOn: true, 
        duration: 'Module 3', 
        description: 'Master the art of setting up ARM toolchains and performing cross-compilations for target hardware.' 
    },
    { 
        title: 'Hardware Setup', 
        isHandsOn: true, 
        duration: 'Module 4', 
        description: 'Hands-on experience with basic Embedded Linux setup, including flashing pre-built images to the i.MX6 board.' 
    },
    { 
        title: 'U-Boot Development', 
        isHandsOn: true, 
        duration: 'Module 5', 
        description: 'Deep dive into U-Boot bootloader development: understanding directory structure, configurations, Makefiles, board files, and commands.' 
    },
    { 
        title: 'Linux Kernel Development', 
        isHandsOn: true, 
        duration: 'Module 6', 
        description: 'Explore the Linux Kernel source code, understand directory structure, Device Tree (DTS) configuration, and Kernel Image types.' 
    },
    { 
        title: 'Yocto Project Development', 
        isHandsOn: true, 
        duration: 'Module 7', 
        description: 'Learn to build custom Linux distributions using Yocto Project, covering Bitbake, meta-layers, recipes, configuration files, and devtool.' 
    },
    { 
        title: 'Application Development', 
        isHandsOn: true, 
        duration: 'Module 8', 
        description: 'Develop user-space applications to interact with hardware, focusing on GPIO control using sysfs and device nodes.' 
    },
    { 
        title: 'Capstone Project', 
        isHandsOn: true, 
        duration: 'Final Project', 
        description: 'Apply your skills in a final capstone project: building a complete Industrial or IoT Gateway on the i.MX6ULL platform.' 
    }
];

const courseData = {
    id: 'firmware-to-linux',
    title: 'Transform Firmware to Embedded Linux developer',
    description: 'A specialized career transition program for firmware engineers. Master Embedded Linux, Device Drivers, and Yocto with guaranteed job assistance support.',
    tags: ['3 Months', 'Online/Weekend', 'Job Assistance'],
    icon: RocketLaunchIcon,
    hero: {
        title: 'Firmware to Embedded Linux Job Assistance Program',
        subtitle: 'Transition from MCU/RTOS to High-Demand Embedded Linux Roles. Comprehensive Training + Career Support.',
        infoCards: [
            { icon: <CalendarDaysIcon className="w-8 h-8"/>, title: "Duration", text: "3 Months" },
            { icon: <BuildingOffice2Icon className="w-8 h-8"/>, title: "Format", text: "Weekend Online" },
            { icon: <AcademicCapIcon className="w-8 h-8"/>, title: "Support", text: "Job Assistance" },
        ]
    },
    about: {
        description: [
            'Are you a firmware engineer working with Microcontrollers (STM32, PIC, AVR) or RTOS and feeling stuck? The industry is moving towards Embedded Linux for Edge AI, IoT gateways, and smart devices. This program is your bridge to these high-paying roles.',
            'Unlike standard courses, this is a "Job Assistance Program". We don\'t just teach you technical skills; we prepare you for the job market. From deep-dive kernel internals to resume building and mock interviews, we walk with you until you land your next role.'
        ],
        highlights: [
            { icon: <MicrochipIcon className="w-8 h-8 f2l-text-secondary" />, title: 'MCU to MPU', description: 'Bridge the gap between bare-metal firmware and complex OS-based systems.' },
            { icon: <CodeBracketIcon className="w-8 h-8 f2l-text-secondary" />, title: 'Full Stack Linux', description: 'Master everything from Bootloaders and Kernels to User Space apps.' },
            { icon: <CubeIcon className="w-8 h-8 f2l-text-secondary" />, title: 'Yocto & Drivers', description: 'Gain niche skills that are in high demand by top OEMs and Tier-1 companies.' },
            { icon: <UserGroupIcon className="w-8 h-8 f2l-text-secondary" />, title: 'Career Support', description: 'Dedicated placement team, resume fixes, and interview preparation.' },
        ]
    },
    syllabus: syllabusData
};

// --- Common Components ---

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="f2l-section-header">
      <h2 className={`f2l-title ${isWhiteText ? 'white' : 'dark'}`}>
        {title}
        <span className="f2l-title-underline"></span>
      </h2>
      <p className={`f2l-subtitle ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'white' : 'dark')}`}>{subtitle}</p>
    </div>
);

const MAIN_HEADER_HEIGHT = 0; // Adjust based on your main layout

const FirmwareToLinuxMigration = () => {
    const course = courseData;

    const pageNavLinks = [
        { href: '#about', label: 'About' },
        { href: '#program-details', label: 'Details' },
        { href: '#syllabus', label: 'Syllabus' },
        { href: '#job-assistance', label: 'Job Assistance' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#testimonials', label: 'Success Stories' },
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
            <div ref={navRef} className={`f2l-nav-wrapper ${isSticky ? 'sticky' : ''}`}>
                <div className="f2l-container">
                    <div className="f2l-nav-inner">
                        <span className="f2l-nav-title md:hidden">Program Sections</span>
                        <div className="f2l-nav-links-container md:block hidden">
                             <nav className="f2l-nav-links">
                                {pageNavLinks.map((link) => (
                                    <a 
                                        key={link.href} 
                                        href={link.href}
                                        onClick={handleNavClick}
                                        className={`f2l-nav-link ${activeLink === link.href ? 'active' : ''}`}>
                                        {link.label}
                                    </a>
                                ))}
                                <a href="#contact" onClick={handleNavClick} className="f2l-nav-cta">
                                    Apply Now
                                </a>
                            </nav>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="f2l-mobile-menu-btn">
                                <span className="sr-only">Open menu</span>
                                <div className="f2l-hamburger">
                                    <span className={`f2l-hamburger-line ${isMenuOpen ? 'rotate-down' : ''}`}></span>
                                    <span className={`f2l-hamburger-line ${isMenuOpen ? 'fade-out' : ''}`}></span>
                                    <span className={`f2l-hamburger-line ${isMenuOpen ? 'rotate-up' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`f2l-nav-mobile-container ${isMenuOpen ? 'open' : 'closed'} md:hidden`}>
                    <div className="f2l-container">
                         <nav className="f2l-nav-links">
                            {pageNavLinks.map((link) => (
                                <a 
                                    key={link.href} 
                                    href={link.href}
                                    onClick={handleNavClick}
                                    className={`f2l-nav-link ${activeLink === link.href ? 'active' : ''}`}>
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact" onClick={handleNavClick} className="f2l-nav-cta">
                                Apply Now
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            {isSticky && <div style={{ height: navRef.current?.offsetHeight }} />}
            </>
        );
    };

    const Hero: React.FC = () => {
        const InfoCard: React.FC<{icon: React.ReactNode, title: string, text: string}> = ({ icon, title, text }) => (
            <div className="f2l-info-card group">
                <div className="f2l-icon-wrapper">
                    {icon}
                </div>
                <div>
                    <h3 className="f2l-card-title">{title}</h3>
                    <p className="f2l-card-text">{text}</p>
                </div>
            </div>
        );
        
        const bgImage = "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21"; 
        const bgSrcSet = `${bgImage}?q=80&w=640&auto=format&fit=crop 640w, ${bgImage}?q=80&w=1024&auto=format&fit=crop 1024w, ${bgImage}?q=80&w=2070&auto=format&fit=crop 2070w`;
        
        return (
            <section id="home" className="f2l-hero">
                <div className="f2l-hero-overlay"></div>
                <img 
                    src={`${bgImage}?q=80&w=2070&auto=format&fit=crop`} 
                    srcSet={bgSrcSet}
                    sizes="100vw"
                    alt="Background" 
                    className="f2l-hero-bg"
                    loading="eager"
                />
                <div className="f2l-hero-content">
                    <div className="f2l-hero-inner">
                         <div className="f2l-hero-badge">
                            100% Job Assistance Program
                        </div>
                        <h1 className="f2l-hero-title">
                            {course.hero.title}
                        </h1>
                        <p className="f2l-hero-subtitle">
                            {course.hero.subtitle}
                        </p>
                        <div className="f2l-cta-container">
                            <a href="#contact" className="f2l-cta-btn">
                                Download Brochure
                            </a>
                        </div>
                    </div>
                    
                    <div className="f2l-hero-cards">
                        {course.hero.infoCards.map(card => <InfoCard key={card.title} {...card} />)}
                    </div>
                </div>
            </section>
        );
    };

    const About: React.FC = () => {
        const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
            <div className="f2l-highlight-card">
                <div className="mb-2">{icon}</div>
                <h4 className="f2l-highlight-title">{title}</h4>
                <p className="f2l-highlight-desc">{description}</p>
            </div>
        );
        return (
            <section id="about" className="f2l-section f2l-bg-white">
                <div className="f2l-container">
                    <SectionTitle title="Why Switch to Linux?" subtitle={course.title} />
                    <div className="f2l-grid-2">
                        <div className="f2l-text-block">
                            {course.about.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="f2l-highlights-grid">
                            {course.about.highlights.map((item, index) => <HighlightCard key={index} {...item} />)}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ProgramDetails: React.FC = () => {
        return (
            <section id="program-details" className="f2l-section f2l-bg-light">
                <div className="f2l-container">
                     <div className="f2l-centered-header">
                        <h2 className="f2l-section-title">Program Overview</h2>
                     </div>
                    <div className="f2l-grid-2">
                        {/* Training Details */}
                        <div className="f2l-details-card">
                            <div className="f2l-details-icon-bg">
                                <AcademicCapIcon className="f2l-icon-xl" />
                            </div>
                            <h3 className="f2l-details-title">
                                <CalendarDaysIcon className="f2l-icon-md f2l-text-secondary" />
                                Training Details
                            </h3>
                            <ul className="f2l-details-list">
                                <li className="f2l-details-list-item">
                                    <div className="f2l-details-bullet"><ClockIcon className="f2l-icon-sm" /></div>
                                    <div>
                                        <span className="f2l-details-label">Course Duration</span>
                                        <span className="f2l-details-value">3 Months</span>
                                    </div>
                                </li>
                                <li className="f2l-details-list-item">
                                    <div className="f2l-details-bullet"><CalendarDaysIcon className="f2l-icon-sm" /></div>
                                    <div>
                                        <span className="f2l-details-label">Schedule</span>
                                        <span className="f2l-details-value">Saturday & Sundays</span>
                                    </div>
                                </li>
                                <li className="f2l-details-list-item">
                                    <div className="f2l-details-bullet"><ClockIcon className="f2l-icon-sm" /></div>
                                    <div>
                                        <span className="f2l-details-label">Class Duration</span>
                                        <span className="f2l-details-value">2-4 hours</span>
                                    </div>
                                </li>
                                <li className="f2l-details-list-item">
                                    <div className="f2l-details-bullet"><ChatBubbleLeftRightIcon className="f2l-icon-sm" /></div>
                                    <div>
                                        <span className="f2l-details-label">Support</span>
                                        <span className="f2l-details-value">Weekday support for assignments</span>
                                    </div>
                                </li>
                                <li className="f2l-details-list-item">
                                    <div className="f2l-details-bullet"><UserGroupIcon className="f2l-icon-sm" /></div>
                                    <div>
                                        <span className="f2l-details-label">Batch Size</span>
                                        <span className="f2l-details-value">Only 5 people/batch</span>
                                    </div>
                                </li>
                                <li className="f2l-details-list-item">
                                    <div className="f2l-details-bullet"><BriefcaseIcon className="f2l-icon-sm" /></div>
                                    <div>
                                        <span className="f2l-details-label">Mentorship</span>
                                        <span className="f2l-details-value">Trained by working developers</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Pre-requisites */}
                        <div className="f2l-details-card accent-border">
                             <div className="f2l-details-icon-bg">
                                <CodeBracketIcon className="f2l-icon-xl" />
                            </div>
                            <h3 className="f2l-details-title">
                                <CheckCircleIcon className="f2l-icon-md f2l-text-accent" />
                                Pre-requisites
                            </h3>
                            <ul className="f2l-details-list">
                                <li className="f2l-prereq-item">
                                    <div className="f2l-dot"></div>
                                    <span className="f2l-prereq-text">Knowledge on C</span>
                                </li>
                                <li className="f2l-prereq-item">
                                    <div className="f2l-dot"></div>
                                    <span className="f2l-prereq-text">Knowledge on micro controllers</span>
                                </li>
                                <li className="f2l-prereq-item">
                                    <div className="f2l-dot"></div>
                                    <span className="f2l-prereq-text">Ubuntu PC (8GB RAM, 200GB HDD)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    
    const Syllabus: React.FC = () => {
        return (
            <section id="syllabus" className="f2l-section f2l-bg-white">
                <div className="f2l-container">
                    <SectionTitle title="Job-Oriented Curriculum" subtitle="Designed by industry experts to get you hired" />
                    <div className="f2l-syllabus-grid">
                        {course.syllabus.map((module, index) => (
                            <div key={index} className="f2l-syllabus-card group">
                                <div className="f2l-syllabus-header">
                                     <span className="f2l-syllabus-badge">
                                        {module.duration}
                                     </span>
                                     {module.isHandsOn && (
                                        <span className="f2l-syllabus-handson">
                                            <HandRaisedIcon className="f2l-icon-sm" /> Hands-on
                                        </span>
                                     )}
                                </div>
                                <h3 className="f2l-syllabus-title">
                                    {module.title}
                                </h3>
                                <p className="f2l-syllabus-desc">
                                    {module.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const JobAssistance: React.FC = () => {
        const features = [
            {
                title: "Resume Building",
                description: "Craft a resume that stands out. We optimize your CV with the right keywords (Yocto, Device Drivers, Kernel Internals) to beat ATS scanners and catch recruiters' eyes.",
                icon: <DocumentTextIcon className="f2l-icon-lg text-white" />,
                bgClass: "f2l-icon-blue"
            },
            {
                title: "Mock Interviews",
                description: "Face the interview before the real one. Technical rounds focusing on C, OS concepts, and Linux internals, plus HR behavioral prep to boost your confidence.",
                icon: <ChatBubbleLeftRightIcon className="f2l-icon-lg text-white" />,
                bgClass: "f2l-icon-green"
            },
            {
                title: "Placement Support",
                description: "Direct referrals to hiring partners, LinkedIn profile optimization to attract recruiters, and exclusive access to unlisted job openings in the embedded domain.",
                icon: <BriefcaseIcon className="f2l-icon-lg text-white" />,
                bgClass: "f2l-icon-purple"
            }
        ];
    
        return (
            <section id="job-assistance" className="f2l-section f2l-bg-light">
                <div className="f2l-container">
                    <SectionTitle title="Comprehensive Job Assistance" subtitle="We don't just teach; we help you get hired" />
                    <div className="f2l-job-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="f2l-job-card">
                                <div className={`f2l-job-icon-box ${feature.bgClass}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="f2l-job-title">{feature.title}</h3>
                                <p className="f2l-job-desc">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const Pricing: React.FC = () => {
        const pricingData = [
            { tier: 'Job Assistance Program', price: 'Contact for Fee', duration: '3 Months', features: ['3 Months Intense Training', 'Weekly Assignments & Reviews', 'Capstone Project on Real Hardware', 'Resume Building & Optimization', 'Mock Interviews by Experts', 'Guaranteed Interview Calls'], highlight: true }
        ];
        const PricingCard: React.FC<{ plan: typeof pricingData[0] }> = ({ plan }) => (
            <div className={`f2l-pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                <h3 className="f2l-pricing-title">{plan.tier}</h3>
                <div className="f2l-pricing-amount-box"><div className="f2l-price-tag">{plan.duration}</div><p className="f2l-pricing-amount">{plan.price}</p></div>
                <ul className="f2l-pricing-features">{plan.features.map((feature, index) => (<li key={index} className="f2l-pricing-feature-item"><CheckCircleIcon className="f2l-icon-check" /><span className="f2l-pricing-text">{feature}</span></li>))}</ul>
                <div className="f2l-pricing-cta-mt"><a href="#contact" className="f2l-cta-btn w-full">Start Your Transition</a></div>
            </div>
        );
        return (
            <section id="pricing" className="f2l-section f2l-bg-blue">
                <div className="f2l-container">
                    <SectionTitle title="Invest in Your Career" subtitle="A program that pays for itself with your first salary hike" />
                    <div className="f2l-pricing-grid">{pricingData.map((plan, index) => (<PricingCard key={index} plan={plan} />))}</div>
                </div>
            </section>
        );
    };

    const Testimonials: React.FC = () => {
        const testimonialsData = [
            {
                name: "Karthik R.",
                role: "Embedded Linux Developer",
                prevRole: "Firmware Developer (4 Years)",
                quote: "I was working as a Firmware Developer for 4 years and wanted to switch domains. After learning this course, I easily migrated to an Embedded Linux job. The practical labs on real hardware made the difference."
            },
            {
                name: "Sneha P.",
                role: "BSP Engineer @ EV Startup",
                prevRole: "MCU Firmware Engineer",
                quote: "Coming from a microcontroller background, Linux felt complex. This program simplified everything. I successfully transitioned from a Firmware role to a high-paying Embedded Linux position within 3 months."
            },
             {
                name: "Arjun V.",
                role: "Device Driver Engineer",
                prevRole: "Embedded Software Engineer",
                quote: "The best job assistance program for firmware engineers. The mock interviews and resume building sessions were crucial. I migrated from bare-metal coding to writing Linux Device Drivers effortlessly."
            }
        ];

        return (
            <section id="testimonials" className="f2l-section f2l-bg-white">
                <div className="f2l-container">
                    <SectionTitle title="Success Stories" subtitle="Hear from engineers who transformed their careers" />
                    <div className="f2l-grid-3">
                        {testimonialsData.map((t, i) => (
                            <div key={i} className="f2l-testimonial-card">
                                <div className="f2l-quote-icon">"</div>
                                <div className="f2l-stars">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
                                </div>
                                <p className="f2l-testimonial-text">"{t.quote}"</p>
                                <div className="f2l-testimonial-author">
                                     <div className="f2l-author-avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="f2l-author-name">{t.name}</h4>
                                        <p className="f2l-author-role">{t.role}</p>
                                        <p className="f2l-author-company">Ex: {t.prevRole}</p>
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
            { question: 'I am a fresher, can I join?', answer: 'This program is primarily designed for working professionals with at least 1 year of experience in Firmware/Embedded systems. However, exceptional freshers with strong C basics may be considered after a screening test.' },
            { question: 'How does the Job Assistance work?', answer: 'After completing the training and capstone project, our placement team helps you with resume modification. We then conduct mock interviews to identify gaps. Finally, we refer your profile to our network of hiring partners and schedule interviews until you get placed.' },
            { question: 'Do I need to quit my current job?', answer: 'No. The classes are scheduled on weekends and evenings to accommodate working professionals. You can upskill while continuing your current job.' },
            { question: 'What is the success rate?', answer: 'Our "Firmware to Embedded Linux" migration program has a high success rate because the demand for Embedded Linux engineers far exceeds the supply. Most candidates see a 40-100% salary hike upon transition.' },
        ];
        const [openIndex, setOpenIndex] = useState<number | null>(0);
        const handleClick = (index: number) => { setOpenIndex(openIndex === index ? null : index); };
        const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
            <div className="f2l-faq-item">
                <button onClick={onClick} className="f2l-faq-btn">
                    <span className="f2l-faq-question">{item.question}</span>
                    <PlusIcon className={`f2l-icon-plus ${isOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`f2l-faq-accordion ${isOpen ? 'open' : 'closed'}`}>
                    <div className="f2l-faq-content-wrapper">
                        <div className="f2l-faq-inner">{item.answer}</div>
                    </div>
                </div>
            </div>
        );
        return (
            <section id="faq" className="f2l-section f2l-bg-light">
                <div className="f2l-container">
                    <SectionTitle title="Common Questions" subtitle="Clarify your doubts before joining" />
                    <div className="f2l-faq-stack">{faqData.map((item, index) => (<FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
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
            <JobAssistance />
            <Pricing />
            <Testimonials /> 
            <FAQ />
            <TrainingsContact title="Apply for Job Assistance" subtitle="Ready to switch from Firmware to Embedded Linux? Reach out to us." />
        </>
    );
};

export default FirmwareToLinuxMigration;
