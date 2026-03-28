'use client';

import { motion } from 'framer-motion';

const funProjects = [
  {
    id: 1,
    title: 'Spin The Track',
    subtitle: 'MY OG PLAYLIST',
    desc: 'Hit The Button, Let Fate Decide',
    icon: '🎵',
    bg: 'from-violet-400 to-purple-600',
    action: 'Fetch A Random Song',
  },
  {
    id: 2,
    title: 'Visual Experiments',
    subtitle: 'CSS ART',
    desc: 'Just messing around with gradients',
    icon: '🎨',
    bg: 'from-pink-400 to-rose-600',
    action: 'View Gallery',
  },
  {
    id: 3,
    title: 'Random API Ideas',
    subtitle: 'WEEKEND HACKS',
    desc: 'Building pointless things for fun',
    icon: '⚡',
    bg: 'from-amber-400 to-orange-500',
    action: 'Try it out',
  }
];

export default function FunPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-handwriting text-3xl md:text-5xl text-blue-600 dark:text-blue-400 mb-12 uppercase tracking-wider font-bold">
          THE "I WAS BORED" FOLDER
        </h1>

        <h2 className="font-serif text-5xl md:text-7xl text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
          Fun
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-serif mb-16">
          Code for code's sake (and my own sanity)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funProjects.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              className="bg-[#f8f9fa] dark:bg-zinc-900 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow"
            >
              <div className={`w-40 h-40 rounded-xl mb-8 shadow-md bg-gradient-to-br ${item.bg} flex items-center justify-center`}>
                <span className="text-6xl">{item.icon}</span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-2">
                {item.subtitle}
              </span>
              <h3 className="font-serif text-2xl text-zinc-900 dark:text-zinc-100 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm italic font-serif mb-8">
                {item.desc}
              </p>
              <button className="mt-auto glossy-btn text-white text-sm font-medium py-3 px-6 rounded-lg w-full transition-transform hover:-translate-y-0.5 shadow-md">
                {item.action}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
