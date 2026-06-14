import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github, Linkedin, Code2 } from "./BrandIcons";
import { profile } from "../config";
import PhotoCard from "./PhotoCard";

/** Renders headline with *highlighted* words in gradient. */
function Headline({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("*") && p.endsWith("*") ? (
          <span key={i} className="grad-text">
            {p.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* animated background waves (NeuralCare signature) */}
      <div className="hero__waves" aria-hidden>
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none">
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d="M0,300 C320,180 520,420 760,300 C1000,180 1180,400 1440,280 L1440,600 L0,600 Z"
              fill="none"
              stroke="url(#wave-grad)"
              strokeWidth="1.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.45 - i * 0.12,
                y: [0, -14 - i * 8, 0],
              }}
              transition={{
                pathLength: { duration: 2, delay: i * 0.2 },
                y: { duration: 7 + i * 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          ))}
          <defs>
            <linearGradient id="wave-grad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#16a8b0" />
              <stop offset="100%" stopColor="#58cf86" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__left">
          <motion.span
            className="hero__pill"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="dot" /> {profile.availability} · {profile.location}
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
          >
            Hi, I'm {profile.name.split(" ")[0]}. <br />
            <Headline text={profile.headline} />
          </motion.h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34, duration: 0.7 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44 }}
          >
            <a href="#work" className="btn btn-primary">
              View my work <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={profile.socials.leetcode} target="_blank" rel="noreferrer">
              <Code2 size={16} /> LeetCode
            </a>
          </motion.div>
        </div>

        <PhotoCard />
      </div>
    </section>
  );
}
