import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../config";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Featured work</span>
          <div className="section-head">
            <h2>
              Selected <span className="grad-text">projects</span>
            </h2>
            <p>Three things I'm proud of — shipped, used, and measured.</p>
          </div>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className={`pcard ${p.featured ? "pcard--big" : ""} ${
                p.accent ? "pcard--accent" : ""
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {p.featured && <div className="pcard__shot" aria-hidden />}
              <div className="pcard__body">
                <div className="pcard__title">
                  <h3>{p.title}</h3>
                  {p.badge && <span className="pcard__badge">{p.badge}</span>}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="pcard__link"
                      aria-label={`Open ${p.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
                <p className="pcard__desc">{p.description}</p>
                <div className="pcard__tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
