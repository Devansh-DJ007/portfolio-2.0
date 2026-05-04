"use client";
import { motion } from "framer-motion";
import { FrontPage } from "@/typings";

export default function About({ frontPage }: { frontPage: FrontPage }) {
  return (
    <section id="about" className="py-24 border-t" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-16 items-start"
        >
          {/* Label */}
          <div className="pt-1">
            <p className="section-label">About</p>
          </div>

          {/* Text */}
          <div>
            <p
              className="font-serif font-light leading-relaxed"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", color: "var(--text-1)" }}
            >
              {frontPage.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
