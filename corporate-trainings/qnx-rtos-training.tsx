
import React, { useState, useEffect, useRef } from 'react';
import './qnx-rtos-training.css';

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
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m-1.5 3h1.5m-1.5 3h1.5m9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
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

const ChatBubbleLeftRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
);

// --- Data ---
const qnxSyllabusData = [
    { title: 'Module 1: Intro to QNX Neutrino RTOS', isHandsOn: true, duration: '0.5 Days', topics: [ 'QNX Architecture Overview (Microkernel vs Monolithic)', 'HA (High Availability) principles', 'QNX Momentics IDE setup', 'Building and deploying a "Hello World" QNX project', 'Connecting to Target (Qconn, SSH)' ] },
    { title: 'Module 2: Process Management', isHandsOn: true, duration: '0.5 Days', topics: [ 'Process creation and termination (spawn, fork, exec)', 'Thread fundamentals (pthread creation, attributes)', 'Scheduling policies (FIFO, RR, Sporadic)', 'Thread Priorities & Priority Inversion' ] },
    { title: 'Module 3: Inter-Process Communication (IPC)', isHandsOn: true, duration: '0.5 Days', topics: [ 'Message Passing (MsgSend, MsgReceive, MsgReply)', 'Pulses vs Messages', 'Shared Memory', 'Channels & Connections' ] },
    { title: 'Module 4: Synchronization', isHandsOn: true, duration: '0.5 Days', topics: [ 'Mutexes & Condition Variables', 'Semaphores', 'Barriers & Spinlocks', 'Atomic Operations', 'Priority Inheritance with Mutexes' ] },
    { title: 'Module 5: Resource Managers (Drivers)', isHandsOn: true, duration: '1 Day', topics: [ 'Understanding Resource Manager (ResMgr) Architecture', 'Pathname space management', 'Handling standard I/O messages (open, read, write, devctl)', 'Writing a custom Character Device Driver' ] },
    { title: 'Module 6: Interrupts & Timing', isHandsOn: true, duration: '0.5 Days', topics: [ 'Interrupt Handling (InterruptAttach, InterruptWait)', 'Interrupt Service Routines (ISR) limitations', 'Clocks, Timers, and Timeouts', 'Using hardware timers' ] },
    { title: 'Module 7: QNX System Page & Buildfile', isHandsOn: true, duration: '0.5 Days', topics: [ 'Understanding the System Page', 'Customizing the IFS (Image Filesystem)', 'Writing a Buildfile (*.build) for custom images', 'Startup programs & boot scripts' ] },
    { title: 'Module 8: Adaptive Partitioning & Safety', isHandsOn: true, duration: '0.5 Days', topics: [ 'Adaptive Partitioning Scheduler (APS)', 'Memory Partitioning', 'High Availability Manager (HAM)', 'Watchdogs & System Integrity' ] }
];

