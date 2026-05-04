"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience } from "@/typings";

type Props = { experiences: Experience[] };

const TYPE_COLOR: Record<string, string> = {
  "full-time":  "#4A9C6D",
  "internship": "#C9A96E",
  "chapter":  "#7B9EC9",
};

export default function Experiences({ experiences }: Props) {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="py-28" style={{ background: "var(--bg-warm)" }}>
      <div className="container-tight">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="font-serif font-light" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-1)" }}>
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12">

          {/* ── Timeline list ── */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative flex md:flex-col flex-row gap-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0"
          >
            {/* Vertical connector line — desktop only */}
            <div
              className="hidden md:block absolute left-[11px] top-3 bottom-3 w-px"
              style={{ background: "var(--border)" }}
            />

            {experiences.map((e, i) => {
              const isActive = active === i;
              return (
                <button
                  key={e._id}
                  onClick={() => setActive(i)}
                  className="relative flex items-start gap-3 text-left pl-0 md:pl-8 pr-4 py-3 group transition-all duration-200 flex-shrink-0 md:flex-shrink"
                >
                  {/* Timeline dot — desktop */}
                  <div
                    className="hidden md:flex absolute left-0 top-[18px] w-[23px] h-[23px] rounded-full border-2 items-center justify-center flex-shrink-0 transition-all duration-200 z-10"
                    style={{
                      background: isActive ? "var(--accent)" : "var(--bg-warm)",
                      borderColor: isActive ? "var(--accent)" : "var(--border)",
                    }}
                  >
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>

                  {/* Label */}
                  <div className="min-w-0">
                    <p
                      className="text-sm font-medium transition-colors duration-200 truncate"
                      style={{ color: isActive ? "var(--text-1)" : "var(--text-3)" }}
                    >
                      {e.company}
                    </p>
                    <p
                      className="text-xs font-light mt-0.5 hidden md:block"
                      style={{ color: "var(--text-3)" }}
                    >
                      {e.timeline}
                    </p>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* ── Content panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl p-7 border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-10 h-10 rounded-xl object-contain border p-0"
                      style={{ borderColor: "var(--border)", background: "white" }}
                    />
                  ) : (
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-serif text-lg italic text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      {exp.company.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif text-xl font-light" style={{ color: "var(--text-1)" }}>
                      {exp.position}
                    </h3>
                    <p className="text-sm font-light" style={{ color: "var(--text-3)" }}>
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <p className="text-xs tracking-wide font-light" style={{ color: "var(--text-3)", letterSpacing: "0.08em" }}>
                    {exp.timeline}
                  </p>
                  <span
                    className="text-[10px] px-2.5 py-0.5 rounded-full font-light tracking-wide"
                    style={{
                      color: TYPE_COLOR[exp.type],
                      background: `${TYPE_COLOR[exp.type]}14`,
                      border: `1px solid ${TYPE_COLOR[exp.type]}30`,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {exp.type.toUpperCase()}
                  </span>
                </div>
              </div>

              <hr className="hairline mb-5" />

              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "var(--text-2)" }}>
                {exp.description}
              </p>

              <ul className="flex flex-col gap-2.5">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-sm font-light leading-relaxed" style={{ color: "var(--text-2)" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-warm)" }} />
                    {h}
                  </li>
                ))}
              </ul>

              {exp.skills.length > 0 && (
                <div className="mt-5 pt-5 border-t flex flex-wrap gap-x-4 gap-y-1" style={{ borderColor: "var(--border-light)" }}>
                  {exp.skills.map((s) => (
                    <span key={s} className="text-xs font-light" style={{ color: "var(--text-3)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
