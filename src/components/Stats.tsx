import { motion } from "framer-motion";
import { stats, stack } from "../config";

export default function Stats() {
  return (
    <section className="stats" id="about">
      <div className="container">
        <motion.div
          className="stats__band"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
            >
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
              <div className="stat__sub">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="stack">
          <span className="eyebrow">Core stack</span>
          <div className="stack__chips">
            {stack.map((t, i) => (
              <motion.span
                key={t}
                className="chip"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * i }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
