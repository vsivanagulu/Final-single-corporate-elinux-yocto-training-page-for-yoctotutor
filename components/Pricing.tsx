import React from 'react';

const pricingData = [
    {
        tier: 'Online Corporate Training',
        price: 'Contact for Quote',
        duration: 'Flexible Schedule',
        features: [
            'Complete 8-Day Syllabus',
            'Live, interactive online sessions',
            'Remote labs on your hardware or eval boards',
            'Led by industry experts',
            'All course materials and source code',
            'Post-training support',
        ],
        highlight: false,
    },
    {
        tier: 'On-Site Corporate Training',
        price: 'Contact for Quote',
        duration: '8 Full Days / 64 Hours',
        features: [
            'Complete 8-Day Syllabus',
            'On-site training at your facility',
            'Hands-on labs with your custom hardware',
            'Led by industry experts',
            'All course materials and source code',
            'Dedicated post-training support',
        ],
        highlight: true,
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

const PricingCard: React.FC<{ plan: typeof pricingData[0] }> = ({ plan }) => (
    <div className={`flex flex-col bg-white rounded-2xl p-8 text-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 border-2 ${plan.highlight ? 'border-secondary' : 'border-gray-200'}`}>
        <h3 className="font-display text-2xl font-semibold text-primary mb-4">{plan.tier}</h3>
        
        <div className="my-6">
            <div className="inline-block bg-gradient-primary text-white font-bold py-2 px-6 rounded-full mb-2">
                {plan.duration}
            </div>
            <p className="font-display text-4xl font-bold text-accent my-4">{plan.price}</p>
        </div>

        <ul className="text-left space-y-4 my-8">
            {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-dark-text">{feature}</span>
                </li>
            ))}
        </ul>
        <a href="#contact" className="w-full inline-block bg-gradient-accent text-white font-semibold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl mt-auto">
            Request a Quote
        </a>
    </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Corporate Training Packages" subtitle="Flexible training options to suit your team's needs" />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {pricingData.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
        </div>
      </div>
    </section>
  );
};

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
);

export default Pricing;