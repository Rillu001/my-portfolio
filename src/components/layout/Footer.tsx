"use client";

import { navLinks, site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
