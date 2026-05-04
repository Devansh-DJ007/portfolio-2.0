"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FrontPage, Social } from "@/typings";
import { SocialIcon } from "react-social-icons";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

type Props = { frontPage: FrontPage; social: Social[] };

const FADE = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero({ frontPage, social }: Props) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = frontPage.roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 58);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % frontPage.roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex, frontPage.roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* ── Warm ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-tight w-full flex flex-col items-center text-center gap-6 py-32 relative z-10">

        {/* Availability */}
        <motion.div {...FADE(0.1)} className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          <span className="section-label">Available for opportunities</span>
        </motion.div>

        {/* ── Memoji — Option 3: Pure float + drop shadow ── */}
        {/* Outer div: fade-in reveal. Inner div: continuous float animation. */}
        <motion.div {...FADE(0.2)}>
          <motion.img
            src={frontPage.photo}
            alt={frontPage.name}
            animate={{ y: [0, -10, 0], rotate: [-0.5, 0.5, -0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-36 h-36 md:w-40 md:h-40 object-contain select-none"
            draggable={false}
            style={{
              filter:
                "drop-shadow(0 18px 32px rgba(26,58,107,0.20)) drop-shadow(0 6px 10px rgba(0,0,0,0.10))",
              willChange: "transform",
            }}
          />
        </motion.div>

        {/* ── Name with 3D blob effect ── */}
        <motion.div {...FADE(0.3)} className="relative flex flex-col items-center">

          {/* 3D glow blob — sits behind the name */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "140%",
              height: "200%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(26,58,107,0.18) 0%, rgba(201,169,110,0.10) 45%, transparent 75%)",
              filter: "blur(28px)",
            }}
          />

          {/* Secondary smaller orb — offset for depth */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "80%",
              height: "120%",
              top: "40%",
              left: "52%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(26,58,107,0.12) 0%, transparent 70%)",
              filter: "blur(18px)",
            }}
          />

          <h1
            className="relative font-serif font-light leading-none z-10"
            style={{
              fontSize: "clamp(3.8rem, 11vw, 7.5rem)",
              color: "var(--text-1)",
              letterSpacing: "-0.015em",
              /* 3D depth — multiple layered shadows */
              textShadow: `
                0 1px 0 rgba(201,169,110,0.25),
                0 2px 0 rgba(201,169,110,0.18),
                0 3px 0 rgba(201,169,110,0.12),
                0 4px 0 rgba(201,169,110,0.08),
                0 6px 12px rgba(26,58,107,0.15),
                0 12px 32px rgba(26,58,107,0.10)
              `,
            }}
          >
            {frontPage.firstName}{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--accent-warm)",
                textShadow: `
                  0 1px 0 rgba(180,130,60,0.4),
                  0 2px 0 rgba(180,130,60,0.28),
                  0 3px 0 rgba(180,130,60,0.18),
                  0 5px 0 rgba(180,130,60,0.10),
                  0 8px 20px rgba(201,169,110,0.25),
                  0 16px 40px rgba(201,169,110,0.12)
                `,
              }}
            >
              {frontPage.lastName}
            </em>
          </h1>

          {/* Faint reflection / underline glow */}
          <div
            className="relative z-10 mt-1 w-3/4 h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)",
            }}
          />
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          {...FADE(0.4)}
          className="flex items-center gap-3 h-5"
          style={{ color: "var(--text-3)" }}
        >
          <span className="w-6 h-px" style={{ background: "var(--border)" }} />
          <span className="text-xs tracking-widest font-light" style={{ letterSpacing: "0.18em" }}>
            {displayed}
            <span
              className="inline-block w-px h-3 ml-0.5 animate-blink align-middle"
              style={{ background: "var(--text-3)" }}
            />
          </span>
          <span className="w-6 h-px" style={{ background: "var(--border)" }} />
        </motion.div>

        {/* Description */}
        <motion.p
          {...FADE(0.5)}
          className="max-w-md text-base font-light leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          {frontPage.description}
        </motion.p>

        {/* Location */}
        <motion.div {...FADE(0.55)} className="flex items-center gap-1.5 text-xs font-light" style={{ color: "var(--text-3)" }}>
          <HiLocationMarker size={12} style={{ color: "var(--accent-warm)" }} />
          {frontPage.location}
        </motion.div>

        {/* CTAs */}
        <motion.div {...FADE(0.6)} className="flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="px-7 py-2.5 rounded-full text-sm font-light tracking-wide text-white transition-all duration-300 hover:opacity-80 hover:-translate-y-px"
            style={{ background: "var(--accent)", letterSpacing: "0.04em" }}
          >
            Get in touch
          </a>
          <a
            href={frontPage.resumeURL}
            target="_blank"
            className="flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-light tracking-wide border transition-all duration-300 hover:opacity-60 hover:-translate-y-px"
            style={{ color: "var(--text-1)", borderColor: "var(--border)", letterSpacing: "0.04em" }}
          >
            <FiDownload size={13} /> Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div {...FADE(0.7)} className="flex items-center gap-1">
          {social.map((s) => (
            <SocialIcon
              key={s._id}
              url={s.url}
              fgColor="var(--text-3)"
              bgColor="transparent"
              style={{ width: 30, height: 30 }}
              target="_blank"
              className="transition-opacity hover:opacity-40"
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
        style={{ color: "var(--text-3)" }}
      >
        <span className="section-label">scroll</span>
        <FiArrowDown size={12} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
