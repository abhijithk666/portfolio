'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface WordHoverProps {
  defaultWord: string;
  hoverWord: string;
}

export function WordHover({ defaultWord, hoverWord }: WordHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  // spacer determines the allocated width in the document flow
  const spacerWord = defaultWord.length > hoverWord.length ? defaultWord : hoverWord;

  return (
    <span 
      className="relative inline-block cursor-default mx-1 pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Invisible spacer to maintain layout flow and prevent layout shift */ }
      <span className="invisible whitespace-pre select-none" aria-hidden="true">
        {spacerWord}
      </span>
      
      {/* Default word (Filled) */}
      <motion.span
        className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-pre text-[#2563eb] pointer-events-none"
        initial={false}
        animate={{ 
          opacity: isHovered ? 0 : 1, 
          y: isHovered ? -6 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {defaultWord}
      </motion.span>

      {/* Hover word (Outlined) */}
      <motion.span
        className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-pre text-transparent pointer-events-none"
        style={{ WebkitTextStroke: '2px #2563eb' }}
        initial={false}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : 6,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {hoverWord}
      </motion.span>
    </span>
  );
}
