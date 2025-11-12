import React from 'react';

const outcomesData = [
  { title: 'Independently Port U-Boot' },
  { title: 'Customize the Linux Kernel' },
  { title: 'Architect Yocto Layers' },
  { title: 'Debug at a System Level' },
  { title: 'Develop & Deploy Applications' },
  { title: 'Manage Production Builds' },
];

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark relative inline-block">
            {title}
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-full"></span>
        </h2>
        <p className="mt-6 text-lg text-light-text">{subtitle}</p>
    </div>
);

const OutcomeItem: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
            <CheckCircleIcon className="w-8 h-8 text-secondary" />
        </div>
        <div>
            <h3 className="font-display text-xl font-semibold text-primary">{title}</h3>
        </div>
    </div>
);

const TrainingOutcome: React.FC = () => {
    return (
        <section id="outcomes" className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="What You'll Be Able To Do"
                    subtitle="Gain practical, job-ready skills to tackle any embedded Linux project."
                />
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {outcomesData.map((outcome, index) => (
                        <OutcomeItem key={index} {...outcome} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingOutcome;