import React from 'react';
import FadeIn from './FadeIn';

interface ExperienceItem {
  role: string;
  organization: string;
  duration?: string;
  points: string[];
}

interface HackathonItem {
  title: string;
  year: string;
  description: string;
  badge?: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Google Hackathon — Participant',
    organization: 'Google',
    duration: '24 Hours',
    points: [
      'Developed an AI-powered solution under time constraints, leveraging Google Cloud APIs and Gemini/Vertex AI tools.',
      'Collaborated in a cross-functional team to design, prototype, and pitch a market-ready product within 24 hours.',
      'Applied prompt engineering and full-stack integration to build a functional demo showcasing real-world impact.'
    ]
  },
  {
    role: 'Intern — Networking & IT Systems',
    organization: 'Arka Hospital',
    points: [
      'Assisted in system configuration, network troubleshooting, and infrastructure monitoring.',
      'Supported deployment and maintenance of internal hospital systems.',
      'Implemented basic security protocols and system performance checks.'
    ]
  }
];

const HACKATHON_DATA: HackathonItem[] = [
  {
    title: 'Google Hackathon — Participant',
    year: '2024',
    description: 'Built an AI-driven solution using Google Cloud & Gemini APIs',
    badge: 'Participant'
  },
  {
    title: 'Smart India Hackathon — Participant',
    year: '2024',
    description: 'National-level government innovation challenge',
    badge: 'Participant'
  },
  {
    title: 'AQVH Hackathon — Finalist',
    year: '2024',
    description: 'Reached the final round with an impactful tech solution',
    badge: 'Finalist'
  },
  {
    title: 'NUTRIVORA Food Ideathon — Participant',
    year: '2024',
    description: 'Proposed a food-tech solution addressing nutrition challenge',
    badge: 'Participant'
  }
];

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech — Computer Science Engineering',
    institution: 'Karunya Institute of Technology and Sciences',
    duration: '2022–2026'
  },
  {
    degree: 'FIITJEE Intermediate college',
    institution: 'Board of Intermediate Education',
    duration: '2020–2022'
  },
  {
    degree: 'FIITJEE High School',
    institution: 'Central Board of Secondary Education',
    duration: '2020'
  }
];

export const BlogPage: React.FC = () => {
  return (
    <section id="journey" className="w-full bg-[#0C0C0C] text-[#D7E2EA] py-24 px-6 md:px-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#4dd8e0] mb-2 block">
              // Professional Logbook
            </span>
            <h2 className="tech-heading text-[2.5rem] sm:text-[3.5rem] font-black uppercase tracking-tight leading-none">
              The Journey
            </h2>
          </div>
          <p className="text-[#D7E2EA]/50 font-light uppercase tracking-wide text-xs sm:text-sm max-w-sm leading-relaxed">
            A chronological timeline of experiences, hackathon innovations, and educational milestones.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          {/* Column 1: Experience (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="border-b border-white/10 pb-4 mb-4">
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#D7E2EA] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4dd8e0]" />
                Professional Experience
              </h3>
            </div>
            
            <div className="flex flex-col gap-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} y={20}>
                  <div className="p-6 rounded-2xl bg-[#111827]/30 border border-white/5 hover:border-[#4dd8e0]/20 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(77,216,224,0.02)]">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div>
                        <h4 className="font-sans text-base sm:text-lg font-bold group-hover:text-[#4dd8e0] transition-colors duration-300 uppercase tracking-wide">
                          {exp.role}
                        </h4>
                        <p className="font-mono text-xs text-[#D7E2EA]/60">
                          {exp.organization}
                        </p>
                      </div>
                      {exp.duration && (
                        <span className="font-mono text-[10px] text-[#4dd8e0]/80 bg-[#4dd8e0]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {exp.duration}
                        </span>
                      )}
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="font-sans text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light flex items-start gap-2">
                          <span className="text-[#4dd8e0] mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-[#4dd8e0]/60" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Column 2: Hackathons (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="border-b border-white/10 pb-4 mb-4">
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#D7E2EA] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4dd8e0]" />
                Hackathons
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {HACKATHON_DATA.map((hack, idx) => (
                <FadeIn key={idx} delay={idx * 0.08} y={20}>
                  <div className="p-5 rounded-2xl bg-[#111827]/20 border border-white/5 hover:border-[#4dd8e0]/20 transition-all duration-300 group">
                    <div className="flex justify-between items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-[#4dd8e0] bg-[#4dd8e0]/5 px-2 py-0.5 rounded border border-[#4dd8e0]/10">
                        {hack.year}
                      </span>
                      {hack.badge && (
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#D7E2EA]/40">
                          {hack.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-sans text-sm sm:text-base font-semibold group-hover:text-[#4dd8e0] transition-colors duration-300 uppercase tracking-wide mb-1">
                      {hack.title}
                    </h4>
                    <p className="font-sans text-xs text-[#D7E2EA]/60 leading-relaxed font-light">
                      {hack.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Column 3: Education (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="border-b border-white/10 pb-4 mb-4">
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#D7E2EA] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4dd8e0]" />
                Education
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {EDUCATION_DATA.map((edu, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} y={20}>
                  <div className="p-5 rounded-2xl bg-[#111827]/10 border border-white/5 hover:border-[#4dd8e0]/20 transition-all duration-300 group relative overflow-hidden">
                    <span className="font-mono text-[10px] text-[#4dd8e0]/70 mb-2 block">
                      {edu.duration}
                    </span>
                    <h4 className="font-sans text-sm sm:text-base font-bold group-hover:text-[#4dd8e0] transition-colors duration-300 uppercase tracking-wide mb-1 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-xs text-[#D7E2EA]/60 font-light">
                      {edu.institution}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
