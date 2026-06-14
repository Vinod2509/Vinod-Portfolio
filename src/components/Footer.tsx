import { Github, Linkedin, Code2 } from "./BrandIcons";
import { profile } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__note">
          Built by hand in {profile.location.split(" / ")[0]} — no templates.
        </span>
        <div className="footer__right">
          <div className="footer__socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <Code2 size={18} />
            </a>
          </div>
          <span className="footer__name">— {profile.name.split(" ")[0]}</span>
        </div>
      </div>
    </footer>
  );
}
