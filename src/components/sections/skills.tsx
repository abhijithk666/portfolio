"use client";

import { motion } from "framer-motion";
import { SkillCard } from "../ui/skill-card";
import { skills } from "@/lib/data";

const skillCategories = [
  {
    title: "Things I Create",
    skills: [...skills.frontend, ...skills.stateManagement],
  },
  {
    title: "Styling & Animation",
    skills: skills.styling,
  },
  {
    title: "Backend & APIs",
    skills: skills.backend,
  },
  {
    title: "Cloud & DevOps",
    skills: skills.cloud,
  },
  {
    title: "Tools & Libraries",
    skills: skills.tools,
  },
  {
    title: "Databases",
    skills: skills.databases,
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            You&apos;ll catch me working with
            <br />
            <span className="text-3xl md:text-4xl italic">
              a combo of these things:
            </span>
          </h2>
          <div className="w-12 h-[2px] bg-foreground/20 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