const courseData = {
    id: 'qnx-rtos',
    title: 'QNX Neutrino RTOS Development',
    menuTitle: 'QNX RTOS Training',
    description: 'Master the industry-standard RTOS for Automotive and Critical Systems. Learn Microkernel architecture, IPC, Resource Managers, and Safety.',
    tags: ['5 Days', 'Automotive Focus', 'Safety Critical'],
    icon: CpuChipIcon,
    hero: {
        title: 'Master QNX Neutrino RTOS for Mission-Critical Systems',
        subtitle: 'Comprehensive training on Microkernel Architecture, IPC, and Driver Development for Automotive and Industrial applications.',
        infoCards: [
            { icon: <CalendarDaysIcon className="w-8 h-8"/>, title: "Duration", text: "5 Days / 40 Hours" },
            { icon: <BuildingOffice2Icon className="w-8 h-8"/>, title: "Format", text: "Online / On-Site" },
            { icon: <ShieldCheckIcon className="w-8 h-8"/>, title: "Focus", text: "Safety & Real-Time" },
        ]
    },
    about: {
        description: [
            'QNX Neutrino RTOS is the gold standard for mission-critical systems, powering over 235 million vehicles worldwide. From ADAS and Digital Cockpits to Medical Devices and Industrial Automation, QNX is chosen for its reliability and microkernel architecture.',
            'This course provides a deep dive into the QNX ecosystem. You will move beyond basic POSIX concepts to master QNX-specific Inter-Process Communication (IPC) via message passing, write custom Resource Managers (Drivers), and understand how to build safe, high-availability systems compliant with ISO 26262.'
        ],
        highlights: [
            { icon: <CpuChipIcon className="w-8 h-8 qnx-text-secondary" />, title: 'Microkernel Arch', description: 'Understand the robust modular architecture that defines QNX reliability.' },
            { icon: <ChatBubbleLeftRightIcon className="w-8 h-8 qnx-text-secondary" />, title: 'Native IPC', description: 'Master MsgSend/MsgReceive - the backbone of QNX communication.' },
            { icon: <Cog6ToothIcon className="w-8 h-8 qnx-text-secondary" />, title: 'Resource Managers', description: 'Learn to write drivers that look and feel like standard files.' },
            { icon: <ShieldCheckIcon className="w-8 h-8 qnx-text-secondary" />, title: 'Safety & APS', description: 'Implement Adaptive Partitioning for guaranteed CPU time.' },
        ]
    },
    syllabus: qnxSyllabusData
};


// --- Common Components ---

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="qnx-section-header">
      <h2 className={`qnx-title ${isWhiteText ? 'white' : 'dark'}`}>
        {title}
        <span className="qnx-title-underline"></span>
      </h2>
      <p className={`qnx-subtitle ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'white' : 'dark')}`}>{subtitle}</p>
    </div>
);


const MAIN_HEADER_HEIGHT = 80;

