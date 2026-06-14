import { Mail, Phone, ArrowUpRight, Download } from "lucide-react";
import { profile } from "../config";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact__card">
            <span className="eyebrow contact__eyebrow">Get in touch</span>
            <h2 className="contact__title">
              Like what you see?
              <br />
              <span className="grad-text">Let's talk.</span>
            </h2>
            <p className="contact__sub">
              I usually reply within a day. Open to full-time roles and
              interesting problems.
            </p>

            <div className="contact__rows">
              <a className="contact__row" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                <div>
                  <span className="contact__k">Email</span>
                  <span className="contact__v">{profile.email}</span>
                </div>
                <ArrowUpRight size={18} className="contact__arrow" />
              </a>
              {profile.phone && (
                <a
                  className="contact__row"
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                >
                  <Phone size={18} />
                  <div>
                    <span className="contact__k">Phone</span>
                    <span className="contact__v">{profile.phone}</span>
                  </div>
                  <ArrowUpRight size={18} className="contact__arrow" />
                </a>
              )}
            </div>

            <div className="contact__actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <Mail size={17} /> Email me
              </a>
              <a
                className="btn btn-ghost"
                href={profile.resumeUrl}
                download="Katravath-Vinod-Resume.pdf"
              >
                <Download size={17} /> Download résumé
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
