'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo, experience } from '@/lib/data';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-handwriting text-3xl md:text-5xl text-blue-600 dark:text-blue-400 mb-16 uppercase tracking-wider font-bold">
          A LITTLE ABOUT ME
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shrink-0 shadow-xl ring-4 ring-white dark:ring-zinc-800">
            <Image
              src="/images/me-portfolio.png"
              alt={personalInfo.name}
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-cover"
              style={{ objectPosition: 'center 15%' }}
              priority
            />
          </div>

          <div className="flex flex-col justify-center h-full pt-4">
            <h2 className="font-serif text-5xl md:text-7xl text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-serif italic mb-6">
              {personalInfo.title} based in {personalInfo.location}
            </p>
            <div className="flex gap-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">GitHub</a>
              <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">Email</a>
            </div>
          </div>
        </div>

        {/* Row 1: My Story + I've Worked At */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">My Story</h3>
            <div className="text-zinc-700 dark:text-zinc-300 space-y-4 leading-relaxed font-sans text-sm md:text-base">
              <p>{personalInfo.summary}</p>
              <p>
                I thrive in environments where I can wear multiple hats and bridge the gap between design and engineering.
                My focus is always on creating seamless, intuitive, and highly performant user interfaces.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">I've Worked At</h3>
            <div className="flex flex-col gap-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="group cursor-default">
                  <h4 className="font-serif text-xl text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.company}</h4>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">{exp.title}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide uppercase">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Why Frontend + Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">Why Frontend Engineering?</h3>
            <div className="text-zinc-700 dark:text-zinc-300 space-y-4 leading-relaxed font-sans text-sm md:text-base">
              <p>
                I've always been fascinated by how users interact with software. Frontend engineering allows me to immediately see
                the impact of my code and craft experiences that humans touch every day.
              </p>
              <p>
                There's a unique satisfaction in taking a complex system and designing an elegant, minimalist interface that
                completely abstracts away the difficulty for the end user.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">Tools I Live In</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Claude',     icon: '/images/tools/claude.png' },
                { name: 'Figma',      icon: '/images/tools/figma.png' },
                { name: 'VS Code',    icon: '/images/tools/vscode.png' },
                { name: 'React',      icon: '/images/tools/react.png' },
                { name: 'Next.js',    icon: '/images/tools/nextjs.png' },
                { name: 'Tailwind',   icon: '/images/tools/tailwind.png' },
                { name: 'Shadcn',     icon: '/images/tools/shadcn.png' },
                { name: 'GitHub',     icon: '/images/tools/github.png' },
                { name: 'Vercel',     icon: '/images/tools/vercel.png' },
                { name: 'Lovable',    icon: '/images/tools/lovable.png' },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-2 w-12">
                  <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-default overflow-hidden">
                    <img src={tool.icon} alt={tool.name} width={30} height={30} className="object-contain" />
                  </div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 text-center leading-tight">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </main>
  );
}
