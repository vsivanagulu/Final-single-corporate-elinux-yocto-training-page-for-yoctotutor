
import React, { useState } from 'react';
import './trainings-contact.css';

// Icons
const BuildingOfficeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5m9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
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

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
);

interface TrainingsContactProps {
    title?: string;
    subtitle?: string;
}

const TrainingsContact: React.FC<TrainingsContactProps> = ({ 
    title = "Connect With Us", 
    subtitle = "Let's discuss how we can help with your training needs" 
}) => {
    const contactInfo = [
        { icon: <BuildingOfficeIcon />, label: 'Company', value: 'YoctoTutor' },
        { icon: <EnvelopeIcon />, label: 'Email', value: 'siva.v@yoctotutor.com', href: 'mailto:siva.v@yoctotutor.com' },
        { icon: <PhoneIcon />, label: 'Phone', value: '+91 9966635319', href: 'tel:+919966635319' },
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
        <section id="contact" className="tc-section">
            <div className="tc-container">
                <div className="tc-header">
                    <h2 className="tc-title">
                        {title}
                        <span className="tc-title-underline"></span>
                    </h2>
                    <p className="tc-subtitle">{subtitle}</p>
                </div>
                
                <div className="tc-grid">
                    <div className="tc-info-col">
                        <div className="tc-info-card">
                            <h3 className="tc-card-title">Contact Information</h3>
                            <div className="tc-contact-list">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="tc-contact-item">
                                        <div className="tc-icon-circle">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="tc-label">{item.label}</h4>
                                            {item.href ? (
                                                <a href={item.href} className="tc-value tc-link">{item.value}</a>
                                            ) : (
                                                <p className="tc-value">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="tc-info-card">
                            <h3 className="tc-card-title">Connect on WhatsApp</h3>
                            <div className="tc-whatsapp-flex">
                                <img src="https://yoctotutor.com/images/Trainings-siva/qr-whatsapp.jpeg" alt="WhatsApp QR" className="tc-qr-img" loading="lazy" />
                                <div>
                                    <p className="mb-4" style={{opacity: 0.9}}>Scan to start a chat instantly, or click the button below.</p>
                                    <a href="https://wa.me/message/55NF67U3BP3WN1" target="_blank" rel="noopener noreferrer" className="tc-whatsapp-btn">
                                        <WhatsAppIcon /> Chat Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tc-form-card">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="tc-form-group">
                                <label className="tc-label-dark">Full Name <span className="tc-text-accent">*</span></label>
                                <input type="text" placeholder="Your full name" required className="tc-input" />
                            </div>
                            <div className="tc-form-group">
                                <label className="tc-label-dark">Email <span className="tc-text-accent">*</span></label>
                                <input type="email" placeholder="Your email" required className="tc-input" />
                            </div>
                            <div className="tc-form-group">
                                <label className="tc-label-dark">Phone <span className="tc-text-accent">*</span></label>
                                <input type="tel" placeholder="Your phone" required className="tc-input" />
                            </div>
                            <div className="tc-form-group">
                                <label className="tc-label-dark">Organization</label>
                                <input type="text" placeholder="Company or college" className="tc-input" />
                            </div>
                            <button type="submit" className="tc-submit-btn">
                                <PaperAirplaneIcon /> Request a Quote
                            </button>
                        </form>
                        {formSubmitted && (
                            <div className="tc-success">
                                <CheckCircleIcon />
                                <span>Thank you! We will contact you shortly.</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingsContact;
