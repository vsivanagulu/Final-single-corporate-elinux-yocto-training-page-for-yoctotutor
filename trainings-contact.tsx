import React, { useState } from 'react';

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

const SectionTitle: React.FC<{ title: string; subtitle: string; isWhiteText?: boolean, subtitleColorClass?: string }> = ({ title, subtitle, isWhiteText = false, subtitleColorClass }) => (
    <div className="text-center mb-8 md:mb-12">
      <h2 className={`font-display text-3xl md:text-4xl font-bold ${isWhiteText ? 'text-white' : 'text-primary-dark'} relative inline-block`}>
        {title}
        <span className="absolute -bottom-2.5 left-1/2 -translate-x-1.2 w-20 h-1 bg-gradient-accent rounded-full"></span>
      </h2>
      <p className={`mt-6 text-lg ${subtitleColorClass ? subtitleColorClass : (isWhiteText ? 'text-white/90' : 'text-light-text')}`}>{subtitle}</p>
    </div>
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
        { icon: <BuildingOfficeIcon className="w-8 h-8"/>, label: 'Company', value: 'YoctoTutor' },
        { icon: <EnvelopeIcon className="w-8 h-8"/>, label: 'Email', value: 'siva.v@yoctotutor.com', href: 'mailto:siva.v@yoctotutor.com' },
        { icon: <PhoneIcon className="w-8 h-8"/>, label: 'Phone', value: '+91 9966635319', href: 'tel:+919966635319' },
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
        <section id="contact" className="py-12 md:py-20 bg-gradient-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title={title} subtitle={subtitle} isWhiteText />
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                    <div className="space-y-8">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"><h3 className="font-display text-2xl font-semibold mb-6">Contact Information</h3><div className="space-y-6">{contactInfo.map((item, index) => (<div key={index} className="flex items-center gap-4"><div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">{item.icon}</div><div><h4 className="text-sm opacity-90">{item.label}</h4>{item.href ? (<a href={item.href} className="text-lg font-medium hover:underline">{item.value}</a>) : (<p className="text-lg font-medium">{item.value}</p>)}</div></div>))}</div></div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"><h3 className="font-display text-2xl font-semibold mb-6">Connect on WhatsApp</h3><div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"><img src="https://yoctotutor.com/images/Trainings-siva/qr-whatsapp.jpeg" alt="WhatsApp QR Code for Embedded Linux Training" className="w-32 h-32 rounded-lg object-cover flex-shrink-0 border-2 border-white/20" loading="lazy" /><div><p className="mb-4 text-white/90">Scan to start a chat instantly, or click the button below.</p><a href="https://wa.me/message/55NF67U3BP3WN1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"><WhatsAppIcon className="w-6 h-6" /> Chat Now</a></div></div></div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div><label className="block text-sm font-medium text-dark-text mb-2">Full Name <span className="text-accent">*</span></label><input type="text" placeholder="Your full name" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition" /></div>
                            <div><label className="block text-sm font-medium text-dark-text mb-2">Email <span className="text-accent">*</span></label><input type="email" placeholder="Your email" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition" /></div>
                            <div><label className="block text-sm font-medium text-dark-text mb-2">Phone <span className="text-accent">*</span></label><input type="tel" placeholder="Your phone" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition" /></div>
                            <div><label className="block text-sm font-medium text-dark-text mb-2">Organization</label><input type="text" placeholder="Company or college" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition" /></div>
                            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-accent text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"><PaperAirplaneIcon className="w-5 h-5" /> Request a Quote</button>
                        </form>
                        {formSubmitted && (<div className="mt-4 flex items-center gap-3 bg-secondary text-white p-4 rounded-lg"><CheckCircleIcon className="w-6 h-6" /><span>Thank you! We will contact you shortly.</span></div>)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingsContact;