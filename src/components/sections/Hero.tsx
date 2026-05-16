"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { Button } from "@/components/ui/Button";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col justify-center scroll-mt-20 px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <motion.div
        className="section-container max-w-3xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} transition={defaultTransition}>
          <div className="gold-accent-line mb-4" />
          <p className="text-sm font-medium text-amber-400/80">
            Portfolio · {site.yearsExperience} years in product development
          </p>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={defaultTransition}
          className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="text-white">Alimohamed</span>{" "}
          <span className="text-gold-gradient">Rilwan M</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={defaultTransition}
          className="mt-4 text-lg font-medium text-zinc-300 sm:text-xl"
        >
          {site.title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={defaultTransition}
          className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400"
        >
          {site.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={defaultTransition}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button href="#projects">
            View projects
            <ArrowRight size={16} />
          </Button>
          <Button href="#contact" variant="ghost">
            <Mail size={16} />
            Contact
          </Button>
          <Button href={site.github} variant="outline" external>
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
