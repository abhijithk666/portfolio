'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../ui/project-card';
import { projects } from '@/lib/data';

const filterTabs = ['All', 'Web', 'App', 'Side Quests'];

export function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = projects;

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-1 sm:gap-2 p-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
