"use client";
import { motion } from "framer-motion";
import { FrontPage, Social } from "@/typings";
import { SocialIcon } from "react-social-icons";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

type Props = { frontPage: FrontPage; social: Social[] };

export default function Contact({ frontPage, social }: Props) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(frontPage.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28" style={{ background: "var(--bg-warm)" }}>
      <div className="container-tight">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="section-label mb-4">Contact</p>

          <h2 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-1)" }}>
            Let&apos;s build something{" "}
            <em style={{ color: "var(--accent-warm)", fontStyle: "italic" }}>together</em>
          </h2>

          <p className="text-sm font-light leading-relaxed max-w-md mx-auto mb-10" style={{ color: "var(--text-2)" }}>
            Open to new opportunities, interesting engineering problems, or just a good conversation.
          </p>

          {/* Email CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href={`mailto:${frontPage.email}`}
              className="px-8 py-3 rounded-full text-sm font-light tracking-wide text-white transition-all duration-300 hover:opacity-80"
              style={{ background: "var(--accent)", letterSpacing: "0.04em" }}
            >
              {frontPage.email}
            </a>
            <button
              onClick={copy}
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-light border transition-all duration-300 hover:opacity-60"
              style={{ color: "var(--text-2)", borderColor: "var(--border)", letterSpacing: "0.04em" }}
            >
              {copied
                ? <><FiCheck size={13} className="text-green-500" /> Copied</>
                : <><FiCopy size={13} /> Copy</>
              }
            </button>
          </div>

          {/* Divider */}
          <hr className="hairline max-w-xs mx-auto mb-8" />

          {/* Socials */}
          <div className="flex justify-center gap-1 mb-4">
            {social.map((s) => (
              <SocialIcon
                key={s._id}
                url={s.url}
                fgColor="var(--text-3)"
                bgColor="transparent"
                style={{ width: 32, height: 32 }}
                target="_blank"
                className="transition-opacity hover:opacity-40"
              />
            ))}
          </div>

          <p className="text-xs font-light" style={{ color: "var(--text-3)", letterSpacing: "0.1em" }}>
            {frontPage.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
