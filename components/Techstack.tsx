"use client";
import { motion } from "framer-motion";
import { TechCategory } from "@/typings";

type Props = { categories: TechCategory[] };

export default function Techstack({ categories }: Props) {
  return (
    <section id="stack" className="py-28" style={{ background: "var(--bg-warm)" }}>
      <div className="container-tight">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="section-label mb-3">Stack</p>
          <h2 className="font-serif font-light" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-1)" }}>
            Tools of the trade
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: ci * 0.08 }}
              className="p-7"
              style={{ background: "var(--surface)" }}
            >
              {/* Category heading */}
              <p className="section-label mb-6">{cat.category}</p>

              {/* Items */}
              <div className="flex flex-col gap-4">
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.08 + ii * 0.04 }}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-7 h-7 rounded-lg p-1 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: "var(--surface-2)", border: "1px solid var(--border-light)" }}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-sm font-light transition-opacity duration-200 group-hover:opacity-60"
                      style={{ color: "var(--text-2)" }}>
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
