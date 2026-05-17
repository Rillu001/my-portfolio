"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { projects, type Project } from "@/lib/data/projects";
import { defaultTransition, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const displayUrl = project.url.replace(/^https?:\/\//, "");

  return (
    <motion.article
      variants={fadeUp}
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      className="surface-card-hover-gold flex h-full flex-col"
    >
      <div>
        {project.type && (
          <p className="text-xs font-medium uppercase tracking-wide text-amber-400">
            {project.type}
          </p>
        )}
        <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="skill-tag">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
      >
        {displayUrl}
        <ExternalLink size={14} aria-hidden />
      </a>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      label="04 — Projects"
      title="Live work"
      subtitle="Products deployed and available now."
    >
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}
