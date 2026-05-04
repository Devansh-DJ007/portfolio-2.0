"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { FrontPage } from "@/typings";

const NAV = [
  { label: "Work",         href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Stack",        href: "#stack" },
  { label: "Hobbies",      href: "#hobbies" },
  { label: "Contact",      href: "#contact" },
];

export default function Header({ frontPage }: { frontPage: FrontPage }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState("");

  /* ── Scroll shadow ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container-wide flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link href="/#hero">
          <span
            className="font-serif text-lg tracking-wide transition-opacity hover:opacity-60"
            style={{ color: "var(--text-1)", fontStyle: "italic", fontWeight: 400 }}
          >
            DJ
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => {
            const id = n.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm font-sans font-light tracking-wide transition-all duration-200"
                style={{ color: isActive ? "var(--text-1)" : "var(--text-3)" }}
              >
                {n.label}
                {/* Active underline */}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ background: "var(--accent-warm)" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={frontPage.resumeURL}
            target="_blank"
            className="hidden md:block text-xs tracking-widest font-light transition-opacity hover:opacity-50"
            style={{ color: "var(--text-3)", letterSpacing: "0.15em" }}
          >
            RÉSUMÉ
          </a>
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--text-2)" }}
          >
            <span className="text-sm tracking-widest" style={{ letterSpacing: "0.1em" }}>
              {menuOpen ? "✕" : "MENU"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden py-6 px-8 flex flex-col gap-5 border-t"
          style={{ background: "var(--bg)", borderColor: "var(--border)" }}
        >
          {NAV.map((n) => {
            const id = n.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={n.href}
                href={n.href}
                className="font-serif text-xl italic transition-opacity"
                style={{ color: isActive ? "var(--accent-warm)" : "var(--text-1)" }}
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </a>
            );
          })}
          <a
            href={frontPage.resumeURL}
            target="_blank"
            className="text-xs tracking-widest mt-2"
            style={{ color: "var(--text-3)", letterSpacing: "0.15em" }}
          >
            RÉSUMÉ
          </a>
        </div>
      )}
    </header>
  );
}
