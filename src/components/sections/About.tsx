import { Reveal } from "@/components/effects/Reveal";
import { Section } from "@/components/layout/Section";
import { aboutContent, aboutHighlights, strengths } from "@/lib/data/site";
import { Check } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      label="01 — About"
      title="Who I am"
      subtitle="Full stack product developer with a foundation in computer science and hands-on delivery across multiple industries."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="surface-card space-y-4 leading-relaxed text-zinc-300">
            {aboutContent.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {strengths.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-zinc-400"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className={`surface-card text-center ${
                  item.label === "MCA" || item.label === "University"
                    ? "border border-amber-500/20"
                    : ""
                }`}
              >
                <p
                  className={`text-lg font-semibold ${
                    item.label === "MCA" ? "text-gold-gradient" : "text-white"
                  }`}
                >
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
