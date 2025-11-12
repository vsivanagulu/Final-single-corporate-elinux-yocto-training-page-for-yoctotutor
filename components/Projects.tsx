import React, { useEffect, useRef } from 'react';

const projectsData = [
  {
    icon: '⚙️',
    title: 'Custom U-Boot',
    description: 'A functional U-Boot bootloader ported and running on your specific hardware.'
  },
  {
    icon: '🐧',
    title: 'Bootable Linux Kernel',
    description: 'A Linux kernel with custom device drivers booting successfully on your board.'
  },
  {
    icon: '📦',
    title: 'Yocto Project Image',
    description: 'A complete, custom Linux distribution image built with the Yocto Project.'
  },
  {
    icon: '🛠️',
    title: 'Production-Ready BSP',
    description: 'A version-controlled BSP layer for reproducible builds and future development.'
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

const ProjectCard: React.FC<{ project: typeof projectsData[0], index: number }> = ({ project, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);

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

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div 
          ref={cardRef} 
          className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center transition-all duration-300 hover:border-secondary hover:-translate-y-2 hover:shadow-2xl opacity-0 translate-y-5"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg">
                {project.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-primary mb-3">{project.title}</h3>
            <p className="text-light-text leading-relaxed">{project.description}</p>
        </div>
    );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Tangible Project Deliverables" subtitle="Your team will build and deliver the following key assets" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;