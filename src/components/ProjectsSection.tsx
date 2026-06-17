import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import LiveProjectButton from './LiveProjectButton';

// Import realistic mockup images
import powersaverMockup from '../../assets/powersaver_mockup.png';
import stockPredictorMockup from '../../assets/stock_predictor_mockup.png';
import voiceToCodeMockup from '../../assets/voice_to_code_mockup.png';

interface Project {
  number: string;
  name: string;
  category: string;
  accent: string;
  tech: string[];
  description: string;
  emoji: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'PowerSaver AI',
    category: 'AI + Gamification',
    accent: '#4dd8e0',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AI Engine'],
    description: 'Gamified energy-saving platform for college students with real-time power monitoring, AI recommendations, coin rewards for milestones, streak tracking, and a competitive leaderboard dashboard.',
    emoji: '⚡',
    image: powersaverMockup,
  },
  {
    number: '02',
    name: 'Stock Price Predictor',
    category: 'ML / Finance',
    accent: '#A855F7',
    tech: ['Python', 'LSTM', 'Gradio', 'scikit-learn'],
    description: 'Time-series forecasting pipeline using LSTM networks for financial trend prediction. Features custom feature engineering, scaling, ensemble evaluation metrics, and an interactive Gradio interface.',
    emoji: '📈',
    image: stockPredictorMockup,
  },
  {
    number: '03',
    name: 'AI Voice-to-Code',
    category: 'NLP + Voice',
    accent: '#F59E0B',
    tech: ['Python', 'NLP', 'Speech Recognition', 'AST'],
    description: 'Speech-to-text pipeline that converts natural language voice commands into executable Python scripts using NLP parsing. Modular architecture allows easy extensibility for new command types.',
    emoji: '🤖',
    image: voiceToCodeMockup,
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll of the container to apply stacking scale-down effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[70vh] flex flex-col justify-start py-8 sm:py-12"
    >
      <motion.div
        style={{
          top: `${96 + index * 28}px`,
          scale,
          borderColor: '#D7E2EA',
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] border-2 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-8 shadow-[0_10px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#D7E2EA]/10 pb-6">
          <div className="flex items-center gap-4">
            {/* Project Number */}
            <span className="hero-heading font-black text-[clamp(2.5rem,7vw,100px)] leading-none select-none">
              {project.number}
            </span>
            
            {/* Title & Category */}
            <div>
              <span
                style={{ color: project.accent }}
                className="font-mono text-xs uppercase tracking-widest block mb-1 font-semibold"
              >
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D7E2EA] uppercase tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Center Grid: Left Description + Tech Tags, Right Mockup Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 cols): Description + Tags */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base md:text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  style={{
                    borderColor: `${project.accent}30`,
                    backgroundColor: `${project.accent}15`,
                    color: project.accent,
                  }}
                  className="font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (7 cols): High-Fidelity Realistic Image Card */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <div 
              style={{
                borderColor: `${project.accent}20`,
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px ${project.accent}08`,
              }}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden border bg-[#111827]/10 group/img transition-all duration-300"
            >
              {/* Image itself */}
              <img
                src={project.image}
                alt={`${project.name} Interface Mockup`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              />

              {/* Accent-colored border line overlay on hover */}
              <div 
                style={{
                  background: `linear-gradient(to top, ${project.accent}15, transparent)`,
                }}
                className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <FadeIn delay={0} y={40} className="w-full">
            <h2 className="hero-heading font-black uppercase tracking-tight text-[clamp(2.8rem,12vw,160px)] leading-none">
              Projects
            </h2>
          </FadeIn>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col w-full pb-20">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={idx}
              total={PROJECTS.length}
            />
          ))}
        </div>

        {/* --- CONTACT FOOTER --- */}
        <div
          id="contact"
          className="border-t border-[#D7E2EA]/10 pt-24 pb-16 sm:pb-24 md:pb-28 text-center flex flex-col items-center gap-8 md:gap-10"
        >
          {/* Title */}
          <FadeIn delay={0} y={30}>
            <h2 className="hero-heading font-black uppercase tracking-tight text-[clamp(2rem,8vw,80px)] leading-none">
              Let's Build Together
            </h2>
          </FadeIn>

          {/* Subtext */}
          <FadeIn delay={0.1} y={20}>
            <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
              Open to internships, freelance projects, and full-time roles in AI and full-stack engineering.
            </p>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.2} y={20} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
            <ContactButton
              label="mandalideepak146@gmail.com"
              href="mailto:mandalideepak146@gmail.com"
              className="text-[10px] sm:text-xs tracking-wider"
            />
            <LiveProjectButton
              label="+91 756 977 7677"
              href="tel:+917569777677"
              className="text-[10px] sm:text-xs tracking-wider"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
