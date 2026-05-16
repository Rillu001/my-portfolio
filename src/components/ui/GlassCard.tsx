import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card p-6 ${hover ? "glow-border transition-transform duration-300 hover:-translate-y-1" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
