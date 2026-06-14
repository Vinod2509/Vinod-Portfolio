import { motion } from "framer-motion";
import { experience, services } from "../config";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="container exp__grid">
        <div>
          <Reveal>
            <span className="eyebrow">Work history</span>
            <h2 className="exp__h2">
              Where I've <span className="grad-text">built</span>
            </h2>
          </Reveal>

          <div className="timeline">
            {experience.map((e, i) => (
              <motion.div
                key={e.company}
                className="tl__item"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="tl__dot" />
                <div className="tl__head">
                  <h3>{e.company}</h3>
                  {e.current && <span className="tl__now">Current</span>}
                </div>
                <div className="tl__meta">
                  {e.role} · {e.period}
                </div>
                <ul className="tl__points">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <Reveal delay={0.1}>
            <span className="eyebrow">What I do</span>
            <h2 className="exp__h2">
              How I can <span className="grad-text">help</span>
            </h2>
          </Reveal>

          <div className="svc__grid">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="svc"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
