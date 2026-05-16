"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { Section } from "@/components/layout/Section";
import { site } from "@/lib/data/site";
import { defaultTransition, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const contactItems = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/Rillu001",
    href: site.github,
    icon: GitHubIcon,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <Section
      id="contact"
      label="06 — Contact"
      title="Get in touch"
      subtitle={site.contactCta}
    >
      <motion.div
        className="grid gap-4 sm:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.08 }}
            >
              <a
                href={item.href}
                target={"external" in item && item.external ? "_blank" : undefined}
                rel={
                  "external" in item && item.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="surface-card-hover block h-full"
              >
                <Icon className="h-5 w-5 text-blue-400" />
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-white break-all">
                  {item.value}
                </p>
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
