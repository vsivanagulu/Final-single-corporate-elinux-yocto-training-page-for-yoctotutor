import React from 'react';

// Fix: Moved icon components to the top to fix "used before its declaration" errors.
const RocketLaunchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 0-7.38-5.84m2.56 5.84L6.16 20.34m0 0L2.34 16.54m3.82 3.8L10.22 10.22m5.37-5.37L16.54 2.34m3.8 3.82-3.44 3.44" /></svg>
);
const Cog6ToothIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 12h3m-7.5-3.75h12M4.5 6.75h15m-15 9h15m-6-15h.008v.008h-.008V6.75Zm.008 3h.008v.008h-.008v-.008Zm.008 3h.008v.008h-.008v-.008Zm.008 3h.008v.008h-.008v-.008Zm-3-3h.008v.008h-.008v-.008Zm-3 3h.008v.008H7.5v-.008Zm-3-3h.008v.008H4.5v-.008Zm0-3h.008v.008H4.5v-.008Zm3 0h.008v.008H7.5v-.008Zm3 0h.008v.008h-.008v-.008Zm3-3h.008v.008h-.008V9.75Zm3 3h.008v.008h-.008v-.008Zm3 0h.008v.008h-.008v-.008Zm-3-3h.008v.008h-.008v-.008Zm-6 0h.008v.008h-.008v-.008Z" /></svg>
);
const CubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
);
const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.512 2.72a3 3 0 0 1-4.682-2.72 9.094 9.094 0 0 1 3.741-.479m-4.5-5.23a3 3 0 0 0 4.5 0m-4.5 0a3 3 0 0 1 4.5 0m0 0a3 3 0 0 0 4.5 0m-4.5 0a3 3 0 0 1 4.5 0m-9.75 1.5h9.75c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-9.75c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>
);

const highlights = [
  {
    icon: <RocketLaunchIcon className="w-8 h-8 text-secondary" />,
    title: 'U-Boot Porting',
    description: 'Bring up your board from power-on with a custom U-Boot bootloader.'
  },
  {
    icon: <Cog6ToothIcon className="w-8 h-8 text-secondary" />,
    title: 'Kernel Customization',
    description: 'Configure the Linux Kernel with drivers specific to your hardware.'
  },
  {
    icon: <CubeIcon className="w-8 h-8 text-secondary" />,
    title: 'Yocto Project Mastery',
    description: 'Create custom layers, recipes, and images for your product.'
  },
  {
    icon: <UserGroupIcon className="w-8 h-8 text-secondary" />,
    title: 'Corporate Focus',
    description: 'Training tailored to your team\'s specific hardware and project goals.'
  },
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

const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-light p-6 rounded-lg border-l-4 border-secondary transition-all duration-300 hover:shadow-lg hover:translate-x-1">
    <div className="mb-2">{icon}</div>
    <h4 className="font-display text-xl font-semibold text-primary mb-2">{title}</h4>
    <p className="text-light-text">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About the Training" subtitle="Expert-Led Yocto Project BSP Porting for Your Hardware" />
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-light-text text-lg leading-relaxed">
            <p>Have you created custom hardware and need to bring it to life with Linux? Our intensive 8-day corporate training is designed specifically for companies like yours.</p>
            <p>We guide your engineering team through the entire Board Support Package (BSP) porting process, using either your custom hardware or standard evaluation boards. You'll master porting U-Boot, customizing the Linux Kernel, and building a complete, production-ready embedded Linux distribution using the Yocto Project.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <HighlightCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;