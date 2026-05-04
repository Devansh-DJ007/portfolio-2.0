"use client";
import { motion } from "framer-motion";
import { Achievement } from "@/typings";

type Props = { achievements: Achievement[] };

export default function Achievements({ achievements }: Props) {
  return (
    <section id="achievements" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="container-tight">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="section-label mb-3">Achievements</p>
          <h2 className="font-serif font-light" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-1)" }}>
            Recognition &amp; education
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {achievements.map((a, i) => (
            <motion.div
              key={a._id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="group flex items-start gap-6 py-7 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex-shrink-0 w-10 text-center pt-0.5">
                <span className="text-xl">{a.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-2">
                  <h3 className="font-serif text-xl font-light" style={{ color: "var(--text-1)" }}>
                    {a.title}
                  </h3>
                  <span className="text-xs font-light" style={{ color: "var(--accent-warm)" }}>
                    {a.org}
                  </span>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-2)" }}>
                  {a.description}
                </p>
              </div>
              <span
                className="flex-shrink-0 text-xs font-light tracking-wide pt-1"
                style={{ color: "var(--text-3)", letterSpacing: "0.1em" }}
              >
                {a.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
