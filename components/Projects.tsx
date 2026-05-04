"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/typings";
import { TECH_ICONS } from "@/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

type Props = { projects: Project[] };

function TechIconRow({ tech }: { tech: string[] }) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  return (
    <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t" style={{ borderColor: "var(--border-light)" }}>
      {tech.map((t) => {
        const icon = TECH_ICONS[t];
        const isHovered = hoveredTech === t;
        return (
          <div
            key={t}
            className="relative"
            onMouseEnter={() => setHoveredTech(t)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <motion.div
              className="w-7 h-7 rounded-full border flex items-center justify-center p-1 cursor-default"
              style={{
                background: isHovered ? "var(--accent-bg)" : "var(--surface-2)",
                borderColor: isHovered ? "var(--accent)" : "var(--border)",
              }}
              whileHover={{ scale: 1.18 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {icon ? (
                <img src={icon} alt={t} className="w-full h-full object-contain" />
              ) : (
                <span className="text-[8px] font-medium" style={{ color: "var(--text-3)" }}>
                  {t.slice(0, 2).toUpperCase()}
                </span>
              )}
            </motion.div>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.92 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute bottom-full left-1/2 mb-2 px-2 py-1 rounded-md text-[10px] font-medium whitespace-nowrap pointer-events-none"
                  style={{
                    transform: "translateX(-50%)",
                    background: "var(--text-1)",
                    color: "var(--bg)",
                    zIndex: 50,
                  }}
                >
                  {t}
                  <span
                    className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
                    style={{ borderTopColor: "var(--text-1)" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="font-serif font-light" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-1)" }}>
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]" style={{ background: "#0D1117" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-90 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)" }}
                />
                {/* Links — GitHub + Live */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={project.github}
                    target="_blank"
                    title="GitHub"
                    className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-opacity hover:opacity-70"
                    style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={14} />
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      title="Live demo"
                      className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-opacity hover:opacity-70"
                      style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                {/* Title + live link inline */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg font-light" style={{ color: "var(--text-1)" }}>
                    {project.title}
                  </h3>
                  {project.live && (
                    <a
                      href={project.live === "#" ? undefined : project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-[10px] font-light tracking-wide flex-shrink-0 mt-1 transition-opacity hover:opacity-50"
                      style={{
                        color: project.live === "#" ? "var(--text-3)" : "var(--accent)",
                        cursor: project.live === "#" ? "default" : "pointer",
                        letterSpacing: "0.08em",
                      }}
                    >
                      <FiExternalLink size={11} />
                      {project.live === "#" ? "soon" : "live"}
                    </a>
                  )}
                </div>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-2)" }}>
                  {project.description}
                </p>
                <TechIconRow tech={project.tech} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Devansh-DJ007"
            target="_blank"
            className="text-xs tracking-widest font-light transition-opacity hover:opacity-40"
            style={{ color: "var(--text-3)", letterSpacing: "0.18em" }}
          >
            VIEW ALL ON GITHUB →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
