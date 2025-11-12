import React, { useState, useCallback, useEffect } from 'react';

const testimonialsData = [
  {
    avatar: 'RK',
    name: 'Rahul Kumar',
    title: 'Lead Hardware Engineer',
    quote: "The most effective training we've ever had. The instructor's deep knowledge of Yocto and kernel porting was incredible. We brought up our custom board in just 8 days, a task that would have taken us months.",
  },
  {
    avatar: 'PS',
    name: 'Priya Sharma',
    title: 'Senior Firmware Developer',
    quote: "This course demystified the Yocto Project for our team. We now have a solid, maintainable BSP and a clear path for our product development. Absolutely essential for any company building custom Linux hardware.",
  },
  {
    avatar: 'AP',
    name: 'Arjun Patel',
    title: 'CTO, Tech Startup',
    quote: "As a startup, getting our hardware running quickly was critical. YoctoTutor's training was a game-changer. It was a fantastic investment that accelerated our time-to-market significantly.",
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

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section id="testimonials" className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="What Our Participants Say" subtitle="Real feedback from professionals" />

                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonialsData.map((testimonial, index) => (
                                <div key={index} className="min-w-full px-4">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <h4 className="font-display text-xl font-semibold text-primary">{testimonial.name}</h4>
                                                <p className="text-light-text">{testimonial.title}</p>
                                            </div>
                                        </div>
                                        <div className="flex text-accent mb-4">
                                            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-6 h-6" />)}
                                        </div>
                                        <p className="text-dark-text italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={prevSlide} className="w-14 h-14 bg-white border-2 border-secondary rounded-full flex items-center justify-center text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:scale-110">
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <button onClick={nextSlide} className="w-14 h-14 bg-white border-2 border-secondary rounded-full flex items-center justify-center text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:scale-110">
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>
);
const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
);
const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
);

export default Testimonials;