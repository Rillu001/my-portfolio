"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/layout/Section";
import { experience, type ExperienceEntry } from "@/lib/data/experience";
import { defaultTransition, fadeUp, viewportOnce } from "@/lib/motion";

function ExperienceCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay: index * 0.08 }}
      className="surface-card-hover grid gap-4 sm:grid-cols-[140px_1fr]"
    >
      <div>
        <p className="period-badge">{entry.period}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{entry.company}</h3>
        <p className="mt-1 text-sm text-blue-400">{entry.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {entry.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      label="02 — Experience"
      title="Work history"
      subtitle="Four roles across hosting, ecommerce, logistics, and healthcare — with clear timelines and growing scope."
    >
      <div className="space-y-4">
        {experience.map((entry, index) => (
          <ExperienceCard key={entry.company} entry={entry} index={index} />
        ))}
      </div>
    </Section>
  );
}
