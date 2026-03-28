'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectShowcase } from '@/types';

interface ProjectCardProps {
  project: ProjectShowcase;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryTag = project.tech[0] || 'Web App';

  // Generate a random nature-like gradient based on index for placeholder backgrounds
  const gradients = [
    'from-sky-300 via-sky-200 to-emerald-300',
    'from-rose-200 via-orange-100 to-amber-200',
    'from-indigo-300 via-purple-200 to-pink-200',
    'from-teal-200 via-emerald-100 to-green-200',
  ];
  const bgGradient = gradients[index % gradients.length];

  const CardWrapper = project.liveUrl || project.githubUrl
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={project.liveUrl || project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block group cursor-pointer"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => <div className="group cursor-default">{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <CardWrapper>
        {/* Background Canvas */}
        <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br ${bgGradient}`}>
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
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-handwriting text-2xl text-zinc-400 dark:text-zinc-500">Loading UI...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1.5 pl-1">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-[1.35rem] sm:text-2xl text-zinc-900 dark:text-zinc-100 leading-none">
                {project.title}
              </h3>
              <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-900 uppercase tracking-widest whitespace-nowrap">
                {categoryTag}
              </span>
            </div>
            <ArrowUpRight
              strokeWidth={1.5}
              className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:-translate-y-0"
            />
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base pr-8 line-clamp-2">
            {project.description}
          </p>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
