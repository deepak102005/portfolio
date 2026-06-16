import React, { useRef, useState, useEffect } from 'react';

interface TechItem {
  icon: string;
  label: string;
  color: string;
}

const ALL_ITEMS: TechItem[] = [
  { icon: '🐍', label: 'Python', color: '#3776AB' },
  { icon: '⚛️', label: 'React.js', color: '#61DAFB' },
  { icon: '🟢', label: 'Node.js', color: '#339933' },
  { icon: '🍃', label: 'MongoDB', color: '#47A248' },
  { icon: '🧠', label: 'LSTM / NLP', color: '#FF6B6B' },
  { icon: '☁️', label: 'Azure AI', color: '#0078D4' },
  { icon: '⚡', label: 'Express.js', color: '#FFFFFF' },
  { icon: '✍️', label: 'Prompt Eng.', color: '#A855F7' },
  { icon: '📊', label: 'ML Pipeline', color: '#F59E0B' },
  { icon: '🔗', label: 'REST APIs', color: '#4dd8e0' },
  { icon: '🐙', label: 'Git & GitHub', color: '#F05032' },
  { icon: '📈', label: 'Data Analytics', color: '#10B981' },
  { icon: '🎛️', label: 'Gradio', color: '#FF7C00' },
  { icon: '🔷', label: 'TypeScript', color: '#3178C6' },
  { icon: '📮', label: 'Postman', color: '#FF6C37' },
  { icon: '☁️', label: 'AWS Cloud', color: '#FF9900' },
  { icon: '💙', label: 'VS Code', color: '#007ACC' },
  { icon: '🤖', label: 'scikit-learn', color: '#F7931E' },
  { icon: '▲', label: 'Next.js', color: '#FFFFFF' },
  { icon: '🎨', label: 'Tailwind CSS', color: '#38B2AC' },
  { icon: '🌐', label: 'Google Cloud', color: '#4285F4' },
];

const ROW1_ITEMS = ALL_ITEMS.slice(0, 11);
const ROW2_ITEMS = ALL_ITEMS.slice(11);

// Triple the arrays to allow seamless continuous feeling
const TRIPLED_ROW1 = [...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS];
const TRIPLED_ROW2 = [...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;

      // Scroll offset: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute translation values
  const r1Translation = offset - 200;
  const r2Translation = -(offset - 200);

  const renderTile = (item: TechItem, index: number) => {
    const borderStyle = {
      borderColor: `${item.color}30`,
      boxShadow: `0 0 15px ${item.color}10`,
    };

    return (
      <div
        key={`${item.label}-${index}`}
        style={borderStyle}
        className="flex-shrink-0 w-[200px] h-[72px] rounded-2xl bg-[#111827] border flex items-center gap-3.5 px-5 select-none"
      >
        <span className="text-2xl">{item.icon}</span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#D7E2EA] tracking-wide">
            {item.label}
          </span>
          <span className="text-[10px] font-mono text-[#646973]">
            {item.color}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full flex flex-col gap-6"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div className="marquee-container w-full">
        <div
          style={{
            transform: `translate3d(${r1Translation}px, 0px, 0px)`,
            willChange: 'transform',
          }}
          className="marquee-row flex gap-3"
        >
          {TRIPLED_ROW1.map((item, idx) => renderTile(item, idx))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="marquee-container w-full">
        <div
          style={{
            transform: `translate3d(${r2Translation}px, 0px, 0px)`,
            willChange: 'transform',
          }}
          className="marquee-row flex gap-3"
        >
          {TRIPLED_ROW2.map((item, idx) => renderTile(item, idx))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
