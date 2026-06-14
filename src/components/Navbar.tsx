import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { track } from "@vercel/analytics";
import { profile } from "../config";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__logo">{profile.shortName}</span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-dark nav__cta"
          href={profile.resumeUrl}
          download="Katravath-Vinod-Resume.pdf"
          onClick={() => track("resume_download", { from: "navbar" })}
        >
          Résumé <Download size={16} />
        </a>
      </div>
    </motion.header>
  );
}
