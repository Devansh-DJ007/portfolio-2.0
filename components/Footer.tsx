"use client";
import { SocialIcon } from "react-social-icons";
import { socials } from "@/data";

export default function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: "var(--border)", background: "var(--bg-warm)" }}>
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Wordmark */}
        <span className="font-serif italic text-base" style={{ color: "var(--text-3)" }}>DJ</span>

        {/* Social icons */}
        <div className="flex items-center gap-1">
          {socials.map((s) => (
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
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-light tracking-widest" style={{ color: "var(--text-3)", letterSpacing: "0.15em" }}>
            DEVANSH JAIN · {new Date().getFullYear()}
          </span>
          <a
            href="#hero"
            className="text-xs font-light tracking-widest transition-opacity hover:opacity-40"
            style={{ color: "var(--text-3)", letterSpacing: "0.12em" }}
          >
            ↑ TOP
          </a>
        </div>
      </div>
    </footer>
  );
}
