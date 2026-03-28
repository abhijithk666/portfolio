"use client";

import { motion } from "framer-motion";
import { ExternalLink, Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            Experience
          </h2>
          <div className="w-12 h-[2px] bg-foreground/20 rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, expIndex) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: expIndex * 0.1 }}
              className="relative pl-8 border-l-2 border-border hover:border-foreground/30 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[7px] top-1 w-3 h-3 bg-foreground rounded-full" />

              <div className="bg-card rounded-xl p-6 card-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground font-medium mb-2">
                      <Briefcase size={16} className="text-muted-foreground" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-6 mt-6">
                  {exp.projects.map((project, projIndex) => (
                    <div
                      key={projIndex}
                      className="border-l-2 border-border pl-4"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-base font-medium text-foreground">
                          {project.name}
                        </h4>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <ul className="space-y-1.5">
                        {project.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-foreground/40 mt-0.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
