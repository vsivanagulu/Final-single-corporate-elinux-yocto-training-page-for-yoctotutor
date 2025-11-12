import React from 'react';

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
    </svg>
);

const CubeTransparentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
);

const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-18 0h1.5M12 21v-1.5m0-16.5V3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5v9H3.75v-9Z" />
    </svg>
);

const benefitsData = [
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-secondary" />,
    title: 'Avoid 6+ Months of BSP Headaches.',
  },
  {
    icon: <CubeTransparentIcon className="w-10 h-10 text-secondary" />,
    title: 'Get Production-Ready, Optimized Layers.',
  },
  {
    icon: <CpuChipIcon className="w-10 h-10 text-secondary" />,
    title: 'Hardware Agnostic (ARM, RISC-V, x86).',
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="bg-primary-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white relative inline-block">
                The Proof & Pain Point Resolution
                <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-full"></span>
            </h2>
            <p className="mt-6 text-lg text-secondary-bright">(Quick Benefits)</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 ring-2 ring-white/10 transform transition-transform duration-300 hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-secondary-bright leading-snug">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;