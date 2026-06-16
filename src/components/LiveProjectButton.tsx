import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'View Project',
  href = '#',
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]
        text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm
        px-8 py-3 sm:px-10 sm:py-3.5
        transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:scale-95
        ${className}
      `.trim()}
    >
      {label}
    </a>
  );
};

export default LiveProjectButton;
