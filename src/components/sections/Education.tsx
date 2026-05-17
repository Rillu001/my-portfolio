"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";
import { Section } from "@/components/layout/Section";
import { education, type EducationEntry } from "@/lib/data/education";
import { defaultTransition, fadeUp, viewportOnce } from "@/lib/motion";

function EducationCard({
  entry,
  index,
}: {
  entry: EducationEntry;
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
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      className="surface-card-hover-gold flex gap-4"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400">
        <GraduationCap size={22} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-semibold text-white">{entry.degree}</h3>
          <span
            className={`rounded-md px-2 py-0.5 text-xs font-medium ${
              entry.status === "pursuing"
                ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
            }`}
          >
            {entry.status === "pursuing" ? "In progress" : "Completed"}
          </span>
        </div>
        <p className="mt-2 period-badge w-fit">{entry.years}</p>
        <p className="mt-2 text-sm text-zinc-400">{entry.institution}</p>
        <p className="mt-1 text-xs text-zinc-500">{entry.mode}</p>
        {entry.details && (
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {entry.details}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export function Education() {
  return (
    <Section
      id="education"
      label="03 — Education"
      title="Academic background"
      subtitle="B.E. completed 2011–2015 · MCA in cyber security at Manipal University, Rajasthan (2025–2027)."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((entry, index) => (
          <EducationCard key={entry.degree} entry={entry} index={index} />
        ))}
      </div>
    </Section>
  );
}
