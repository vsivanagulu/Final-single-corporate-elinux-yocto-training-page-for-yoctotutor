import React from 'react';

const softwarePrerequisites = [
    'Basic Understanding of Linux',
    'C programming language',
    'Ubuntu terminal commands',
];

const hardwarePrerequisites = [
    'Ubuntu 20.04 | 22.04 LTS',
    '8 GB RAM minimum',
    '200GB storage space',
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

const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);

const ComputerDesktopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
    </svg>
);

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
);

const Prerequisites: React.FC = () => {
    return (
        <section id="prerequisites" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Technical Prerequisites"
                    subtitle="Required knowledge and hardware specifications for training participation"
                />
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="bg-light p-8 rounded-lg shadow-md border-l-4 border-secondary">
                        <div className="flex items-center gap-4 mb-6">
                            <CodeBracketIcon className="w-10 h-10 text-primary" />
                            <h3 className="font-display text-2xl font-semibold text-primary-dark">Software Knowledge</h3>
                        </div>
                        <ul className="space-y-4">
                            {softwarePrerequisites.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-dark-text text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-light p-8 rounded-lg shadow-md border-l-4 border-secondary">
                        <div className="flex items-center gap-4 mb-6">
                            <ComputerDesktopIcon className="w-10 h-10 text-primary" />
                            <h3 className="font-display text-2xl font-semibold text-primary-dark">Hardware Requirements</h3>
                        </div>
                        <ul className="space-y-4">
                            {hardwarePrerequisites.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-dark-text text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prerequisites;