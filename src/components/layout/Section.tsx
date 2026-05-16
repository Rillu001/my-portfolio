import { Reveal } from "@/components/effects/Reveal";
import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="section-container">
        <Reveal>
          <header className="mb-10 max-w-2xl">
            <p className="section-label">{label}</p>
            <div className="gold-accent-line mt-2" />
            <h2 className="section-title mt-3">{title}</h2>
            {subtitle && (
              <p className="mt-3 text-base leading-relaxed text-zinc-400">
                {subtitle}
              </p>
            )}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
