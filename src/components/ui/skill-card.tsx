"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: string[];
  index: number;
}

export function SkillCard({ title, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="p-6 rounded-xl border border-border bg-card card-shadow"
    >
      <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
