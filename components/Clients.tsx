import React from 'react';

// --- Placeholder Logo Components ---
// Simple, geometric placeholder logos that are purely iconic.

const TechSolutionsLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>TechSolutions</title>
    <path d="M20 13a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="currentColor"/>
    <path d="M20 5v4M20 31v4M35 20h-4M9 20H5M29.6 10.4l-2.8 2.8M13.2 26.8l-2.8 2.8M29.6 29.6l-2.8-2.8M13.2 13.2l-2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const InnovateCorpLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Innovate Corp</title>
    <path d="M20 8C15.58 8 12 12.03 12 17c0 3.31 2.1 6.15 5 7.4V28h-3v3h12v-3h-3v-3.6c2.9-1.25 5-4.09 5-7.4C28 12.03 24.42 8 20 8zm-3 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" fill="currentColor"/>
    <rect x="14" y="31" width="12" height="2" fill="currentColor"/>
  </svg>
);

const NextGenDevicesLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>NextGen Devices</title>
    <path d="M10 8v24h4V19l10 13h4V8h-4v13L14 8h-4z" fill="currentColor"/>
  </svg>
);

const EmbeddedInnovationsLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Embedded Innovations</title>
    <rect x="8" y="8" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M16 8V2M24 8V2M16 32v6M24 32v6M8 16H2M8 24H2M32 16h6M32 24h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const CircuitDynamicsLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Circuit Dynamics</title>
    <path d="M4 20C10 5 15 35 20 20s5-15 10 0s5 15 10 0" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const QuantumSystemsLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Quantum Systems</title>
    <circle cx="20" cy="20" r="3" fill="currentColor"/>
    <ellipse cx="20" cy="20" rx="16" ry="7" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="20" cy="20" rx="7" ry="16" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);


// --- Main Component ---

const clients = [
  { name: 'TechSolutions', Component: TechSolutionsLogo },
  { name: 'Innovate Corp', Component: InnovateCorpLogo },
  { name: 'NextGen Devices', Component: NextGenDevicesLogo },
  { name: 'Embedded Innovations', Component: EmbeddedInnovationsLogo },
  { name: 'Circuit Dynamics', Component: CircuitDynamicsLogo },
  { name: 'Quantum Systems', Component: QuantumSystemsLogo },
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-light-text mb-12">
          Trusted By Industry Leaders
        </h2>
        
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex-shrink-0 w-52 flex flex-col items-center justify-center mx-4">
                <div className="h-16 w-16 flex items-center justify-center">
                  <client.Component className="h-12 w-12 text-gray-400" />
                </div>
                <p className="mt-2 font-display font-medium text-light-text">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;