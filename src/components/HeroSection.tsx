import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import FadeIn from './FadeIn';
import resumePdf from '../../assets/deepak (2) (1).pdf';
import profileVideo from '../../assets/deepakprofile.mp4';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasInteractedRef = useRef(false);
  const [isMuted, setIsMuted] = useState(true);

  // Monitor first user interaction (click, scroll, touch) to automatically unmute and play
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        const video = videoRef.current;
        if (video && sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            video.muted = false;
            setIsMuted(false);
            video.play().catch((err) => console.log('Autoplay play error:', err));
          }
        }
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, []);

  // Stop/pause video when scrolling away, resume/play when visible
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          // Play video when user scrolls back to Hero section
          if (hasInteractedRef.current) {
            video.muted = false;
            setIsMuted(false);
          } else {
            video.muted = true;
            setIsMuted(true);
          }
          video.play().catch((err) => console.log('Observer play failed:', err));
        } else {
          // Pause and mute video when user scrolls to other sections
          video.pause();
          video.muted = true;
          setIsMuted(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[calc(100vh-80px)] w-full flex flex-col justify-center bg-[#0C0C0C] overflow-hidden"
    >
      {/* Split Grid Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center z-10 pt-16 md:pt-20 pb-12">
        {/* Left Column (Content) */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center items-start text-left gap-6 md:gap-8">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(2.5rem,7.5vw,110px)]">
              Hi, I'm <br />
              <span className="text-[#BBCCD7]">Deepak</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-relaxed text-xs sm:text-sm md:text-base max-w-md">
              Building end-to-end AI-driven systems that solve real-world problems
            </p>
          </FadeIn>

          <FadeIn delay={0.48} y={20}>
            <p className="text-[#BBCCD7]/80 font-light tracking-wide text-xs sm:text-sm max-w-md italic border-l-2 border-[#4dd8e0]/35 pl-4 py-1">
              "Thank you for visiting my portfolio. Let's build something amazing together."
            </p>
          </FadeIn>

          <FadeIn delay={0.6} y={20}>
            <a
              href={resumePdf}
              download="Deepak_Mandali_CV.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#4dd8e0] text-[#4dd8e0] hover:bg-[#4dd8e0]/10 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(77,216,224,0.15)] cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </FadeIn>
        </div>

        {/* Right Column (Video centered in portrait box - blended with bg) */}
        <div className="col-span-1 md:col-span-7 relative w-full flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 z-10 bg-[#0C0C0C] self-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(77,216,224,0.05)] bg-[#0C0C0C]">
            <video
              ref={videoRef}
              src={profileVideo}
              loop
              playsInline
              muted={isMuted}
              className="w-full h-full object-cover object-top"
            />
            
            {/* Blending gradients overlaying video edges to mix with #0C0C0C */}
            <div className="absolute inset-y-0 left-0 w-[4%] bg-gradient-to-r from-[#0C0C0C] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-[4%] bg-gradient-to-l from-[#0C0C0C] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 top-0 h-[2%] bg-gradient-to-b from-[#0C0C0C] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-[7%] bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/85 to-transparent pointer-events-none z-10" />
            
            {/* Radial vignette mask for smooth focus */}
            <div 
              className="absolute inset-0 pointer-events-none z-10 opacity-10" 
              style={{
                background: 'radial-gradient(circle at 50% 30%, transparent 75%, #0C0C0C 98%)'
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
