
import React from 'react';
import './TrainingsClients.css';

// --- Icons used in this component ---

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

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
    </svg>
);

const TrainingsClients: React.FC = () => {
    const domains = [
        {
            name: "Semiconductors",
            icon: CpuChipIcon,
            themeClass: "theme-semiconductors",
            companies: ["Texas Instruments", "NXP", "ST Microelectronics", "Microchip", "Renesas", "Qualcomm", "AMD Xilinx", "Intel", "NVIDIA", "Synopsys", "Cadence"]
        },
        {
            name: "Industrial & Automation",
            icon: Cog6ToothIcon,
            themeClass: "theme-industrial",
            companies: ["Honeywell", "Ingersoll Rand", "Schneider", "Siemens", "L&T", "Titan Engineering", "Rockwell", "Mitsubishi", "Omron", "ABB", "GE"]
        },
        {
            name: "Automotive",
            icon: RocketLaunchIcon,
            themeClass: "theme-automotive",
            companies: ["Bosch", "Continental", "Minda Group", "Delphi", "Tata Motors", "Ashok Leyland", "TVS Motors", "Mercedes-Benz", "Medha Servo", "Advance Rail"]
        },
        {
            name: "Medical & Healthcare",
            icon: ShieldCheckIcon,
            themeClass: "theme-medical",
            companies: ["GE Healthcare", "Philips", "Siemens Medical", "BPL Medical", "BTL Medical", "Stryker", "AWAK Technologies", "Schiller Healthcare", "Morphle Labs", "SensaCORE", "Aurolab"]
        }
    ];

    return (
        <section id="clients" className="trainings-clients-section">
            <div className="clients-container">
                <div className="clients-header">
                    <span className="clients-header-sub">Career Opportunities</span>
                    <h2 className="clients-header-title">Get into CORE Domain Companies</h2>
                    <p className="clients-header-desc">Target the industry leaders. Our syllabus is tailored to meet the demands of these top-tier product companies.</p>
                </div>
                
                <div className="clients-grid">
                    {domains.map((domain, i) => (
                        <div key={i} className={`client-domain-card ${domain.themeClass}`}>
                            <div className="client-card-deco"></div>
                            
                            <div className="client-card-content">
                                <div className="client-card-header">
                                    <div className="client-icon-box">
                                        <domain.icon className="client-icon-svg" />
                                    </div>
                                    <h3 className="client-card-title">{domain.name}</h3>
                                </div>
                                
                                <ul className="client-companies-list">
                                    {domain.companies.map((company, j) => (
                                        <li key={j} className="company-list-item">
                                            <svg className="client-company-bullet" viewBox="0 0 8 8" fill="currentColor">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            {company}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingsClients;
