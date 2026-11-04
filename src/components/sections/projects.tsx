'use client';

import { ProjectCard } from '../ui/project-card';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
