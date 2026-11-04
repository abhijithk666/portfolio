'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import type { ProjectShowcase } from '@/types';

interface ProjectCardProps {
  project: ProjectShowcase;
  index: number;
}

const gradients = [
  'from-sky-300 via-sky-200 to-emerald-300',
  'from-rose-200 via-orange-100 to-amber-200',
  'from-indigo-300 via-purple-200 to-pink-200',
  'from-teal-200 via-emerald-100 to-green-200',
];

const tagStyles = [
  'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900',
  'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700',
];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isExternal = project.liveUrl.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
    >
      <a
        href={project.liveUrl}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        className="block group cursor-pointer"
      >
        {/* Background Canvas */}
        <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br ${gradients[index % gradients.length]}`}>
          {/* Browser Mockup */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80%] bg-white dark:bg-zinc-800 rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-[55%] browser-shadow">
            {/* macOS Header */}
            <div className="h-6 sm:h-8 bg-zinc-100 dark:bg-zinc-900 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 border-b border-zinc-200 dark:border-zinc-700">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            {/* Browser Content */}
            <div className="relative flex-grow bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200/50 dark:border-zinc-700/50">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 85vw, 480px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <Lock className="w-8 h-8 text-zinc-300 dark:text-zinc-600" strokeWidth={1.5} />
                  <span className="font-serif text-3xl sm:text-4xl text-zinc-800 dark:text-zinc-200">{project.title}</span>
                  <span className="font-handwriting text-lg sm:text-xl text-zinc-400 dark:text-zinc-500">
                    private build, ask me about it
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 pl-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className={`px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold rounded-full border uppercase tracking-widest whitespace-nowrap ${tagStyles[i % tagStyles.length]}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between">
            <h3 className="font-serif text-[1.35rem] sm:text-2xl text-zinc-900 dark:text-zinc-100 leading-none">
              {project.title}
            </h3>
            <ArrowUpRight
              strokeWidth={1.5}
              className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:-translate-y-0"
            />
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base pr-8">
            {project.description}
          </p>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 group-hover:underline underline-offset-4">
            {project.cta} →
          </span>
        </div>
      </a>
    </motion.div>
  );
}
