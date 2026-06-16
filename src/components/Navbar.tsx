import React from 'react';
import FadeIn from './FadeIn';

export const Navbar: React.FC = () => {
  return (
    <div className="w-full z-30">
      <FadeIn as="nav" delay={0} y={-20} className="w-full">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {/* Brand Logo */}
          <a href="#" className="font-mono text-xl font-bold text-[#4dd8e0] tracking-tighter hover:opacity-85 transition-opacity duration-200">
            DEEPAK MANDALI  <span className="animate-pulse"></span>
          </a>
          
          {/* Elevated Navigation Pill Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {['About', 'Services', 'Journey', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D7E2EA] bg-[#111827]/40 hover:bg-[#111827]/80 border border-white/5 hover:border-[#4dd8e0]/30 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(77,216,224,0.15)] hover:text-[#4dd8e0]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Navbar;
