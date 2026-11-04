'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { personalInfo, experience, education, skills } from '@/lib/data';

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full"
      >
        <h1 className="font-handwriting text-3xl md:text-5xl text-blue-600 dark:text-blue-400 mb-8 uppercase tracking-wider font-bold">
          THE BORING STUFF
        </h1>

        <h2 className="font-serif text-5xl md:text-7xl text-zinc-900 dark:text-zinc-100 mb-12 tracking-tight text-center">
          Resume
        </h2>

        <a
          href="/resume.pdf"
          download="Abhijith_K_Resume.pdf"
          className="glossy-btn text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl mb-16"
        >
          <Download size={20} />
          Download PDF
        </a>

        {/* Resume Document */}
        <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm p-8 md:p-12">

          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-700 pb-8 mb-8">
            <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-1">{personalInfo.name}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-base mb-5">{personalInfo.title} | {personalInfo.subtitle}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={13} /> {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-4">Summary</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{personalInfo.summary}</p>
          </div>

          {/* Technical Skills */}
          <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-5">Technical Skills</h2>
            <div className="space-y-2.5 text-sm">
              {skills.map((group) => (
                <div key={group.label} className="flex flex-wrap gap-x-2">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 shrink-0">{group.label}:</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{group.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-6">Experience</h2>
            <div className="space-y-10">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  {/* Role header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h3 className="font-serif text-xl text-zinc-900 dark:text-zinc-100">{exp.title}</h3>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">{exp.company} — {exp.location}</p>

                  {/* Projects within role */}
                  <div className="space-y-5">
                    {exp.projects.map((project, pIdx) => (
                      <div key={pIdx}>
                        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                          {project.url ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              • {project.name}
                            </a>
                          ) : (
                            <span>• {project.name}</span>
                          )}
                        </p>
                        <ul className="space-y-1.5 ml-4">
                          {project.achievements.map((point, aIdx) => (
                            <li key={aIdx} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex gap-2">
                              <span className="text-zinc-300 dark:text-zinc-600 shrink-0 mt-1">–</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-5">Education</h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="font-serif text-xl text-zinc-900 dark:text-zinc-100">{education.degree}</h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap">{education.period}</span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{education.institution}</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">{education.location}</p>
          </div>

        </div>
      </motion.div>
    </main>
  );
}
