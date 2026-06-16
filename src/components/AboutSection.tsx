import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

export const AboutSection: React.FC = () => {
  const paragraphText =
    "Computer Science undergraduate passionate about building end-to-end AI-driven systems. With hands-on experience in machine learning, NLP, full-stack development, and cloud deployment, I turn real-world problems into products that actually ship. I thrive in fast-paced startup environments, own features from design to deployment, and bring a marketer's mindset to every build. Let's create something impactful together.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      
      {/* --- DECORATIVE CORNER CODE CARDS --- */}
      
      {/* Top-Left Card: { } */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[100px] sm:w-[140px] md:w-[180px] aspect-square rounded-2xl bg-[#0d1f2d] border border-[#4dd8e0]/20 flex flex-col items-center justify-center p-3 sm:p-4 shadow-[0_4px_30px_rgba(77,216,224,0.05)] select-none z-0"
      >
        <span className="font-mono text-3xl sm:text-5xl md:text-7xl text-[#4dd8e0] font-light">
          &#123; &#125;
        </span>
        <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-[#646973] mt-2">
          JSON.stringify()
        </span>
      </FadeIn>

      {/* Top-Right Card: </ > */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[100px] sm:w-[140px] md:w-[180px] aspect-square rounded-2xl bg-[#0d1f2d] border border-[#A855F7]/20 flex flex-col items-center justify-center p-3 sm:p-4 shadow-[0_4px_30px_rgba(168,85,247,0.05)] select-none z-0"
      >
        <span className="font-mono text-3xl sm:text-5xl md:text-7xl text-[#A855F7] font-light">
          &lt;/&gt;
        </span>
        <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-[#646973] mt-2">
          &lt;Component /&gt;
        </span>
      </FadeIn>

      {/* Bottom-Left Card: ML + model.fit() */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[80px] sm:w-[110px] md:w-[140px] aspect-square rounded-2xl bg-[#0d1f2d] border border-[#A855F7]/20 flex flex-col items-center justify-center p-2 sm:p-3 shadow-[0_4px_30px_rgba(168,85,247,0.05)] select-none z-0"
      >
        <span className="font-mono text-2xl sm:text-4xl md:text-5xl text-[#A855F7] font-bold">
          ML
        </span>
        <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-[#646973] mt-1 sm:mt-2">
          model.fit()
        </span>
      </FadeIn>

      {/* Bottom-Right Card: AI + model.predict() */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[90px] sm:w-[120px] md:w-[160px] aspect-square rounded-2xl bg-[#0d1f2d] border border-[#0078D4]/20 flex flex-col items-center justify-center p-2 sm:p-3 shadow-[0_4px_30px_rgba(0,120,212,0.05)] select-none z-0"
      >
        <span className="font-mono text-2xl sm:text-4xl md:text-5xl text-[#0078D4] font-bold">
          AI
        </span>
        <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-[#646973] mt-1 sm:mt-2">
          model.predict()
        </span>
      </FadeIn>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="z-10 flex flex-col items-center text-center max-w-4xl w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.8rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16"></div>

        {/* Animated text paragraph */}
        <AnimatedText
          text={paragraphText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-base sm:text-lg md:text-xl"
        />

        {/* Gap between text and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24"></div>

        {/* ContactButton */}
        <FadeIn delay={0.1} y={20}>
          <ContactButton label="Get In Touch" href="#contact" />
        </FadeIn>
      </div>
      
    </section>
  );
};

export default AboutSection;
