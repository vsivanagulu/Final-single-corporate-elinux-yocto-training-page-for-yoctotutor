import React, { useState } from 'react';

const faqData = [
  {
    question: 'Who is this training for?',
    answer: 'This training is designed for corporate engineering teams (hardware, firmware, software) who are developing a product based on custom hardware that needs to run Embedded Linux.',
  },
  {
    question: 'What are the prerequisites?',
    answer: 'Attendees should have a solid understanding of C programming and basic Linux command-line usage. Experience with embedded systems is highly beneficial. No prior Yocto Project or kernel development experience is required.',
  },
  {
    question: 'What is the training format?',
    answer: 'We offer flexible training formats. Choose between an intensive 8-day on-site program at your facility or a live, interactive online course. Both formats cover the same comprehensive curriculum and are tailored to your project.',
  },
  {
    question: 'How do we get a quote?',
    answer: 'Please fill out the contact form with your company details, and we will contact you to discuss your specific needs and provide a detailed quote for the corporate training package.',
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

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-secondary">
            <button
                onClick={onClick}
                className="w-full p-6 text-left flex justify-between items-center gap-4 transition-colors hover:bg-gray-50"
            >
                <span className="font-display text-lg font-semibold text-primary">{item.question}</span>
                <PlusIcon className={`w-6 h-6 text-secondary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="p-6 border-t border-gray-200 text-light-text leading-relaxed">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know" />

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
);

export default FAQ;