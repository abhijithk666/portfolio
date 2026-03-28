'use client';

import { motion } from 'framer-motion';
import { InteractiveImage } from '../ui/interactive-image';
import { useState } from 'react';

// Synchronized word component that renders solid or outlined text based on props
function SyncWordHover({
  defaultWord,
  hoverWord,
  isHovered,
  onHover,
  onLeave,
  isOutline
}: {
  defaultWord: string;
  hoverWord: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  isOutline?: boolean;
}) {
  const spacerWord = defaultWord.length > hoverWord.length ? defaultWord : hoverWord;

  return (
    <span 
      className={`relative inline-block mx-2 md:mx-4 ${isOutline ? 'pointer-events-auto cursor-default' : 'pointer-events-none'}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Invisible spacer to maintain layout */}
      <span className="invisible whitespace-pre select-none" aria-hidden="true">
        {spacerWord}
      </span>
      
      {/* Default word */}
      <motion.span
        className={`absolute top-0 left-1/2 -translate-x-1/2 whitespace-pre pointer-events-none ${isOutline ? 'text-transparent' : 'text-[#2563eb]'}`}
        style={isOutline ? { WebkitTextStroke: '2px #2563eb' } : {}}
        initial={false}
        animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -6 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {defaultWord}
      </motion.span>

      {/* Hover word */}
      <motion.span
        className={`absolute top-0 left-1/2 -translate-x-1/2 whitespace-pre pointer-events-none ${isOutline ? 'text-transparent' : 'text-[#2563eb]'}`}
        style={isOutline ? { WebkitTextStroke: '2px #2563eb' } : {}}
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {hoverWord}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const words = {
    w1: { default: "design,", hover: "create," },
    w2: { default: "build", hover: "develop" },
    w3: { default: "ship", hover: "launch" },
    w4: { default: "cool products.", hover: "great apps." }
  };

  const renderTextContent = (isOutline: boolean) => (
    <>
      <h1 className="font-serif text-[2rem] sm:text-[2.5rem] md:text-[5rem] lg:text-[7rem] leading-[1] tracking-tight text-[#2563eb] m-0 flex flex-wrap justify-center items-center">
        <span className={isOutline ? 'pointer-events-auto' : ''}>I</span>
        <SyncWordHover 
defaultWord={words.w1.default}
          hoverWord={words.w1.hover}
          isHovered={hoveredWord === 'w1'} 
          onHover={() => setHoveredWord('w1')} 
          onLeave={() => setHoveredWord(null)} 
          isOutline={isOutline} 
        />
        <SyncWordHover 
defaultWord={words.w2.default}
          hoverWord={words.w2.hover}
          isHovered={hoveredWord === 'w2'} 
          onHover={() => setHoveredWord('w2')} 
          onLeave={() => setHoveredWord(null)} 
          isOutline={isOutline} 
        />
        <span className={isOutline ? 'pointer-events-auto mx-2 md:mx-4' : 'mx-2 md:mx-4'}>&amp;</span>
      </h1>
      <h1 className="font-serif text-[2rem] sm:text-[2.5rem] md:text-[5rem] lg:text-[7rem] leading-[1] tracking-tight text-[#2563eb] m-0 flex flex-wrap justify-center items-center mt-2">
        <SyncWordHover 
defaultWord={words.w3.default}
          hoverWord={words.w3.hover}
          isHovered={hoveredWord === 'w3'} 
          onHover={() => setHoveredWord('w3')} 
          onLeave={() => setHoveredWord(null)} 
          isOutline={isOutline} 
        />
        <SyncWordHover 
defaultWord={words.w4.default}
          hoverWord={words.w4.hover}
          isHovered={hoveredWord === 'w4'} 
          onHover={() => setHoveredWord('w4')} 
          onLeave={() => setHoveredWord(null)} 
          isOutline={isOutline} 
        />
      </h1>
    </>
  );

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen px-4 flex justify-center items-center overflow-visible">
      <div className="relative w-full max-w-6xl flex flex-col items-center justify-center">
        
        {/* Layer 2: Interactive Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px] md:w-[480px] md:h-[650px] z-10">
          <InteractiveImage variants={[
            '/images/me-side-pixel.png',
            '/images/me-side.png',
            '/images/me-side-pixel.png',
            '/images/me-side.png'
          ]} />
        </div>

        {/* Layer 1: Solid Back Text */}
        <div className="relative z-0 w-full text-center flex flex-col items-center justify-center pointer-events-none">
          {renderTextContent(false)}
        </div>

        {/* Layer 3: Stroked Front Text */}
        <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-start pointer-events-none">
          {renderTextContent(true)}
        </div>

      </div>

      {/* Subtext and scrolling hint at bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">Scroll down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-300 dark:from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}
