"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data/site";

const sectionIds = ["home", ...navLinks.map((l) => l.href.replace("#", ""))];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? "border-b border-white/[0.08] bg-[#09090b]/90 py-3 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-4"
        }`}
      >
        <nav className="section-container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-base font-semibold text-white"
          >
            {site.name.split(" ")[0]}
            <span className="text-zinc-500">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-all hover:from-amber-500 hover:to-amber-400 sm:inline-block"
          >
            Contact
          </a>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-zinc-300 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#09090b]/98 backdrop-blur-sm lg:hidden"
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-white/10 p-2"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-2 px-6">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block w-full rounded-lg py-3 text-center text-lg text-zinc-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
