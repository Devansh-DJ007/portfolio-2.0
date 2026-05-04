"use client";
import { motion } from "framer-motion";
import { Photo, Game } from "@/typings";
import { useState } from "react";

type Props = { photos: Photo[]; games: Game[] };

export default function Hobbies({ photos, games }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  const CARD_W = 200;
  const SPREAD = Math.min(130, (1000 - CARD_W) / Math.max(photos.length - 1, 1));
  const FAN_H  = 460;

  return (
    <section id="hobbies" className="py-28 overflow-hidden" style={{ background: "var(--bg-warm)" }}>
      <div className="container-wide">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="section-label mb-3">Beyond the code</p>
          <h2 className="font-serif font-light" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-1)" }}>
            Hobbies &amp; interests
          </h2>
        </motion.div>

        {/* ── Photography ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-xl">📷</span>
            <div>
              <h3 className="font-serif text-xl font-light" style={{ color: "var(--text-1)" }}>
                Photography
              </h3>
              <p className="text-xs font-light mt-0.5" style={{ color: "var(--text-3)" }}>
                Capturing places, light, and moments — mostly on trips
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex justify-center items-end"
            style={{ height: `${FAN_H}px` }}
          >
            {photos.map((photo, i) => {
              const count = photos.length;
              const baseX = (i - (count - 1) / 2) * SPREAD;
              const baseY = i % 2 === 0 ? -12 : 12;
              const isHov = hovered === photo._id;

              return (
                <motion.div
                  key={photo._id}
                  className="absolute bottom-0 cursor-pointer select-none"
                  style={{ rotate: `${photo.rotate}deg`, x: baseX, y: baseY, zIndex: isHov ? 30 : i }}
                  whileHover={{ rotate: 0, y: -50, scale: 1.12, zIndex: 30, transition: { duration: 0.22, ease: "easeOut" } }}
                  onMouseEnter={() => setHovered(photo._id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{
                    background: "#FDFCF9",
                    border: "1px solid #E8E4DC",
                    padding: "10px 10px 40px 10px",
                    width: `${CARD_W}px`,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                    borderRadius: "3px",
                  }}>
                    <div className="overflow-hidden" style={{ height: "220px" }}>
                      <img src={photo.src} alt={photo.location} className="w-full h-full object-cover" draggable={false} />
                    </div>
                    <p className="text-center mt-3 font-serif text-sm italic" style={{ color: "#5C5850", fontWeight: 300 }}>
                      {photo.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Gaming — 3 cards in a single row ── */}
        {/* <div> */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-xl">🎮</span>
            <div>
              <h3 className="font-serif text-xl font-light" style={{ color: "var(--text-1)" }}>
                Gaming
              </h3>
              <p className="text-xs font-light mt-0.5" style={{ color: "var(--text-3)" }}>
                When I&apos;m not shipping code — I&apos;m clashing
              </p>
            </div>
          </motion.div> */}

          {/* 3 equal-width cards, single row */}
          {/* <div className="grid grid-cols-3 gap-4" style={{ maxWidth: "820px" }}>
            {games.map((game, i) => (
              <motion.div
                key={game._id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                
                <div
                  className="h-16 flex items-center px-4 gap-3"
                  style={{
                    background: `linear-gradient(135deg, ${game.color}25 0%, ${game.color}08 100%)`,
                    borderBottom: `1px solid ${game.color}25`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border" style={{ borderColor: `${game.color}50` }}>
                    <img src={game.logo} alt={game.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif text-sm font-light truncate" style={{ color: "var(--text-1)" }}>
                      {game.name}
                    </p>
                    <p className="text-xs font-light truncate" style={{ color: game.color }}>
                      {game.level}
                    </p>
                  </div>
                </div>

                
                <div className="px-4 py-3 flex flex-col gap-2">
                  <p className="text-[10px] font-light mb-1 tracking-widest" style={{ color: "var(--text-3)", letterSpacing: "0.12em" }}>
                    {game.playerName}
                  </p>
                  {game.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-xs font-light" style={{ color: "var(--text-3)" }}>{stat.label}</span>
                      <span className="text-xs font-medium" style={{ color: "var(--text-1)" }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div> */}
        {/* </div> */}

      </div>
    </section>
  );
}
