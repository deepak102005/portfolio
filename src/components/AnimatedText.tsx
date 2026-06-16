import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Distribute the character fade-in over the scroll progress.
  // We add a tiny buffer for smoother overlap between letters.
  const start = index / total;
  const end = Math.min(1, (index + 2) / total); 
  const opacity = useTransform(progress, [start, end], [0, 1]);

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block select-none">
      {/* Invisible/low opacity placeholder to preserve layout/width */}
      <span className="opacity-[0.15] text-[#D7E2EA]">{char}</span>
      {/* Absolute overlay animating to full opacity */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 h-full w-full text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {chars.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export default AnimatedText;
