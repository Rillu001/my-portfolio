"use client";

import { motion } from "framer-motion";
import { Rocket, Shield, Sparkles, Target, Zap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { aiTools } from "@/lib/data/ai-tools";
import { aiApproach } from "@/lib/data/site";
import { techStack } from "@/lib/data/tech-stack";
import { defaultTransition, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const benefitIcons = [Rocket, Zap, Shield, Target] as const;

export function TechStack() {
  return (
    <Section
      id="skills"
      label="05 — Skills"
      title="Tech stack & how I build"
      subtitle="The technologies I use — and why clients choose an AI-assisted workflow to ship faster."
    >
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {techStack.map((category, catIndex) => (
          <motion.div
            key={category.name}
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: catIndex * 0.06 }}
            className="surface-card"
          >
            <h3 className="mb-3 text-sm font-semibold text-white">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item} className="skill-tag">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 overflow-hidden rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.08] via-[#111113] to-[#111113] p-6 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={defaultTransition}
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/15">
            <Sparkles className="h-5 w-5 text-amber-400" aria-hidden />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {aiApproach.headline}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-100/80 sm:text-base">
              {aiApproach.tagline}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {aiApproach.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {aiApproach.clientBenefits.map((benefit, i) => {
            const Icon = benefitIcons[i] ?? Sparkles;
            return (
              <div
                key={benefit.title}
                className="rounded-lg border border-white/[0.08] bg-black/25 p-4"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-amber-400" aria-hidden />
                  <h4 className="font-semibold text-white">{benefit.title}</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {aiApproach.practices.map((practice) => (
            <span
              key={practice}
              className="rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200"
            >
              {practice}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-white/[0.08] pt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            AI tools in the workflow
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {aiTools.map((tool) => (
              <span key={tool.name} className="skill-tag text-zinc-300">
                {tool.name}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-base font-medium text-white">{aiApproach.cta}</p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="mt-4 inline-flex rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:from-amber-500 hover:to-amber-400"
        >
          Start a conversation
        </a>
      </motion.div>
    </Section>
  );
}
