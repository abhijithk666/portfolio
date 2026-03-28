"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            About Me
          </h2>
          <div className="w-12 h-[2px] bg-foreground/20 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/profile.png"
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm">📍</span>
                <span className="text-foreground text-sm">
                  {personalInfo.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm">📧</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-foreground text-sm underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm">📱</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-foreground text-sm underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-foreground/20 text-foreground rounded-full text-sm font-medium hover:border-foreground/60 transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
