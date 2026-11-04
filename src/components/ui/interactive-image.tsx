'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

interface InteractiveImageProps {
  variants: string[];
}

export function InteractiveImage({ variants }: InteractiveImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring for high quality parallax without jank
  const springX = useSpring(mouseX, { damping: 40, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 200 });

  // Anti-magnet effect: image perfectly repels the cursor (-1 to 1 normalized bounds)
  const translateX = useTransform(springX, [-1, 1], [90, -90]);
  const translateY = useTransform(springY, [-1, 1], [90, -90]);

  // Glitch effect cycle on hover
  useEffect(() => {
    if (!isHovered || variants.length < 2) return;
    const interval = setInterval(() => {
      // Randomly skip frames or swap variants to make it feel like a "glitch"
      if (Math.random() > 0.3) {
        setCurrentIndex((prev) => (prev + 1) % variants.length);
      }
    }, 120); // Fast 120ms cycle for flicker effect
    return () => clearInterval(interval);
  }, [isHovered, variants.length]);

  // Not hovered → always show the first variant (no state reset needed)
  const shownIndex = isHovered ? currentIndex : 0;

  // Global mouse tracker for parallax (so it works even when hovering over the pointer-event text sandwich)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] z-10 will-change-transform"
      style={{ x: translateX, y: translateY, translateZ: 0 }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-300 cursor-crosshair will-change-transform"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {variants.map((src, idx) => (
          <Image
            key={`${src}-${idx}`}
            src={src}
            alt="Interactive Hero Variant"
            fill
            className={`object-cover rounded-xl transition-all duration-75 ${
              idx === shownIndex ? 'opacity-100' : 'opacity-0'
            } ${
              isHovered && idx === shownIndex ? 'contrast-150 saturate-150 blur-[0.5px] scale-105' : 'scale-100'
            }`}
            priority={idx === 0}
          />
        ))}
      </div>
    </motion.div>
  );
}
