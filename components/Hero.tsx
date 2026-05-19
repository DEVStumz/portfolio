"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const stats = [
  { number: "100%", label: "Data Accuracy" },
  { number: "0", label: "Data Loss Record" },
  { number: "Multi", label: "Channel Support" },
  { number: "CRM+", label: "Tools Proficient" },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: "80px",
      }}
      className="grid-cols-1 md:grid-cols-2"
    >
      {/* Left: Text */}
      <div
        style={{
          padding: "5rem 3rem 5rem 5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="px-6 md:px-20 py-16 md:py-0"
      >
        <motion.p
          {...fadeUp(0.1)}
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ display: "block", width: "2rem", height: "1px", background: "var(--gold)" }} />
          Administrative Professional
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
            lineHeight: 1.08,
            color: "var(--ink)",
            marginBottom: "1.5rem",
          }}
        >
          David
          <br />
          Oluwasegun
          <br />
          <em style={{ color: "var(--rust)", fontStyle: "italic" }}>Bilewumi</em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          style={{
            fontSize: "1.05rem",
            color: "var(--ink-mid)",
            fontWeight: 300,
            maxWidth: "38ch",
            marginBottom: "2.5rem",
            lineHeight: 1.85,
          }}
        >
          Transforming operational chaos into precision-engineered systems — where absolute data integrity meets exceptional client experience.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
        >
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--ink)",
              color: "var(--cream)",
              textDecoration: "none",
              padding: "0.9rem 2rem",
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--rust)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--ink)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Case Studies →
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid var(--ink-mid)",
              color: "var(--ink-mid)",
              textDecoration: "none",
              padding: "0.9rem 2rem",
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--ink-mid)";
              (e.currentTarget as HTMLElement).style.color = "var(--ink-mid)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Right: Dark panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" as const }}
        style={{
          background: "var(--ink)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5rem 3.5rem",
          position: "relative",
          overflow: "hidden",
        }}
        className="hidden md:flex"
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            border: "60px solid rgba(201,168,76,0.1)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "200px",
            height: "200px",
            border: "40px solid rgba(184,92,56,0.08)",
            borderRadius: "50%",
          }}
        />

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "3rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.12)",
                paddingTop: "1rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "2.4rem",
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {s.number}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "rgba(247,244,239,0.72)",
            lineHeight: 1.75,
            borderLeft: "2px solid var(--gold)",
            paddingLeft: "1.25rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          "Administrative support is not merely about managing tasks; it is about engineering the framework that allows an organization to scale seamlessly."
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
