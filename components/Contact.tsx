"use client";
import { motion } from "framer-motion";
import { useInView } from "./useInView";

const contactDetails = [
  { icon: "✉", type: "Email", value: "davidbilewumi51@gmail.com" },
  { icon: "📱", type: "Primary Phone", value: "+234 913 011 8059" },
  { icon: "📱", type: "Secondary Phone", value: "+234 812 648 9682" },
  { icon: "📍", type: "Location", value: "Port Harcourt, Rivers State, Nigeria" },
];

export default function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="contact" style={{ background: "var(--ink)", scrollMarginTop: "80px" }}>
      <div
        ref={ref}
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2.5rem" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ display: "block", width: "1.5rem", height: "1px", background: "var(--gold)" }} />
          Get in Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            lineHeight: 1.2,
            marginBottom: "3rem",
            color: "var(--cream)",
          }}
        >
          Let&apos;s work together.
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{
              fontSize: "1rem",
              color: "rgba(247,244,239,0.6)",
              fontWeight: 300,
              lineHeight: 1.88,
              marginBottom: "2.5rem",
            }}>
              I am actively seeking opportunities to bring meticulous data management and client-centric excellence to a forward-thinking team. Whether you have a role, a project, or simply want to connect — my inbox is always open.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {contactDetails.map((d, i) => (
                <motion.div
                  key={d.type}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1.1rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(201,168,76,0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "0.9rem",
                  }}>
                    {d.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.32)",
                      marginBottom: "0.2rem",
                    }}>
                      {d.type}
                    </div>
                    <div style={{ fontSize: "0.94rem", color: "rgba(247,244,239,0.82)" }}>
                      {d.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              border: "1px solid rgba(201,168,76,0.18)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <h3 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "1.65rem",
              color: "var(--cream)",
              lineHeight: 1.3,
            }}>
              Ready to elevate your operations?
            </h3>
            <p style={{
              fontSize: "0.9rem",
              color: "rgba(247,244,239,0.5)",
              fontWeight: 300,
              lineHeight: 1.78,
            }}>
              Download my full professional resume for a complete overview of my career history, certifications, and references. Available for immediate engagement.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", alignItems: "flex-start" }}>
              <a
                href="/david-bilewumi-resume.pdf"
                download="David-Bilewumi-Resume.pdf"
                style={{
                  display: "inline-block",
                  background: "var(--gold)",
                  color: "var(--ink)",
                  textDecoration: "none",
                  padding: "0.9rem 1.8rem",
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--gold-light)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Download Resume (PDF) ↓
              </a>
              <a
                href="mailto:davidbilewumi51@gmail.com"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "var(--gold)",
                  textDecoration: "none",
                  padding: "0.9rem 1.8rem",
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                Send Email →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