const QNXRTOSTraining = () => {
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
            <div ref={navRef} className={`qnx-nav-wrapper ${isSticky ? 'sticky' : ''}`}>
                <div className="qnx-container">
                    <div className="qnx-nav-content">
                        <span className="qnx-nav-title md:hidden">Course Sections</span>
                        <div className="qnx-nav-links-container">
                            <nav className={`qnx-nav-links ${isMenuOpen ? 'open' : ''}`}>
                                {pageNavLinks.map((link) => (
                                    <a 
                                        key={link.href} 
                                        href={link.href}
                                        onClick={handleNavClick}
                                        className={`qnx-nav-link ${activeLink === link.href ? 'active' : ''}`}>
                                        {link.label}
                                    </a>
                                ))}
                                <a href="#contact" onClick={handleNavClick} className="qnx-nav-cta">
                                    Register
                                </a>
                            </nav>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="qnx-mobile-menu-btn">
                                <span className="sr-only">Open menu</span>
                                <div className="qnx-hamburger">
                                    <span className={`qnx-hamburger-line ${isMenuOpen ? 'rotate-down' : ''}`}></span>
                                    <span className={`qnx-hamburger-line ${isMenuOpen ? 'fade-out' : ''}`}></span>
                                    <span className={`qnx-hamburger-line ${isMenuOpen ? 'rotate-up' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isSticky && <div style={{ height: navRef.current?.offsetHeight }} />}
            </>
        );
    };

    const Hero: React.FC = () => {
        const InfoCard: React.FC<{icon: React.ReactNode, title: string, text: string, tooltip?: string}> = ({ icon, title, text, tooltip }) => (
            <div className={`qnx-info-card group ${tooltip ? 'cursor-help' : ''}`}>
                <div className="qnx-icon-wrapper">
                    {icon}
                </div>
                <div>
                    <h3 className="qnx-card-title">{title}</h3>
                    <p className="qnx-card-text">{text}</p>
                </div>
                {tooltip && (
                    <div className="qnx-tooltip">
                        {tooltip}
                        <div className="qnx-tooltip-arrow"></div>
                    </div>
                )}
            </div>
        );
        
        const bgImage = "https://images.unsplash.com/photo-1549106765-3d312a94155b"; // Automotive / dashboard image
        const bgSrcSet = `${bgImage}?q=80&w=640&auto=format&fit=crop 640w, ${bgImage}?q=80&w=1024&auto=format&fit=crop 1024w, ${bgImage}?q=80&w=2070&auto=format&fit=crop 2070w`;

        return (
            <section id="home" className="qnx-hero">
                <div className="qnx-hero-overlay"></div>
                <img 
                    src={`${bgImage}?q=80&w=2070&auto=format&fit=crop`} 
                    srcSet={bgSrcSet}
                    sizes="100vw"
                    alt="Background" 
                    className="qnx-hero-bg"
                    loading="eager"
                />
                <div className="qnx-hero-content">
                    <h1 className="qnx-hero-title">
                        {course.hero.title}
                    </h1>
                    <p className="qnx-hero-subtitle">
                        {course.hero.subtitle}
                    </p>
                    <div className="qnx-cta-container">
                        <a href="#contact" className="qnx-cta-btn">
                            Request a Corporate Quote
                        </a>
                    </div>
                    <div className="qnx-hero-cards">
                        {course.hero.infoCards.map(card => <InfoCard key={card.title} {...card} />)}
                    </div>
                </div>
            </section>
        );
    };

    const About: React.FC = () => {
        const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
            <div className="qnx-highlight-card">
                <div className="mb-2">{icon}</div>
                <h4 className="qnx-highlight-title">{title}</h4>
                <p className="qnx-highlight-desc">{description}</p>
            </div>
        );
        return (
            <section id="about" className="qnx-section qnx-bg-white">
                <div className="qnx-container">
                    <SectionTitle title="About the Training" subtitle={course.title} />
                    <div className="qnx-grid-2">
                        <div className="qnx-text-block">
                            {course.about.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="qnx-highlights-grid">
                            {course.about.highlights.map((item, index) => <HighlightCard key={index} {...item} />)}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ProgramDetails: React.FC = () => {
        return (
            <section id="program-details" className="qnx-section qnx-bg-gray">
                <div className="qnx-container">
                     <div className="qnx-centered-header">
                        <h2 className="qnx-section-title">Program Overview</h2>
                     </div>
                    <div className="qnx-grid-2">
                        {/* Training Details */}
                        <div className="qnx-details-card">
                            <div className="qnx-details-icon-bg">
                                <AcademicCapIcon className="qnx-icon-xl" />
                            </div>
                            <h3 className="qnx-details-title">
                                <CalendarDaysIcon className="qnx-icon-md qnx-text-secondary" />
                                Training Details
                            </h3>
                            <ul className="qnx-details-list">
                                <li className="qnx-details-list-item">
                                    <div className="qnx-details-bullet"><ClockIcon className="qnx-icon-sm" /></div>
                                    <div>
                                        <span className="qnx-details-label">Duration</span>
                                        <span className="qnx-details-value">5 Days / 40 Hours</span>
                                    </div>
                                </li>
                                <li className="qnx-details-list-item">
                                    <div className="qnx-details-bullet"><BuildingOffice2Icon className="qnx-icon-sm" /></div>
                                    <div>
                                        <span className="qnx-details-label">Format</span>
                                        <span className="qnx-details-value">On-Site or Online Live</span>
                                    </div>
                                </li>
                                <li className="qnx-details-list-item">
                                    <div className="qnx-details-bullet"><UserGroupIcon className="qnx-icon-sm" /></div>
                                    <div>
                                        <span className="qnx-details-label">Batch Size</span>
                                        <span className="qnx-details-value">Standard 5-10 Engineers</span>
                                    </div>
                                </li>
                                <li className="qnx-details-list-item">
                                    <div className="qnx-details-bullet"><CodeBracketIcon className="qnx-icon-sm" /></div>
                                    <div>
                                        <span className="qnx-details-label">Methodology</span>
                                        <span className="qnx-details-value">60% Hands-on, 40% Theory</span>
                                    </div>
                                </li>
                                <li className="qnx-details-list-item">
                                    <div className="qnx-details-bullet"><CpuChipIcon className="qnx-icon-sm" /></div>
                                    <div>
                                        <span className="qnx-details-label">Platform</span>
                                        <span className="qnx-details-value">QNX SDP 7.1 / 8.0</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Pre-requisites */}
                        <div className="qnx-details-card accent-border">
                             <div className="qnx-details-icon-bg">
                                <CodeBracketIcon className="qnx-icon-xl" />
                            </div>
                            <h3 className="qnx-details-title">
                                <CheckCircleIcon className="qnx-icon-md qnx-text-accent" />
                                Pre-requisites
                            </h3>
                            <ul className="qnx-details-list">
                                <li className="qnx-prereq-item">
                                    <div className="qnx-dot"></div>
                                    <span className="qnx-prereq-text">Strong C Programming</span>
                                </li>
                                <li className="qnx-prereq-item">
                                    <div className="qnx-dot"></div>
                                    <span className="qnx-prereq-text">Basic OS Concepts (Process/Thread)</span>
                                </li>
                                <li className="qnx-prereq-item">
                                    <div className="qnx-dot"></div>
                                    <span className="qnx-prereq-text">Linux/POSIX API familiarity</span>
                                </li>
                                <li className="qnx-prereq-item">
                                    <div className="qnx-dot"></div>
                                    <span className="qnx-prereq-text">Experience with Embedded targets</span>
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
            <div className="qnx-timeline-item">
                <div className="qnx-timeline-line"></div>
                <div className="qnx-timeline-marker">{index + 1}</div>
                <div className="qnx-syllabus-card">
                    <button onClick={onClick} className="qnx-syllabus-btn">
                        <h3 className="qnx-syllabus-title">{module.title}</h3>
                        <div className="qnx-syllabus-meta">
                            {module.duration && (<div className="qnx-badge-blue"><ClockIcon className="qnx-icon-sm" /><span>{module.duration}</span></div>)}
                            <ChevronDownIcon className={`qnx-chevron ${isOpen ? 'rotate' : ''}`} />
                        </div>
                    </button>
                    <div className={`qnx-accordion-grid ${isOpen ? 'open' : 'closed'}`}>
                        <div className="qnx-accordion-inner">
                            <div className={`qnx-accordion-content ${isOpen ? 'open' : 'closed'}`}>
                                {module.isHandsOn && (<div className="qnx-tags-container"><div className="qnx-badge-secondary"><HandRaisedIcon className="qnx-icon-sm" /><span>Hands-on</span></div></div>)}
                                <ul className="qnx-list">{module.topics.map((topic, i) => (<li key={i} className="qnx-list-item"><span className="qnx-list-bullet">▸</span><span className="qnx-list-text">{topic}</span></li>))}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <section id="syllabus" className="qnx-section qnx-bg-light">
                <div className="qnx-container">
                    <SectionTitle title="Training Syllabus" subtitle="Deep dive into QNX Internals" />
                    <div className="qnx-timeline-container">{course.syllabus.map((module, index) => (<TimelineItem key={index} module={module} index={index} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
                </div>
            </section>
        );
    };

    const Pricing: React.FC = () => {
        const pricingData = [
            { tier: 'Online Corporate Training', price: 'Contact for Quote', duration: 'Flexible Schedule', features: ['Complete Syllabus', 'Live, interactive online sessions', 'Remote labs via VPN', 'Led by QNX experts', 'Training materials & code samples', 'Post-training support'], highlight: false },
            { tier: 'On-Site Corporate Training', price: 'Contact for Quote', duration: 'Dedicated Schedule', features: ['Complete Syllabus', 'On-site training at your facility', 'Hands-on labs on your hardware', 'Led by QNX experts', 'Training materials & code samples', 'Dedicated post-training support'], highlight: true }
        ];
        const PricingCard: React.FC<{ plan: typeof pricingData[0] }> = ({ plan }) => (
            <div className={`qnx-pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                <h3 className="qnx-pricing-title">{plan.tier}</h3>
                <div className="qnx-pricing-amount-box"><div className="qnx-price-tag">{plan.duration}</div><p className="qnx-pricing-amount">{plan.price}</p></div>
                <ul className="qnx-pricing-features">{plan.features.map((feature, index) => (<li key={index} className="qnx-pricing-feature-item"><CheckCircleIcon className="qnx-icon-check" /><span className="qnx-pricing-text">{feature}</span></li>))}</ul>
                <div className="qnx-pricing-cta-mt"><a href="#contact" className="qnx-cta-btn w-full">Request a Quote</a></div>
            </div>
        );
        return (
            <section id="pricing" className="qnx-section qnx-bg-blue">
                <div className="qnx-container">
                    <SectionTitle title="Corporate Training Packages" subtitle="Flexible training options to suit your team's needs" />
                    <div className="qnx-pricing-grid">{pricingData.map((plan, index) => (<PricingCard key={index} plan={plan} />))}</div>
                </div>
            </section>
        );
    };

    const Testimonials: React.FC = () => {
        const testimonialsData = [
            {
                name: "Robert H.",
                role: "Platform Architect",
                company: "Automotive Tier-1",
                quote: "Our team was transitioning to QNX for a new Digital Cockpit project. This training was invaluable. The Resource Manager section clarified exactly how to write drivers that integrate seamlessly with the OS."
            },
            {
                name: "Lisa M.",
                role: "Senior Systems Engineer",
                company: "Medical Robotics Co.",
                quote: "Safety is paramount for us. The modules on Adaptive Partitioning and High Availability gave us the confidence to architect our next-gen surgical robot on QNX Neutrino."
            },
            {
                name: "Daniel K.",
                role: "Embedded Lead",
                company: "Industrial Control Systems",
                quote: "The instructor's deep knowledge of IPC message passing was a game changer. We optimized our control loop latency significantly after applying the techniques learned in this course."
            }
        ];

        return (
            <section id="testimonials" className="qnx-section qnx-bg-gray">
                <div className="qnx-container">
                    <SectionTitle title="What Our Clients Say" subtitle="Trusted by Safety-Critical Industries" />
                    <div className="qnx-grid-3">
                        {testimonialsData.map((t, i) => (
                            <div key={i} className="qnx-testimonial-card">
                                <div className="qnx-quote-icon">"</div>
                                <div className="qnx-stars">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
                                </div>
                                <p className="qnx-testimonial-text">"{t.quote}"</p>
                                <div className="qnx-testimonial-author">
                                     <div className="qnx-author-avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="qnx-author-name">{t.name}</h4>
                                        <p className="qnx-author-role">{t.role}</p>
                                        <p className="qnx-author-company">{t.company}</p>
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
            { question: 'Do we need QNX licenses for training?', answer: 'We can guide you on obtaining evaluation licenses from BlackBerry QNX for the duration of the training. Alternatively, we can use the QNX Software Development Platform (SDP) if your company already has active licenses.' },
            { question: 'What hardware is used?', answer: 'We typically use standard evaluation boards like NXP i.MX8 or TI Jacinto, which have excellent QNX BSP support. We can also tailor the training to run on your custom hardware if BSPs are available.' },
            { question: 'Is this training relevant for QNX SDP 8.0?', answer: 'Yes, the core microkernel architecture, IPC, and Resource Manager concepts are fundamental and apply to QNX SDP 7.0, 7.1, and the latest 8.0. We highlight version-specific differences where applicable.' },
            { question: 'Can you cover Hypervisor integration?', answer: 'This course focuses on the RTOS itself. However, we can add an advanced module on the QNX Hypervisor to discuss virtualization, guests, and shared devices upon request.' },
        ];
        const [openIndex, setOpenIndex] = useState<number | null>(0);
        const handleClick = (index: number) => { setOpenIndex(openIndex === index ? null : index); };
        const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
            <div className="qnx-faq-item">
                <button onClick={onClick} className="qnx-faq-btn">
                    <span className="qnx-faq-question">{item.question}</span>
                    <PlusIcon className={`qnx-icon-plus ${isOpen ? 'rotate' : ''}`} />
                </button>
                <div className={`qnx-accordion-grid ${isOpen ? 'open' : 'closed'}`}><div className="qnx-accordion-inner"><div className="qnx-faq-inner">{item.answer}</div></div></div>
            </div>
        );
        return (
            <section id="faq" className="qnx-section qnx-bg-light">
                <div className="qnx-container">
                    <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know" />
                    <div className="qnx-faq-stack">{faqData.map((item, index) => (<FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />))}</div>
                </div>
            </section>
        );
    };

    const Contact: React.FC = () => {
        const contactInfo = [
            { icon: <BuildingOffice2Icon className="qnx-icon-md text-white"/>, label: 'Company', value: 'YoctoTutor' },
            { icon: <div className="w-6 h-6"><svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg></div>, label: 'Email', value: 'siva.v@yoctotutor.com', href: 'mailto:siva.v@yoctotutor.com' },
            { icon: <div className="w-6 h-6"><svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.99-.554-1.348l-5.12-5.12a1.125 1.125 0 0 0-1.59 0L9 13.5m0 0h-2.25a2.25 2.25 0 0 1-2.25-2.25V6.75" /></svg></div>, label: 'Phone', value: '+91 9966635319', href: 'tel:+919966635319' },
        ];
        const [formSubmitted, setFormSubmitted] = useState(false);
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setFormSubmitted(true);
            const form = e.target as HTMLFormElement;
            form.reset();
            setTimeout(() => setFormSubmitted(false), 5000);
        };
        return (
            <section id="contact" className="qnx-contact-section">
                <div className="qnx-container">
                    <SectionTitle title="Connect With Us" subtitle="Accelerate your safety-critical development with QNX" isWhiteText />
                    <div className="qnx-contact-grid">
                        <div className="space-y-8">
                            <div className="qnx-contact-info-box">
                                <h3 className="qnx-contact-heading">Contact Information</h3>
                                <div className="qnx-contact-list">{contactInfo.map((item, index) => (<div key={index} className="qnx-contact-item"><div className="qnx-contact-icon">{item.icon}</div><div><h4 className="qnx-contact-label">{item.label}</h4>{item.href ? (<a href={item.href} className="qnx-contact-value qnx-contact-link">{item.value}</a>) : (<p className="qnx-contact-value">{item.value}</p>)}</div></div>))}</div>
                            </div>
                            <div className="qnx-whatsapp-box">
                                <h3 className="qnx-contact-heading">Connect on WhatsApp</h3>
                                <div className="qnx-whatsapp-flex">
                                    <img src="https://i.ibb.co/68gCj3J/whatsapp-qr.png" alt="WhatsApp QR Code for Embedded Linux Training" className="qnx-qr-img" loading="lazy" />
                                    <div>
                                        <p className="mb-4 text-white/90">Scan to start a chat instantly, or click the button below.</p>
                                        <a href="https://wa.me/message/55NF67U3BP3WN1" target="_blank" rel="noopener noreferrer" className="qnx-whatsapp-btn"><WhatsAppIcon className="w-6 h-6" /> Chat Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qnx-form-card">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="qnx-form-group"><label className="qnx-form-label">Full Name <span className="qnx-text-red">*</span></label><input type="text" placeholder="Your full name" required className="qnx-form-input" /></div>
                                <div className="qnx-form-group"><label className="qnx-form-label">Email <span className="qnx-text-red">*</span></label><input type="email" placeholder="Your email" required className="qnx-form-input" /></div>
                                <div className="qnx-form-group"><label className="qnx-form-label">Phone <span className="qnx-text-red">*</span></label><input type="tel" placeholder="Your phone" required className="qnx-form-input" /></div>
                                <div className="qnx-form-group"><label className="qnx-form-label">Organization</label><input type="text" placeholder="Company or college" className="qnx-form-input" /></div>
                                <button type="submit" className="qnx-form-btn"><div className="w-5 h-5"><svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg></div> Request a Quote</button>
                            </form>
                            {formSubmitted && (<div className="qnx-success-msg"><CheckCircleIcon className="w-6 h-6" /><span>Thank you! We will contact you shortly.</span></div>)}
                        </div>
                    </div>
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
            <Contact />
        </>
    );
};

export default QNXRTOSTraining;
