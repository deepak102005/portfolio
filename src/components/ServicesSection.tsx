import React from 'react';
import FadeIn from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Full-Stack Development',
    description: 'End-to-end web applications using the MERN stack — React frontends, Node/Express backends, MongoDB persistence, and REST API design — built for scale and performance.',
  },
  {
    number: '02',
    name: 'AI & Machine Learning',
    description: 'Supervised ML pipelines, LSTM time-series models, ensemble classifiers, and NLP systems — from data preprocessing and feature engineering through model evaluation and Gradio deployment.',
  },
  {
    number: '03',
    name: 'Prompt Engineering',
    description: 'Designing, testing, and refining prompts for LLMs including Gemini and GPT — for AI product features, automation pipelines, and real-world applications with measurable output quality.',
  },
  {
    number: '04',
    name: 'Cloud & API Integration',
    description: 'Azure AI services, AWS cloud storage, and Google Cloud APIs — configuring deployments, integrating third-party REST APIs, and implementing cloud-based AI capabilities into production apps.',
  },
  {
    number: '05',
    name: 'Data Analytics & Dashboards',
    description: 'Building analytical dashboards, budget calculators, and reporting tools using React and charting libraries — translating raw data into clear, actionable visual insights for end users.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn delay={0} y={40} className="w-full">
            <h2 className="font-black uppercase tracking-tight text-[#0C0C0C] text-[clamp(2.8rem,12vw,160px)] leading-none">
              Services
            </h2>
          </FadeIn>
        </div>

        {/* Services List */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="w-full border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                {/* Left Side: Number */}
                <div className="font-black leading-none text-[#0C0C0C] text-[clamp(2.5rem,8vw,120px)] w-24 sm:w-32 md:w-40 select-none flex-shrink-0">
                  {service.number}
                </div>
                
                {/* Right Side: Name & Description */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-grow">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#0C0C0C]">
                    {service.name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-[#0C0C0C]/75 font-normal leading-relaxed max-w-3xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
