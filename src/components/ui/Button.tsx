"use client";

import Link from "next/link";
import { type MouseEvent, type ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-amber-600 to-amber-500 text-zinc-950 font-semibold hover:from-amber-500 hover:to-amber-400 border border-amber-400/50 shadow-[0_0_20px_-6px_rgba(212,168,83,0.4)]",
  ghost:
    "bg-transparent text-zinc-200 border border-white/10 hover:border-amber-500/30 hover:text-amber-100",
  outline:
    "bg-transparent text-zinc-300 border border-white/15 hover:border-amber-500/40 hover:text-amber-200",
};

function scrollToHash(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToHash(href);
    };

    return (
      <a href={href} onClick={handleClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
