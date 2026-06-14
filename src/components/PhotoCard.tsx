import { motion } from "framer-motion";
import { profile } from "../config";

/** Formal headshot in a rounded card with a teal gradient glow backdrop. */
export default function PhotoCard() {
  return (
    <motion.div
      className="photo"
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <div className="photo__glow" aria-hidden />
      <motion.div
        className="photo__frame"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={profile.photo}
          alt={profile.name}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/profile.svg";
          }}
        />
        <div className="photo__plate">
          <span className="photo__name">{profile.name}</span>
          <span className="photo__role">{profile.role}</span>
        </div>
      </motion.div>

      <motion.div
        className="photo__badge photo__badge--a"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="badge__k">Experience</span>
        <span className="badge__v">2+ years</span>
      </motion.div>

      <motion.div
        className="photo__badge photo__badge--b"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="badge__k">Open to</span>
        <span className="badge__v grad-text">SDE roles</span>
      </motion.div>
    </motion.div>
  );
}
